import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "npm:@supabase/supabase-js@2.39.7"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string
  email: string
  message: string
  formType: 'general' | 'join' | 'collab'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const formData: ContactFormData = await req.json()

    // Store in database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([{
        name: formData.name,
        email: formData.email,
        message: formData.message,
        form_type: formData.formType
      }])

    if (dbError) {
      throw new Error(`Database error: ${dbError.message}`)
    }

    // Send email notification via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@sorakagura.com', // Resendで認証したドメインのアドレス
        to: 'sorakagura.project@gmail.com', // 受け取りたいアドレス
        subject: `新しい問い合わせ: ${formData.formType}`,
        html: `
          <h2>新しい問い合わせがありました</h2>
          <p><strong>種類:</strong> ${formData.formType}</p>
          <p><strong>名前:</strong> ${formData.name}</p>
          <p><strong>メール:</strong> ${formData.email}</p>
          <p><strong>メッセージ:</strong></p>
          <pre>${formData.message}</pre>
        `
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Resend API error: ${errorText}`)
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})