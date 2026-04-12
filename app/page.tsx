'use client'

import { useRef, useState } from 'react'
import { Zap, User, FileText, Copy, Loader2 } from 'lucide-react'

export default function HomePage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedFileName, setSelectedFileName] = useState('')

  const features = [
    {
      title: 'Fast extraction',
      description: 'Scan visible PDF text and pull out email addresses in seconds.',
      icon: Zap,
    },
    {
      title: 'No signup',
      description: 'Open the page, upload your file, and get results without creating an account.',
      icon: User,
    },
  ]

  const steps = [
    {
      title: 'Upload your PDF',
      description: 'Choose a PDF file from your device and start the extraction process.',
    },
    {
      title: 'Extract email addresses',
      description: 'The tool scans the visible text in your PDF and identifies email addresses.',
    },
    {
      title: 'Copy the results',
      description: 'Review the extracted emails and copy them into your CRM, spreadsheet, or notes.',
    },
  ]

  const faqs = [
    {
      question: 'Can I extract emails from scanned PDFs?',
      answer:
        'This tool works best for visible text PDFs. If your file is scanned or image-based, extraction may fail because there is no selectable text layer.',
    },
    {
      question: 'Is this tool free to use?',
      answer:
        'Yes. You can upload a PDF and extract visible email addresses without creating an account.',
    },
    {
      question: 'Will my file be stored?',
      answer:
        'Files are processed for extraction only. If you do not intentionally persist uploads on the server, they are not stored long-term.',
    },
  ]

  const scrollToResults = () => {
    const element = document.getElementById('results-anchor')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      setError('Only PDF files are supported.')
      setEmails([])
      setHasSearched(true)
      return
    }

    setIsLoading(true)
    setError(null)
    setEmails([])
    setHasSearched(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/extract', {
        method: 'POST',
        body: formData,
      })

      const data: {
        success?: boolean
        emails?: string[]
        count?: number
        error?: string
      } = await response.json()

      if (!response.ok || data.success === false) {
        setError(data.error || 'Failed to process this PDF.')
        setEmails([])
        return
      }

      setEmails(data.emails || [])
    } catch {
      setError('An error occurred while processing the PDF. Please try again.')
      setEmails([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFileName(file.name)
      scrollToResults()
      await handleFile(file)
    }

    e.target.value = ''
  }

  const copyAllEmails = async () => {
    if (emails.length === 0) return

    await navigator.clipboard.writeText(emails.join('\n'))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-linear-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
                Free PDF Tool
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Extract Emails from PDF
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Extract visible email addresses from PDF files in seconds. Upload your file and get
                clean, ready-to-copy results instantly.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Works best for text-based PDFs. If your file is scanned or image-based, see{' '}
                <a
                  href="/extract-emails-from-scanned-pdf"
                  className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                >
                  how to extract emails from scanned PDFs
                </a>
                .
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">Extract emails in seconds</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">No signup required</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Works for visible text PDFs</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Upload PDF
                </button>

                <a
                  href="#results-anchor"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  View results
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div id="results-anchor" className="-translate-y-6" />

              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileInput}
                className="hidden"
              />

              <div
                className="cursor-pointer rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-slate-400"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <FileText className="h-6 w-6 text-slate-700" />
                </div>

                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {isLoading ? 'Processing your PDF...' : 'Upload a PDF to extract emails'}
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  {isLoading
                    ? selectedFileName || 'Please wait while we extract email addresses.'
                    : 'Click to choose a PDF and extract visible email addresses instantly.'}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    fileInputRef.current?.click()
                  }}
                  className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    'Choose File'
                  )}
                </button>

                <p className="mt-3 text-xs text-slate-500">Visible text PDFs supported</p>
              </div>

              <div
                className={`mt-5 rounded-2xl border p-4 transition-all ${
                  isLoading ? 'border-slate-400 bg-slate-50 shadow-md' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {isLoading
                        ? 'Extracting email addresses...'
                        : error
                          ? 'Extraction failed'
                          : hasSearched
                            ? emails.length > 0
                              ? `Done — ${emails.length} email address${
                                  emails.length === 1 ? '' : 'es'
                                } found`
                              : 'No email addresses found'
                            : 'Results will appear here'}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {selectedFileName ? `File: ${selectedFileName}` : 'Upload a PDF to start'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={copyAllEmails}
                    disabled={emails.length === 0}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? 'Copied!' : 'Copy emails'}
                  </button>
                </div>

                <div className="mt-4 space-y-2">
                  {isLoading && (
                    <div className="rounded-lg border border-slate-200 bg-white px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            Extracting email addresses...
                          </p>
                          <p className="text-xs text-slate-500">
                            {selectedFileName
                              ? `Processing ${selectedFileName}`
                              : 'Processing your PDF'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isLoading && error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  {!isLoading && !error && hasSearched && emails.length === 0 && (
                    <div className="rounded-lg bg-slate-50 px-3 py-3 text-sm text-slate-500">
                      No email addresses found. This PDF may be scanned or image-based.{' '}
                      <a
                        href="/extract-emails-from-scanned-pdf"
                        className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                      >
                        Learn how to extract emails from scanned PDFs
                      </a>
                      .
                    </div>
                  )}

                  {!isLoading &&
                    !error &&
                    emails.length > 0 &&
                    emails.map((email) => (
                      <div
                        key={email}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                      >
                        {email}
                      </div>
                    ))}

                  {!hasSearched && !isLoading && (
                    <>
                      <div className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-400">
                        john.smith@example.com
                      </div>
                      <div className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-400">
                        hello@startuphub.io
                      </div>
                      <div className="rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-400">
                        contact@agency.co
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Extract email addresses in 3 simple steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Why use this tool
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Built for quick PDF email extraction
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-700" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <span className="text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Ready to extract emails from your PDF?
          </h2>
          <p className="mt-4 text-slate-600">
            Upload your file and pull out visible email addresses in a simpler, faster way.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                fileInputRef.current?.click()
              }}
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Upload PDF
            </button>
            <a
              href="#results-anchor"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white"
            >
              View results
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Need batch processing?{' '}
            <a
              href="/extract-emails-from-multiple-pdfs"
              className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              Extract emails from multiple PDFs
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}