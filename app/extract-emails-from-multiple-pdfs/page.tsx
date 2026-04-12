'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  FileStack,
  FolderOpen,
  Loader2,
  Mail,
  RefreshCcw,
  Wand2,
} from 'lucide-react'

export default function ExtractEmailsFromMultiplePDFsPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([])
  const [processedFileCount, setProcessedFileCount] = useState(0)

  const scrollToResults = () => {
    const element = document.getElementById('bulk-results-anchor')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFiles = async (files: File[]) => {
    const pdfFiles = files.filter((file) => file.type === 'application/pdf')

    if (pdfFiles.length === 0) {
      setError('Please upload one or more PDF files.')
      setEmails([])
      setHasSearched(true)
      setProcessedFileCount(0)
      return
    }

    setIsLoading(true)
    setError(null)
    setEmails([])
    setHasSearched(true)
    setProcessedFileCount(pdfFiles.length)

    try {
      const allEmails: string[] = []

      for (const file of pdfFiles) {
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

        if (response.ok && data.success !== false) {
          allEmails.push(...(data.emails || []))
        }
      }

      const uniqueEmails = Array.from(
        new Set(allEmails.map((email) => email.trim().toLowerCase()))
      ).sort()

      setEmails(uniqueEmails)

      if (uniqueEmails.length === 0) {
        setError(null)
      }
    } catch {
      setError('An error occurred while processing the PDF files. Please try again.')
      setEmails([])
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setSelectedFileNames(files.map((file) => file.name))
      scrollToResults()
      await handleFiles(files)
    }

    e.target.value = ''
  }

  const copyAllEmails = async () => {
    if (emails.length === 0) return

    await navigator.clipboard.writeText(emails.join('\n'))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  const reset = () => {
    setEmails([])
    setIsLoading(false)
    setError(null)
    setHasSearched(false)
    setCopied(false)
    setSelectedFileNames([])
    setProcessedFileCount(0)
  }

  const faqs = [
    {
      question: 'Can I extract emails from multiple PDFs at once?',
      answer:
        'Yes. This page is designed for batch-style workflows where you want to pull email addresses from several PDF files and merge the results into one clean list.',
    },
    {
      question: 'Will duplicate emails be removed?',
      answer:
        'Yes. Duplicate email addresses found across multiple PDF files are automatically deduplicated before the final list is shown.',
    },
    {
      question: 'What kinds of PDFs work best in bulk mode?',
      answer:
        'Text-based PDFs work best. If some files are scanned or image-based, they may return no results unless they already contain an OCR text layer.',
    },
    {
      question: 'When would I use multiple PDF email extraction?',
      answer:
        'Typical use cases include resumes, lead lists, reports, business documents, vendor files, and folders of PDFs that need quick contact extraction.',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-linear-to-b from-sky-50/40 to-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                Bulk PDF Workflow
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Extract Emails from Multiple PDFs
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Need email addresses from more than one PDF file? This page is built for batch-style
                workflows. Upload multiple PDFs, combine the extracted results, and get one
                deduplicated email list ready to copy.
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
                Best for text-based PDFs. If some files are scanned or image-based, you may also need
                the{' '}
                <Link
                  href="/extract-emails-from-scanned-pdf"
                  className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
                >
                  scanned PDF guide
                </Link>
                .
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">Batch-friendly workflow</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Duplicate emails removed</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Best for text-based PDFs</span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FileStack className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <div>
                      <h2 className="text-base font-semibold text-slate-900">
                        Upload several PDFs
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Use this page when one file is not enough and you want to process a batch in
                        one run.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FolderOpen className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <div>
                      <h2 className="text-base font-semibold text-slate-900">
                        Merge extracted emails
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Instead of separate file-by-file results, this page combines everything into
                        one final list.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Wand2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                    <div>
                      <h2 className="text-base font-semibold text-slate-900">
                        Remove duplicates automatically
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Duplicate email addresses found across files are filtered out before the final
                        result is shown.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Upload multiple PDFs
                </button>

                <Link
                  href="/"
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Go to single PDF extractor
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div id="bulk-results-anchor" className="-translate-y-6" />

              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                multiple
                onChange={handleFileInput}
                className="hidden"
              />

              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <FileStack className="h-5 w-5 text-slate-700" />
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-lg font-semibold text-slate-900">
                      Merge email extraction results from several PDFs
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      This is a bulk-style extractor for multi-file workflows. Select more than one
                      PDF and combine all extracted email addresses into one list.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-5 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
                >
                  {isLoading ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing files...
                    </span>
                  ) : (
                    'Choose multiple PDF files'
                  )}
                </button>

                <p className="mt-3 text-xs text-slate-500">
                  Best for small-to-medium batches of text-based PDFs
                </p>
              </div>

              <div
                className={`mt-5 rounded-2xl border p-4 transition-all ${
                  isLoading ? 'border-sky-300 bg-sky-50/40 shadow-md' : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {isLoading
                        ? 'Processing multiple PDF files...'
                        : error
                          ? 'Batch extraction failed'
                          : hasSearched
                            ? emails.length > 0
                              ? `Done — ${emails.length} unique email address${
                                  emails.length === 1 ? '' : 'es'
                                } found`
                              : 'No email addresses found'
                            : 'Batch results will appear here'}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {selectedFileNames.length > 0
                        ? `${selectedFileNames.length} file${
                            selectedFileNames.length === 1 ? '' : 's'
                          } selected`
                        : 'Upload multiple PDFs to begin'}
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

                <div className="mt-4 space-y-3">
                  {selectedFileNames.length > 0 && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Selected files
                      </p>
                      <div className="mt-3 space-y-2">
                        {selectedFileNames.slice(0, 6).map((name) => (
                          <div
                            key={name}
                            className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                          >
                            {name}
                          </div>
                        ))}
                        {selectedFileNames.length > 6 && (
                          <div className="text-xs text-slate-500">
                            +{selectedFileNames.length - 6} more files
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {isLoading && (
                    <div className="rounded-lg border border-slate-200 bg-white px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            Merging email extraction results...
                          </p>
                          <p className="text-xs text-slate-500">
                            {processedFileCount > 0
                              ? `Processing ${processedFileCount} PDF file${
                                  processedFileCount === 1 ? '' : 's'
                                }`
                              : 'Processing your PDF files'}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isLoading && error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  {!isLoading && !error && hasSearched && emails.length === 0 && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
                      No email addresses were found across the selected PDF files. One or more files
                      may be scanned, image-based, or simply not contain visible email text. See the{' '}
                      <Link
                        href="/extract-emails-from-scanned-pdf"
                        className="font-medium underline underline-offset-4"
                      >
                        scanned PDF guide
                      </Link>{' '}
                      if some of your files may need OCR first.
                    </div>
                  )}

                  {!isLoading && !error && emails.length > 0 && (
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                        <div>
                          <p className="text-sm font-medium text-emerald-900">
                            Batch extraction completed
                          </p>
                          <p className="mt-1 text-sm leading-6 text-emerald-800">
                            The final list below contains unique email addresses combined from all
                            processed PDF files.
                          </p>
                        </div>
                      </div>
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
                    <div className="rounded-lg bg-slate-50 px-4 py-4 text-sm text-slate-500">
                      Select several PDF files to generate one combined email list.
                    </div>
                  )}
                </div>

                {hasSearched && !isLoading && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      <FileStack className="h-4 w-4" />
                      Add more PDFs
                    </button>

                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      <RefreshCcw className="h-4 w-4" />
                      Clear results
                    </button>
                  </div>
                )}
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
            Extract emails from several PDFs in one run
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Step 1</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Select several PDFs
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose multiple PDF files in one upload instead of repeating the single-file workflow
              over and over.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Step 2</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Merge all extracted emails
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The page combines all extracted addresses into one final result instead of showing
              separate lists per file.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Step 3</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Remove duplicates automatically
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Duplicate email addresses found across multiple PDFs are filtered out so the final list
              is cleaner and easier to use.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Common use cases
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Batch extraction is useful when one file is only part of the job
              </h2>
              <p className="mt-4 text-slate-600">
                This page is a better fit when your workflow involves folders, batches, repeated
                uploads, or repeated copy-paste steps that can be simplified into one combined run.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Reviewing many resumes or CV PDFs',
                'Collecting contact data from lead list PDFs',
                'Combining emails from multiple reports or directories',
                'Reducing repetitive upload-copy-upload workflows',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
                    <div className="text-sm font-medium text-slate-900">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Frequently asked questions about extracting emails from multiple PDFs
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
            Need one combined email list from several PDFs?
          </h2>
          <p className="mt-4 text-slate-600">
            Start a batch run with multiple files, or go back to the main extractor for standard
            single-PDF email extraction.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Start bulk extraction
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white"
            >
              Back to main extractor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}