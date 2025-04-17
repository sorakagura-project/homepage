export async function sendContactForm(formData: {
  name: string
  email: string
  message: string
  formType: 'general' | 'join' | 'collab'
}) {
  const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/contact`

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }

  return response.json()
}