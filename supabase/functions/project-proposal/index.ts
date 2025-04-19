import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

serve(async (req) => {
  // 🔥 OPTIONSリクエスト（プリフライト）に対応
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { title, summary, details, contact } = await req.json()

    // ✨ メール送信（例：Resend経由）
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@sorakagura.com',
        to: 'sorakagura.project@gmail.com',
        subject: `新しいプロジェクト提案: ${title}`,
        html: `
          <h2>新しいプロジェクト提案が届きました！</h2>
          <p><strong>タイトル:</strong> ${title}</p>
          <p><strong>概要:</strong> ${summary}</p>
          <p><strong>詳細:</strong></p>
          <p>${details}</p>
          <p><strong>連絡先:</strong> ${contact}</p>
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
    console.error(error)
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})