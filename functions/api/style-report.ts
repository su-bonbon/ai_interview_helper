export interface Env {
  OPENAI_API_KEY: string
}

type StyleReportRequest = {
  gender?: string
  heightCm?: number
  weightKg?: number
  imageBase64?: string
}

type StyleReportResponse = {
  report: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}

export const onRequest: PagesFunction<Env> = async (context) => {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (context.request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405, headers: corsHeaders })
  }

  if (!context.env.OPENAI_API_KEY) {
    return new Response('Missing OPENAI_API_KEY', { status: 500, headers: corsHeaders })
  }

  let body: StyleReportRequest
  try {
    body = await context.request.json()
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: corsHeaders })
  }

  const { gender, heightCm, weightKg, imageBase64 } = body

  const prompt = [
    'You are a personal stylist. Create a concise style consulting report.',
    'Include:',
    '1) Overall impression and silhouette focus',
    '2) Recommended fits (tops/bottoms/outerwear)',
    '3) Color palette suggestions',
    '4) 3 outfit ideas',
    'Be friendly, practical, and avoid sensitive judgments.'
  ].join('\n')

  const content: Array<{ type: 'input_text' | 'input_image'; text?: string; image_url?: string }> = [
    {
      type: 'input_text',
      text: [
        prompt,
        '',
        `Gender: ${gender ?? 'not specified'}`,
        `Height (cm): ${heightCm ?? 'not specified'}`,
        `Weight (kg): ${weightKg ?? 'not specified'}`
      ].join('\n')
    }
  ]

  if (imageBase64) {
    content.push({
      type: 'input_image',
      image_url: `data:image/jpeg;base64,${imageBase64}`
    })
  }

  const openaiRes = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${context.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-5',
      input: [
        {
          role: 'user',
          content
        }
      ]
    })
  })

  if (!openaiRes.ok) {
    const errorText = await openaiRes.text()
    return new Response(errorText, { status: 500, headers: corsHeaders })
  }

  const data = await openaiRes.json()
  const outputText = (data?.output ?? [])
    .flatMap((item: { content?: Array<{ type?: string; text?: string }> }) => item.content ?? [])
    .filter((part: { type?: string }) => part.type === 'output_text')
    .map((part: { text?: string }) => part.text ?? '')
    .join('')
    .trim()
  const report = outputText || 'No report generated.'

  const response: StyleReportResponse = { report }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json'
    }
  })
}
