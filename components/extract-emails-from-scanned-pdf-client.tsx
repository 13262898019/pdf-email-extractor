'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import {
    AlertTriangle,
    ArrowRight,
    CheckCircle2,
    Copy,
    FileImage,
    FileSearch,
    Image as ImageIcon,
    Loader2,
    ScanSearch,
    Search,
} from 'lucide-react'

export default function ExtractEmailsFromScannedPDFPage() {
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const [emails, setEmails] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [hasSearched, setHasSearched] = useState(false)
    const [copied, setCopied] = useState(false)
    const [selectedFileName, setSelectedFileName] = useState('')

    const scrollToResults = () => {
        const element = document.getElementById('diagnosis-anchor')
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

    const faqs = [
        {
            question: 'Why does a scanned PDF often return no email addresses?',
            answer:
                'Most scanned PDFs are image-based. If the file does not contain a selectable text layer, a normal PDF text extractor has nothing to read.',
        },
        {
            question: 'What is the difference between a scanned PDF and a text PDF?',
            answer:
                'A text PDF contains machine-readable text that can usually be selected or copied. A scanned PDF may look readable, but is often stored as images.',
        },
        {
            question: 'Can this page still find emails in some scanned PDFs?',
            answer:
                'Yes. Some scanned PDFs already include OCR text in the background. In those cases, this checker may still detect extractable email addresses.',
        },
        {
            question: 'Do I need OCR for scanned PDFs?',
            answer:
                'In many cases, yes. OCR converts image-based text into machine-readable text so email extraction can work more reliably.',
        },
        {
            question: 'Can you extract emails from a scanned PDF?',
            answer:
                'In most cases, no. Scanned PDFs are usually image-based and do not contain a readable text layer. You typically need OCR before you can extract emails reliably.',
        },
    ]

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <section className="border-b border-slate-200 bg-linear-to-b from-amber-50/40 to-white">
                <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
                    <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-amber-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm">
                                Scanned PDF Diagnosis
                            </div>

                            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                Extract Emails from Scanned PDF (Check & Fix)
                            </h1>

                            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                                In most cases, you cannot extract emails from scanned PDF files because they are image-based and do not contain a readable text layer. This page helps you understand why email extraction fails, when OCR is needed, and how to quickly test whether your file contains extractable text.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                                <span className="rounded-full bg-slate-100 px-3 py-1">
                                    Diagnose scanned PDF issues
                                </span>
                                <span className="rounded-full bg-slate-100 px-3 py-1">
                                    Check for readable text
                                </span>
                                <span className="rounded-full bg-slate-100 px-3 py-1">
                                    OCR may be required
                                </span>
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <FileImage className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                                        <div>
                                            <h2 className="text-base font-semibold text-slate-900">
                                                Scanned PDFs are often images
                                            </h2>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                A scanned PDF may look readable, but the page content is
                                                often stored as images instead of real text.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <Search className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                                        <div>
                                            <h2 className="text-base font-semibold text-slate-900">
                                                No text layer means no extraction
                                            </h2>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                A standard email extractor reads machine-readable text.
                                                Without that text layer, it cannot reliably detect emails.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <ScanSearch className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" />
                                        <div>
                                            <h2 className="text-base font-semibold text-slate-900">
                                                OCR adds readable text
                                            </h2>
                                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                                OCR converts image-based pages into machine-readable text
                                                so extraction can work more reliably.
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
                                    Test a scanned PDF
                                </button>

                                <Link
                                    href="/"
                                    className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                                >
                                    Go to main PDF extractor
                                </Link>
                            </div>

                            <div className="mt-10 max-w-3xl">
                                <h2 className="text-2xl font-semibold text-slate-900">
                                    Why you cannot extract emails from scanned PDF files
                                </h2>
                                <p className="mt-3 text-slate-600">
                                    Scanned PDFs often do not contain machine-readable text. This is why most PDF email extractors fail on scanned documents unless OCR has already been applied.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div id="diagnosis-anchor" className="-translate-y-6" />

                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="application/pdf"
                                onChange={handleFileInput}
                                className="hidden"
                            />

                            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                                        <FileSearch className="h-5 w-5 text-slate-700" />
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="text-lg font-semibold text-slate-900">
                                            Check whether this PDF contains extractable text
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            This is a quick diagnostic check. It helps you see whether
                                            your scanned PDF already has readable text in the file.
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
                                            Running diagnosis...
                                        </span>
                                    ) : (
                                        'Choose scanned PDF'
                                    )}
                                </button>

                                <p className="mt-3 text-xs text-slate-500">
                                    Best used to test whether a scanned file already includes OCR text
                                </p>
                            </div>

                            <div
                                className={`mt-5 rounded-2xl border p-4 transition-all ${isLoading
                                    ? 'border-amber-300 bg-amber-50/40 shadow-md'
                                    : 'border-slate-200 bg-white'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-sm font-semibold text-slate-900">
                                            {isLoading
                                                ? 'Running scanned PDF diagnosis...'
                                                : error
                                                    ? 'Diagnosis failed'
                                                    : hasSearched
                                                        ? emails.length > 0
                                                            ? 'Readable text detected'
                                                            : 'No readable email text detected'
                                                        : 'Diagnosis results will appear here'}
                                        </h3>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {selectedFileName
                                                ? `File: ${selectedFileName}`
                                                : 'Upload a scanned PDF to begin'}
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
                                    {isLoading && (
                                        <div className="rounded-lg border border-slate-200 bg-white px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <Loader2 className="h-4 w-4 animate-spin text-slate-600" />
                                                <div>
                                                    <p className="text-sm font-medium text-slate-900">
                                                        Checking for text that can be extracted...
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {selectedFileName
                                                            ? `Processing ${selectedFileName}`
                                                            : 'Processing your scanned PDF'}
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
                                        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-4">
                                            <div className="flex items-start gap-3">
                                                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
                                                <div>
                                                    <p className="text-sm font-medium text-amber-900">
                                                        This file likely needs OCR
                                                    </p>
                                                    <p className="mt-1 text-sm leading-6 text-amber-800">
                                                        No extractable email text was found. This usually
                                                        means the PDF is image-based and does not contain a
                                                        readable text layer.
                                                    </p>
                                                    <p className="mt-3 text-sm leading-6 text-amber-800">
                                                        The usual next step is OCR, then retry the{' '}
                                                        <Link href="/" className="font-medium underline underline-offset-4">
                                                            main PDF extractor
                                                        </Link>
                                                        .
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {!isLoading && !error && emails.length > 0 && (
                                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-4">
                                            <div className="flex items-start gap-3">
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                                                <div>
                                                    <p className="text-sm font-medium text-emerald-900">
                                                        This PDF appears to contain extractable text
                                                    </p>
                                                    <p className="mt-1 text-sm leading-6 text-emerald-800">
                                                        Some readable content was detected, so email
                                                        extraction can work on this file without needing a
                                                        full OCR workflow.
                                                    </p>
                                                    <p className="mt-3 text-sm leading-6 text-emerald-800">
                                                        You can now try the{' '}
                                                        <Link href="/" className="font-medium underline underline-offset-4">
                                                            main PDF email extractor
                                                        </Link>
                                                        .
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
                                            Upload a scanned PDF to check whether it already includes a readable text layer.
                                        </div>
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
                        How to tell if OCR is needed
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                        Use this quick rule before trying email extraction again
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="text-sm font-semibold text-slate-500">Step 1</div>
                        <h3 className="mt-3 text-lg font-semibold text-slate-900">
                            Try selecting text in the PDF
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            If you cannot highlight or copy any text, the file is probably image-based.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="text-sm font-semibold text-slate-500">Step 2</div>
                        <h3 className="mt-3 text-lg font-semibold text-slate-900">
                            Test the file on this page
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Some scanned PDFs already include hidden OCR text, so it is worth checking once.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="text-sm font-semibold text-slate-500">Step 3</div>
                        <h3 className="mt-3 text-lg font-semibold text-slate-900">
                            Use OCR if nothing is detected
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            If no readable text is found, OCR is usually the next step before email extraction.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50">
                <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                When this page is useful
                            </p>
                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                                This page is for failed extraction cases
                            </h2>
                            <p className="mt-4 text-slate-600">
                                Use it when the main PDF extractor returns no results and you need
                                to understand whether the file is scanned, image-based, or missing
                                a readable text layer.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                'A scanned PDF returned no emails',
                                'The file came from a scanner or phone camera',
                                'You want to know whether OCR is required',
                                'The PDF looks readable but behaves like an image',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
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
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            FAQ
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                            Frequently asked questions about scanned PDF email extraction
                        </h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                                    <span className="text-base font-semibold text-slate-900">
                                        {faq.question}
                                    </span>
                                    <span className="text-slate-400 transition group-open:rotate-45">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-4 text-sm leading-6 text-slate-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                        Need to diagnose a scanned PDF right now?
                    </h2>
                    <p className="mt-4 text-slate-600">
                        Run a quick check to see whether your file already contains readable
                        text, or go back to the main extractor for normal text-based PDFs.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
                        >
                            Diagnose scanned PDF
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