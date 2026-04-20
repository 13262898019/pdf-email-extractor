'use client'

import { useRef, useState } from 'react'
import {
  Zap,
  User,
  FileText,
  Copy,
  Loader2,
  CheckCircle2,
  SearchX,
  Files,
} from 'lucide-react'

type FileProcessStatus = 'pending' | 'processing' | 'success' | 'error'

type FileResultItem = {
  fileName: string
  status: FileProcessStatus
  emails: string[]
  error?: string
}

export default function HomePageClient() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedFileNames, setSelectedFileNames] = useState<string[]>([])
  const [fileResults, setFileResults] = useState<FileResultItem[]>([])

  const features = [
    {
      title: 'Fast extraction',
      description: 'Scan visible PDF text and pull out email addresses in seconds.',
      icon: Zap,
    },
    {
      title: 'No signup',
      description: 'Open the page, upload one or multiple PDF files, and get results without creating an account.',
      icon: User,
    },
    {
      title: 'Copy-ready results',
      description: 'Get clean extracted emails you can quickly copy into a CRM, spreadsheet, or notes.',
      icon: Copy,
    },
    {
      title: 'Built for text-based PDFs',
      description: 'Works best for PDFs with selectable text and visible email addresses.',
      icon: FileText,
    },
  ]

  const steps = [
    {
      title: 'Upload one or multiple PDFs',
      description: 'Choose one PDF or several PDF files from your device and start extraction.',
    },
    {
      title: 'Extract email addresses',
      description: 'The tool scans visible text in each PDF and collects detected email addresses.',
    },
    {
      title: 'Copy merged results',
      description: 'Review the combined results and copy clean emails into your CRM, spreadsheet, or notes.',
    },
  ]

  const worksBestFor = [
    {
      title: 'Text-based PDFs',
      description: 'Files with selectable text usually return the best extraction results.',
    },
    {
      title: 'Visible email addresses',
      description: 'This tool is designed to find email addresses that appear clearly in the PDF content.',
    },
    {
      title: 'Single files and small batches',
      description: 'Use the main extractor for one PDF or several files, then merge results in one place.',
    },
    {
      title: 'Quick checks before outreach',
      description: 'Useful when reviewing resumes, lead lists, invoices, proposals, or contact documents.',
    },
  ]

  const noResultsReasons = [
    {
      title: 'The PDF is scanned or image-based',
      description: 'Scanned PDFs often have no selectable text layer, so visible text cannot be extracted directly.',
    },
    {
      title: 'There are no visible email addresses',
      description: 'Some PDFs simply do not contain any email addresses in the readable content.',
    },
    {
      title: 'The layout is unusual or broken',
      description: 'Heavily formatted, corrupted, or inconsistent PDFs can reduce extraction quality.',
    },
    {
      title: 'The file may need OCR first',
      description: 'If the content is locked inside images, OCR is usually needed before email extraction works well.',
    },
  ]

  const faqs = [
    {
      question: 'Can I extract emails from scanned PDFs?',
      answer:
        'This tool works best for visible text PDFs. If your file is scanned or image-based, extraction may fail because there is no selectable text layer.',
    },
    {
      question: 'Can I upload more than one PDF?',
      answer:
        'Yes. You can upload one or multiple PDF files, and the tool will merge and deduplicate the extracted email addresses.',
    },
    {
      question: 'Is this tool free to use?',
      answer:
        'Yes. You can upload PDF files and extract visible email addresses without creating an account.',
    },
    {
      question: 'Will my files be stored?',
      answer:
        'Your PDFs are processed only for extraction and are not stored as permanent uploads.',
    },
    {
      question: 'Why did no emails appear in the results?',
      answer:
        'Usually this means the PDF is scanned, image-based, contains no visible email addresses, or has formatting that makes extraction harder.',
    },
    {
      question: 'When should I check the scanned PDF guide?',
      answer:
        'Use the scanned PDF guide when your file looks readable but no emails appear, or when you cannot highlight text inside the PDF.',
    },
  ]

  const scrollToResults = () => {
    const element = document.getElementById('results-anchor')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const updateFileResult = (
    fileName: string,
    updater: (prev: FileResultItem) => FileResultItem
  ) => {
    setFileResults((prev) =>
      prev.map((item) => (item.fileName === fileName ? updater(item) : item))
    )
  }

  const processSingleFile = async (file: File): Promise<string[]> => {
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
      throw new Error(data.error || 'Failed to process this PDF.')
    }

    return Array.isArray(data.emails) ? data.emails : []
  }

  const handleFiles = async (files: File[]) => {
    if (files.length === 0) return

    const invalidFile = files.find((file) => file.type !== 'application/pdf')
    if (invalidFile) {
      setError('Only PDF files are supported.')
      setEmails([])
      setHasSearched(true)
      setFileResults([])
      return
    }

    setIsLoading(true)
    setError(null)
    setEmails([])
    setHasSearched(true)
    setCopied(false)

    const initialResults: FileResultItem[] = files.map((file) => ({
      fileName: file.name,
      status: 'pending',
      emails: [],
    }))

    setFileResults(initialResults)

    const mergedEmails = new Set<string>()
    let successCount = 0
    let failedCount = 0

    for (const file of files) {
      updateFileResult(file.name, (prev) => ({
        ...prev,
        status: 'processing',
      }))

      try {
        const extractedEmails = await processSingleFile(file)

        extractedEmails.forEach((email) => mergedEmails.add(email))

        updateFileResult(file.name, (prev) => ({
          ...prev,
          status: 'success',
          emails: extractedEmails,
        }))

        successCount += 1
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'An error occurred while processing this PDF.'

        updateFileResult(file.name, (prev) => ({
          ...prev,
          status: 'error',
          emails: [],
          error: message,
        }))

        failedCount += 1
      }
    }

    const finalEmails = Array.from(mergedEmails).sort((a, b) => a.localeCompare(b))
    setEmails(finalEmails)

    if (successCount === 0 && failedCount > 0) {
      setError('All files failed to process. Please try again.')
    } else if (failedCount > 0) {
      setError(`${failedCount} file${failedCount === 1 ? '' : 's'} could not be processed.`)
    } else {
      setError(null)
    }

    setIsLoading(false)
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

  const selectedFileLabel =
    selectedFileNames.length === 0
      ? 'Upload a PDF to start'
      : selectedFileNames.length === 1
        ? `File: ${selectedFileNames[0]}`
        : `${selectedFileNames.length} PDF files selected`

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
                Find and extract email addresses from one or multiple PDF files online. Use the main PDF email extractor to get clean, ready-to-copy results in seconds.
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
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  Single and multiple PDFs
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">No signup required</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Works for visible text PDFs</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Upload PDF files
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
                multiple
                onChange={handleFileInput}
                className="hidden"
              />

              <div
                className="cursor-pointer rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-slate-400"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Files className="h-6 w-6 text-slate-700" />
                </div>

                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {isLoading ? 'Processing your PDFs...' : 'Upload one or multiple PDFs'}
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  {isLoading
                    ? selectedFileNames.length > 1
                      ? `Please wait while we process ${selectedFileNames.length} files.`
                      : selectedFileNames[0] || 'Please wait while we extract email addresses.'
                    : 'Click to choose one or more PDF files and extract visible email addresses instantly.'}
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
                    'Choose PDF files'
                  )}
                </button>

                <p className="mt-3 text-xs text-slate-500">Visible text PDFs supported</p>
              </div>

              <div
                className={`mt-5 rounded-2xl border p-4 transition-all ${isLoading ? 'border-slate-400 bg-slate-50 shadow-md' : 'border-slate-200 bg-white'
                  }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {isLoading
                        ? 'Extracting email addresses...'
                        : error && emails.length === 0
                          ? 'Extraction failed'
                          : hasSearched
                            ? emails.length > 0
                              ? `Done — ${emails.length} unique email address${emails.length === 1 ? '' : 'es'
                              } found`
                              : 'No email addresses found'
                            : 'Results will appear here'}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">{selectedFileLabel}</p>
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
                            {selectedFileNames.length > 1
                              ? `Processing ${selectedFileNames.length} PDF files`
                              : selectedFileNames[0]
                                ? `Processing ${selectedFileNames[0]}`
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

                  {!isLoading && !error && emails.length > 0 && (
                    <div className="space-y-2">
                      {emails.map((email) => (
                        <div
                          key={email}
                          className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                        >
                          {email}
                        </div>
                      ))}
                    </div>
                  )}

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

                {fileResults.length > 0 && (
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      File status
                    </h4>

                    <div className="mt-3 space-y-2">
                      {fileResults.map((item) => (
                        <div
                          key={item.fileName}
                          className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-slate-800">
                              {item.fileName}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">
                              {item.status === 'pending' && 'Waiting to start'}
                              {item.status === 'processing' && 'Processing...'}
                              {item.status === 'success' &&
                                `${item.emails.length} email${item.emails.length === 1 ? '' : 's'} found`}
                              {item.status === 'error' && (item.error || 'Failed to process')}
                            </p>
                          </div>

                          <div className="shrink-0">
                            {item.status === 'processing' && (
                              <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                            )}
                            {item.status === 'success' && (
                              <CheckCircle2 className="h-4 w-4 text-green-600" />
                            )}
                            {item.status === 'error' && (
                              <SearchX className="h-4 w-4 text-red-600" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
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
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              What this tool works best for
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Extract visible email addresses from text-based PDFs
            </h2>
            <p className="mt-4 text-slate-600">
              This PDF email extractor is best for files with selectable text, visible email
              addresses, and simple copy-ready workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {worksBestFor.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <CheckCircle2 className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Troubleshooting
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Why no emails were found in your PDF
            </h2>
            <p className="mt-4 text-slate-600">
              If the results are empty, the issue is usually the PDF structure rather than the email
              extraction itself.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {noResultsReasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <SearchX className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            Need help with image-based files?{' '}
            <a
              href="/extract-emails-from-scanned-pdf"
              className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              Learn how scanned PDF email extraction works
            </a>
            .
          </p>
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
            Upload one or multiple PDF files and extract visible email addresses with the main PDF email extractor.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                fileInputRef.current?.click()
              }}
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Upload PDF files
            </button>
            <a
              href="#results-anchor"
              className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white"
            >
              View results
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Need help with scanned files?{' '}
            <a
              href="/extract-emails-from-scanned-pdf"
              className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              Learn how scanned PDF email extraction works
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}