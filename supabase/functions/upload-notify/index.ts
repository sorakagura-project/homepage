import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": Deno.env.get('NODE_ENV') === 'production' ? 'https://sorakagura.com' : '*',
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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
    const { title, description, fileContent } = await req.json()

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@sorakagura.com',
        to: 'sorakagura.project@gmail.com',
        subject: `新しいアニメーション提出: ${title}`,
        html: `
          <h2>新しいアニメーションが提出されました</h2>
          <p><strong>タイトル:</strong> ${title}</p>
          <p><strong>説明:</strong> ${description}</p>
          <p><strong>ファイル内容:</strong></p>
          <pre style="background:#f4f4f4;padding:10px;">${fileContent}</pre>
        `
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Resend API error: ${errorText}`)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})