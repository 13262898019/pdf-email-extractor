import Link from 'next/link'

export const metadata = {
  title: 'Get Email Addresses from PDF Free Online',
  description:
    'Get email addresses from PDF files online for free. Upload your PDF and turn visible email addresses into a clean, copy-ready list.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Get Email Addresses from PDF (Free Online)
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Get visible email addresses from PDF files in a clean, copy-ready list.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          Best for text-based PDFs. No signup. No file storage.
        </p>

        <Link
          href="/#upload"
          className="mt-10 block rounded-2xl border border-dashed border-neutral-300 p-10 text-center transition-colors hover:bg-neutral-50"
        >
          <p className="text-base font-medium">
            Use the main tool to get email addresses from your PDF
          </p>
          <span className="mt-4 inline-flex rounded-lg bg-black px-5 py-3 text-white">
            Go to PDF Email Extractor
          </span>
          <p className="mt-3 text-sm text-neutral-500">
            Start generating a copy-ready email list
          </p>
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
          <span>No signup</span>
          <span>No file storage</span>
          <span>100% private</span>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mt-16 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Get emails from resume PDFs
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Turn resume contact details into a clean email list you can review and copy.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Get emails from business documents
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Pull visible email addresses from reports, proposals, and other text-based PDFs.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Get a copy-ready email list
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Convert PDF email addresses into a format you can use right away.
          </p>
        </div>
      </section>

      {/* INTENT BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Why get email addresses from a PDF?
        </h2>
        <p className="mt-4 text-neutral-700">
          PDF files often contain visible email addresses, but copying them manually
          into a usable list takes time and increases the chance of mistakes. This
          page helps you understand how to turn those visible email addresses into
          a clean output you can copy and use immediately.
        </p>

        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>• Get a clean, usable list of visible email addresses</li>
          <li>• Reduce manual copying and formatting work</li>
          <li>• Useful for resumes, reports, and contact documents</li>
        </ul>
      </section>

      {/* LIMITATION BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Best results with text-based PDF files
        </h2>
        <p className="mt-4 text-neutral-700">
          This workflow works best when the PDF contains selectable text. If the file is
          scanned or image-based, visible email addresses may not be returned unless
          OCR is applied first.
        </p>
      </section>

      {/* PAGE-SPECIFIC BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Turn visible PDF emails into a copy-ready result
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page when your goal is not just to check whether emails exist,
          but to actually get them out of the PDF in a format you can copy, review,
          and reuse. It is especially useful when working with contact lists,
          resumes, proposal documents, and business PDFs.
        </p>
      </section>

      {/* HOW TO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to get email addresses from a PDF
        </h2>
        <ol className="mt-6 space-y-3 text-neutral-700">
          <li>1. Open the main PDF email extractor tool.</li>
          <li>2. Upload your PDF file.</li>
          <li>3. Review the extracted email addresses in the result list.</li>
          <li>4. Copy the email list for your next step.</li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Frequently asked questions
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              How do I get email addresses from a PDF?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Open the main tool, upload your PDF, and it scans for visible email
              addresses before returning them in a clean list you can copy.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Can I copy all email addresses from the PDF results?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. This workflow is designed for getting email addresses into a
              usable, copy-ready format instead of reviewing them one by one.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Does this work on scanned PDF files?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Not always. If the PDF is scanned or image-based, visible email
              addresses may not be returned unless OCR is used first.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Is this tool free to use?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. You can get email addresses from PDF files online without
              creating an account or signing in.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Related pages</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/extract-emails-from-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Extract Emails from PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Extract and organize visible email addresses from PDF files.
            </p>
          </Link>

          <Link href="/find-emails-in-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Find Emails in PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Quickly locate visible email addresses inside PDF documents.
            </p>
          </Link>

          <Link href="/extract-emails-from-scanned-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Extract Emails from Scanned PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Learn how scanned and image-based PDFs affect email extraction.
            </p>
          </Link>
        </div>
      </section>

      {/* CLOSING SUMMARY */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Get email addresses from PDF files faster
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page to understand how PDF email extraction results work, then
          start with the main tool to produce a clean, copy-ready list from
          visible email addresses in text-based PDF files.
        </p>
      </section>
    </main>
  )
}