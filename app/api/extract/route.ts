export const runtime = 'nodejs'

import { NextRequest, NextResponse } from 'next/server'
import { CanvasFactory } from 'pdf-parse/worker'
import { PDFParse } from 'pdf-parse'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: 'No file found' }, { status: 400 })
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are supported' },
        { status: 400 }
      )
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large (max 10MB)' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const parser = new PDFParse({ data: buffer, CanvasFactory })
    const parsed = await parser.getText()
    const text = parsed.text || ''

    if (!text.trim()) {
      return NextResponse.json({
        success: false,
        emails: [],
        count: 0,
        error: 'No extractable text found. This PDF may be scanned or image-based.',
      })
    }

    const emailRegex = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g
    const matches = text.match(emailRegex)

    const emails = matches
      ? [...new Set(matches.map((email: string) => email.trim().toLowerCase()))].sort()
      : []

    return NextResponse.json({
      success: true,
      emails,
      count: emails.length,
    })
  } catch (error) {
    console.error('PDF processing error:', error)
    return NextResponse.json(
      {
        success: false,
        emails: [],
        count: 0,
        error: 'No extractable text found...',
      },
      { status: 400 }
    )
  }
}