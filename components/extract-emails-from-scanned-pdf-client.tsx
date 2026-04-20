'use client'

import { useRef, useState } from 'react'
import { Upload, Loader2, Copy, SearchX } from 'lucide-react'

export default function ExtractEmailsFromScannedPDFPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [copied, setCopied] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are supported.')
      return
    }

    setIsLoading(true)
    setError(null)
    setEmails([])
    setHasSearched(true)
    setCopied(false)
    setFileName(file.name)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok || data.success === false) {
        throw new Error(data.error || 'Failed to process PDF.')
      }

      setEmails(data.emails || [])
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      await handleFile(file)
    }
    e.target.value = ''
  }

  const copyAll = async () => {
    if (!emails.length) return
    await navigator.clipboard.writeText(emails.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="border-b border-slate-200 bg-linear-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
                Scanned PDF Guide
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                Why You Can’t Extract Emails from Scanned PDFs
              </h1>

              <p className="mt-5 text-lg text-slate-600">
                If email extraction fails, the issue is usually not the tool.
                Most scanned PDFs are image-based and do not contain readable text.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                This page explains why it happens, how to check your file,
                and what you can do next.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  Use the main PDF email extractor
                </a>

                <a
                  href="#check"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Test your PDF
                </a>
              </div>
            </div>

            {/* RIGHT - CHECK TOOL（降级） */}
            <div id="check" className="rounded-2xl border border-slate-200 bg-white p-5">

              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleInput}
                className="hidden"
              />

              <div
                className="cursor-pointer rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mx-auto h-6 w-6 text-slate-600" />

                <h2 className="mt-3 text-lg font-semibold">
                  Optional quick check
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  Test whether your PDF contains readable text.
                  If it is image-based, results may be empty.
                </p>

                <button className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white">
                  Upload PDF
                </button>
              </div>

              {/* RESULT */}
              <div className="mt-5 text-sm">

                {isLoading && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking PDF...
                  </div>
                )}

                {!isLoading && error && (
                  <div className="text-red-600">{error}</div>
                )}

                {!isLoading && emails.length > 0 && (
                  <div>
                    <div className="flex justify-between">
                      <span>{emails.length} emails found</span>
                      <button onClick={copyAll}>
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <div className="mt-2 space-y-1">
                      {emails.map((e) => (
                        <div key={e}>{e}</div>
                      ))}
                    </div>
                  </div>
                )}

                {!isLoading && hasSearched && emails.length === 0 && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <SearchX className="h-4 w-4" />
                    No emails found — likely a scanned PDF
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLANATION */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="text-2xl font-bold">
          Why scanned PDFs don’t work
        </h2>

        <p className="mt-4 text-slate-600">
          A normal PDF email extractor reads machine-readable text.
          A scanned PDF is usually just an image, so there is nothing to extract.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Text-based PDF</h3>
            <p className="text-sm text-slate-600 mt-1">
              You can select and copy text. Extraction works well.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Scanned PDF</h3>
            <p className="text-sm text-slate-600 mt-1">
              Looks readable, but is actually an image.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">OCR PDF</h3>
            <p className="text-sm text-slate-600 mt-1">
              Has hidden text layer, extraction may work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BACK */}
      <section className="border-t border-slate-200 py-16 text-center">
        <h2 className="text-2xl font-bold">
          For normal PDFs, use the main extractor
        </h2>

        <p className="mt-4 text-slate-600">
          If your PDF has selectable text, you can extract email addresses instantly.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 text-white"
        >
          Go to PDF Email Extractor
        </a>
      </section>
    </main>
  )
}