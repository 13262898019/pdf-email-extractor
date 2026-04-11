import Link from 'next/link'

export const metadata = {
  title: 'Extract Emails from PDF Free Online',
  description:
    'Extract email addresses from PDF files online for free. Upload your PDF and copy all detected emails in seconds.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Extract Emails from PDF (Free Online)
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Upload your PDF and instantly extract all email addresses into a clean, copy-ready list.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          Works best for text-based PDF files. No signup. No file storage.
        </p>

        <Link
          href="/#upload"
          className="mt-10 block rounded-2xl border border-dashed border-neutral-300 p-10 text-center transition-colors hover:bg-neutral-50"
        >
          <p className="text-base font-medium">
            Use the main tool to extract emails from your PDF
          </p>
          <span className="mt-4 inline-flex rounded-lg bg-black px-5 py-3 text-white">
            Go to PDF Email Extractor
          </span>
          <p className="mt-3 text-sm text-neutral-500">
            Start extracting emails in seconds
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
            Extract emails from resumes
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Quickly find candidate contact details inside PDF resumes.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Find emails in reports
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Detect visible email addresses from business reports and documents.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Build outreach lists
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Copy contact emails from PDF files into a clean list.
          </p>
        </div>
      </section>

      {/* INTENT BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Why use this PDF email extractor?
        </h2>
        <p className="mt-4 text-neutral-700">
          Manually copying email addresses from PDF files is slow and
          error-prone. This tool helps you quickly find all visible email
          addresses and copy them into a clean list for outreach, hiring,
          or research.
        </p>

        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>• Save time by extracting emails automatically</li>
          <li>• Find all visible email addresses in one pass</li>
          <li>• Useful for resumes, reports, and contact documents</li>
        </ul>
      </section>

      {/* LIMITATION BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Best results with text-based PDFs
        </h2>
        <p className="mt-4 text-neutral-700">
          This tool works best when your PDF contains selectable text. If your
          file is scanned or image-based, email extraction may return no
          results. In those cases, OCR processing may be required.
        </p>
      </section>

      {/* PAGE-SPECIFIC BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Extract email addresses from common PDF documents
        </h2>
        <p className="mt-4 text-neutral-700">
          This page is ideal for working with resumes, reports, proposals,
          contact lists, and other text-based PDF documents where email
          addresses are embedded in visible content.
        </p>
      </section>

      {/* HOW TO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to extract emails from a PDF
        </h2>
        <ol className="mt-6 space-y-3 text-neutral-700">
          <li>1. Open the main PDF email extractor tool.</li>
          <li>2. Upload your PDF file.</li>
          <li>3. Review the extracted email addresses.</li>
          <li>4. Copy all results in one click.</li>
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
              How does this PDF email extractor work?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Open the main tool, upload a PDF, and it scans the file for visible
              email addresses. The results are returned in a clean list you can copy instantly.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              What types of PDFs work best?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              This tool works best with text-based PDFs such as resumes,
              reports, proposals, and contact lists.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Is this PDF email extractor free?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. You can extract email addresses from a PDF without creating an account.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Why didn’t this PDF return any emails?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Some PDFs are scanned or image-based and contain no selectable text.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Related pages</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/find-emails-in-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Find Emails in PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Quickly locate email addresses inside PDF files.
            </p>
          </Link>

          <Link href="/get-email-addresses-from-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Get Email Addresses from PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Extract and copy email addresses into a clean list.
            </p>
          </Link>

          <Link href="/extract-emails-from-scanned-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Extract Emails from Scanned PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Learn how to handle scanned or image-based PDFs.
            </p>
          </Link>
        </div>
      </section>

      {/* CLOSING SUMMARY */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Extract email addresses from PDF files faster
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page to understand how PDF email extraction works, then start
          with the main tool to turn visible PDF email content into a clean,
          usable email list.
        </p>
      </section>
    </main>
  )
}