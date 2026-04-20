import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PDF Email Extractor - What It Is and How It Works',
  description:
    'Learn what a PDF email extractor does, how it works, and when to use it. Find email addresses in PDF files faster with a simple workflow.',
  alternates: {
    canonical: '/pdf-email-extractor',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              PDF Email Extractor Guide
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              PDF Email Extractor: What It Is and How It Works
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A PDF email extractor is a tool that scans PDF files and finds visible
              email addresses automatically. Instead of checking pages one by one, you
              can extract email addresses from PDF documents in a faster, cleaner way.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              This guide explains what a PDF email extractor does, when it works best,
              and why some PDFs return no results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Use the PDF email extractor
              </a>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8" id="how-it-works">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            What is a PDF email extractor?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A PDF email extractor is built to detect email patterns inside PDF text.
            It reads the document, finds strings that look like email addresses, and
            returns a clean list you can copy into a spreadsheet, CRM, or notes app.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            In simple terms, it saves you from manually opening a PDF and searching
            page by page for contact information.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Reads PDF text</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The extractor scans readable text in the document instead of relying on
              manual searching.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Finds email patterns</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              It looks for email address formats and pulls them into a simple result
              list.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Saves time</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This is especially useful when working with resumes, contact sheets,
              reports, invoices, or lead documents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              How a PDF email extractor works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Upload a PDF</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Start with a document that contains visible, selectable text.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Scan the content</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The tool reads the text layer and checks for email address patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Return clean results</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Matching emails are collected and shown in a copy-ready list.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Use the list anywhere</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Copy the extracted email addresses into your workflow immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Best use cases
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            When to use a PDF email extractor
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            A PDF email extractor works best when the document already contains visible
            email addresses in readable text. It is useful for quick research, contact
            collection, and document review where manual searching would be slow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Good fit</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
              <li>Resume PDFs with visible contact details</li>
              <li>Lead documents and prospect lists</li>
              <li>Reports, proposals, and business documents</li>
              <li>Text-based PDFs with selectable content</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Not ideal</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
              <li>Scanned PDFs that are only images</li>
              <li>Files with no visible email addresses</li>
              <li>Corrupted or heavily broken layouts</li>
              <li>Documents that need OCR before text can be read</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Limitations
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Why a PDF email extractor may return no results
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                The PDF is scanned
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the file is image-based and has no text layer, the extractor cannot
                read the content directly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                The document has no visible emails
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Some PDFs simply do not include email addresses in the readable text.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                The layout is unusual
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Broken formatting or complex layout can make extraction less reliable.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                OCR may be required
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                For scanned files, OCR is often needed before email addresses can be
                detected correctly.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Need help with image-based files?{' '}
            <a
              href="/extract-emails-from-scanned-pdf"
              className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              Read the scanned PDF guide
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Common questions about PDF email extractors
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {[
            {
              q: 'What is a PDF email extractor?',
              a: 'A PDF email extractor is a tool that scans PDF text and collects visible email addresses into a simple result list.',
            },
            {
              q: 'Can a PDF email extractor work on scanned files?',
              a: 'Not always. If the PDF is image-based and has no readable text layer, extraction may fail unless OCR text already exists.',
            },
            {
              q: 'What kind of PDFs work best?',
              a: 'Text-based PDFs with selectable text and clearly visible email addresses usually produce the best results.',
            },
            {
              q: 'Is a PDF email extractor faster than manual searching?',
              a: 'Yes. It can save time by scanning the whole document automatically instead of checking each page by hand.',
            },
            {
              q: 'Where can I use a PDF email extractor?',
              a: 'You can use it for resumes, reports, lead lists, proposals, invoices, and other documents that contain contact details.',
            },
          ].map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <span className="text-base font-semibold text-slate-900">{faq.q}</span>
                <span className="text-slate-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Ready to use a PDF email extractor?
          </h2>
          <p className="mt-4 text-slate-600">
            Use the main PDF email extractor to find and copy email addresses from
            one or multiple PDF files.
          </p>

          <div className="mt-8">
            <a
              href="/"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Go to the main PDF email extractor
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}