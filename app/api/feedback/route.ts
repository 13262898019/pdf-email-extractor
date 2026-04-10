import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { message, page, type, project } = body

    if (!message || typeof message !== 'string' || message.trim().length < 3) {
      return NextResponse.json(
        { ok: false, error: 'Invalid message' },
        { status: 400 }
      )
    }

    const { error } = await supabase.from('feedback').insert([
      {
        message: message.trim(),
        page: page || 'unknown',
        type: type || 'unknown',
        project: project || 'unknown',
      },
    ])

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Feedback API error:', error)
    return NextResponse.json(
      { ok: false, error: 'Server error' },
      { status: 500 }
    )
  }
}