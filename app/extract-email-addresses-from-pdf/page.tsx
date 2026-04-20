import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Extract Email Addresses from PDF - Simple Guide',
  description:
    'Learn how to extract email addresses from PDF files, what works best, and why some PDFs return no results. Use a simple workflow for text-based PDFs.',
  alternates: {
    canonical: '/extract-email-addresses-from-pdf',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              PDF Email Address Guide
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Extract Email Addresses from PDF
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you need to extract email addresses from PDF files, the best workflow
              depends on whether the document contains readable text. For text-based
              PDFs, email extraction is usually fast and straightforward.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              This guide explains what gets extracted, how the process works, and why
              some PDFs return clean email results while others do not.
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
                Learn how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8" id="how-it-works">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Basics
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            What does it mean to extract email addresses from a PDF?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            It means scanning the readable content of a PDF and collecting any visible
            email addresses into a clean list. Instead of manually searching page by
            page, extraction helps you pull contact information out of the document in
            one step.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            In most cases, the tool is not &quot;guessing&quot; emails. It is reading the
            text that already exists in the PDF and detecting address patterns like
            <span className="font-medium"> name@example.com</span>.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Readable text</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The PDF should contain selectable text that can be read by software.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Visible email addresses</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The document still needs to contain actual email addresses in its content.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Clean output</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The extracted results are returned in a format that is easy to copy and use.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              How email address extraction from PDF works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Open the PDF content</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The extraction process starts by reading the text inside the file.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Detect email patterns</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The tool looks for text that matches the structure of an email address.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Collect the results</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                All matched email addresses are pulled into one result list.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Copy and use them</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use the extracted email addresses in your spreadsheet, CRM, or notes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            What works best
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Best cases for extracting email addresses from PDFs
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Email extraction works best when the file is text-based, the email
            addresses are visible in the content, and the layout is not heavily broken.
            This is common in resumes, reports, lists, proposals, invoices, and other
            business documents.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Usually works well for</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
              <li>Resume PDFs with visible contact details</li>
              <li>Prospect lists and lead documents</li>
              <li>Reports and proposals with business contacts</li>
              <li>Text-based PDFs with selectable content</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Often fails for</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
              <li>Scanned PDFs with no readable text layer</li>
              <li>Documents that do not contain any email addresses</li>
              <li>Broken formatting and unusual text layout</li>
              <li>Files that need OCR before text can be read</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Common confusion
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Why some PDF files return no email addresses
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              If no results appear, the issue is usually the PDF itself. The file may
              be scanned, image-based, missing visible email addresses, or too messy
              for clean text extraction.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Scanned PDF</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the document is just an image, the extractor cannot read it like a
                normal text-based PDF.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">No contact data inside</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Some PDFs simply do not contain any email addresses to extract.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Bad layout</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Complex formatting or broken lines can make extraction less clean.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">OCR may be needed</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                For image-based files, OCR is usually required before email addresses
                can be detected properly.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            Working with scanned files?{' '}
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

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Faster option
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            A simpler way to extract email addresses from PDFs
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Instead of manually searching and copying results, you can use the main
            PDF email extractor to scan one or multiple text-based PDF files and
            return a clean list of visible email addresses.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Use the main PDF email extractor
          </h3>
          <p className="mt-3 text-slate-600">
            For normal PDFs, the main extractor is the easiest way to pull out email
            addresses and copy the results into your workflow.
          </p>
          <a
            href="/"
            className="mt-5 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Go to the PDF email extractor
          </a>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Common questions about extracting email addresses from PDFs
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: 'How do I extract email addresses from a PDF?',
                a: 'For text-based PDFs, you can use a PDF email extractor to scan the document and return visible email addresses in a clean list.',
              },
              {
                q: 'What is the difference between emails and email addresses?',
                a: 'In this context, they mean the same thing: visible contact addresses found inside the PDF content.',
              },
              {
                q: 'Can I extract email addresses from more than one PDF?',
                a: 'Yes. A normal workflow is to scan one or multiple PDFs and merge the results into one list.',
              },
              {
                q: 'Why does extraction fail on some PDFs?',
                a: 'The most common reasons are scanned files, no readable text layer, unusual layout, or no visible email addresses in the document.',
              },
              {
                q: 'Do scanned PDFs need OCR first?',
                a: 'Often yes. If the PDF is image-based, OCR is usually needed before email address extraction works reliably.',
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
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Ready to extract email addresses from PDF files?
          </h2>
          <p className="mt-4 text-slate-600">
            Use the main PDF email extractor to scan text-based PDFs and return a
            clean, copy-ready list of visible email addresses.
          </p>

          <div className="mt-8">
            <a
              href="/"
              className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800"
            >
              Go to the PDF email extractor
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}