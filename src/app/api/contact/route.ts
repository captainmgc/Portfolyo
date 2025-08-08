import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  hp_field: z.string().optional().default('')
})

// Naive in-memory rate limit per ip per minute (demo-only)
const hits = new Map<string, { count: number; ts: number }>()

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const data = Object.fromEntries(form.entries()) as Record<string, string>
  const parsed = schema.safeParse(data)
  if (!parsed.success) return NextResponse.json({ ok: false, error: 'Validation' }, { status: 400 })

  const { hp_field, name, email, message } = parsed.data
  if (hp_field && hp_field.trim() !== '') {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const ip = req.headers.get('x-forwarded-for') ?? 'local'
  const key = ip.split(',')[0].trim()
  const now = Date.now()
  const windowMs = Number(process.env.RATE_LIMIT_WINDOW ?? 60) * 1000
  const max = Number(process.env.RATE_LIMIT_MAX ?? 10)
  const cur = hits.get(key)
  if (!cur || now - cur.ts > windowMs) hits.set(key, { count: 1, ts: now })
  else if (cur.count >= max) return NextResponse.json({ ok: false, error: 'Rate limit' }, { status: 429 })
  else cur.count++

  // Demo: do not actually send email. Log to console.
  console.log('CONTACT_MESSAGE', { name, email, message: message.slice(0, 200) })

  return NextResponse.json({ ok: true })
}