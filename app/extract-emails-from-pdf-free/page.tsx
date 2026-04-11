import Link from 'next/link'

export const metadata = {
  title: 'Extract Emails from PDF Free Online',
  description:
    'Extract email addresses from PDF files for free. Upload your PDF online and get visible email addresses in a clean, copy-ready list.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Extract Emails from PDF Free
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Extract visible email addresses from PDF files for free.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          No signup. No file storage. Best for text-based PDF files.
        </p>

        <Link
          href="/#upload"
          className="mt-10 block rounded-2xl border border-dashed border-neutral-300 p-10 text-center transition-colors hover:bg-neutral-50"
        >
          <p className="text-base font-medium">
            Use the main tool to extract emails from your PDF for free
          </p>
          <span className="mt-4 inline-flex rounded-lg bg-black px-5 py-3 text-white">
            Go to PDF Email Extractor
          </span>
          <p className="mt-3 text-sm text-neutral-500">
            Start extracting visible email addresses at no cost
          </p>
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
          <span>Free to use</span>
          <span>No signup</span>
          <span>100% private</span>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mt-16 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Extract PDF emails for free
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Get visible email addresses from text-based PDF files without paying for a subscription.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Review contact details quickly
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Pull email addresses from resumes, reports, and contact documents at no cost.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Create a copy-ready email list
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Turn PDF email content into a list you can copy and use right away.
          </p>
        </div>
      </section>

      {/* INTENT BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Why use a free PDF email extractor?
        </h2>
        <p className="mt-4 text-neutral-700">
          If you only need to extract email addresses from a PDF once in a while,
          paying for a large PDF tool or complex software may be unnecessary. This
          page is designed for users who want a simple and free way to pull visible
          email addresses from text-based PDF files.
        </p>

        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>• Extract visible email addresses for free</li>
          <li>• Avoid manual copying from PDF files</li>
          <li>• Useful for resumes, reports, and contact sheets</li>
        </ul>
      </section>

      {/* LIMITATION BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Best results with text-based PDFs
        </h2>
        <p className="mt-4 text-neutral-700">
          This free PDF email extraction workflow works best when the file contains
          selectable text. If the PDF is scanned or image-based, visible email
          addresses may not be detected unless OCR is applied first.
        </p>
      </section>

      {/* PAGE-SPECIFIC BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          A simple free tool for occasional PDF email extraction
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page when you want to extract email addresses from a PDF
          without signing up, installing extra software, or paying for a larger
          document platform. It is a lightweight option for quick one-off tasks.
        </p>
      </section>

      {/* HOW TO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to extract emails from PDF for free
        </h2>
        <ol className="mt-6 space-y-3 text-neutral-700">
          <li>1. Open the main PDF email extractor tool.</li>
          <li>2. Upload your PDF file.</li>
          <li>3. Review the extracted emails in the result list.</li>
          <li>4. Copy the list for free.</li>
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
              Can I extract emails from PDF for free?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. Open the main tool to extract visible email addresses from PDF
              files online without paying or creating an account.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Do I need to sign up to use this tool?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              No. You can use the main tool without creating an account.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Does this free PDF email extractor work on scanned files?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Not always. Scanned or image-based PDFs may require OCR before
              visible email addresses can be detected.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              What kind of PDFs work best?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Text-based PDFs such as resumes, reports, contact sheets, and
              proposal documents usually work best.
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
              Extract visible email addresses from text-based PDF files.
            </p>
          </Link>

          <Link href="/find-emails-in-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Find Emails in PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Quickly locate visible email addresses inside PDF files.
            </p>
          </Link>

          <Link href="/extract-emails-from-scanned-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Extract Emails from Scanned PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Learn how scanned files affect email extraction.
            </p>
          </Link>
        </div>
      </section>

      {/* CLOSING SUMMARY */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Extract PDF email addresses for free and faster
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page to understand how free PDF email extraction works, then
          start with the main tool to turn visible PDF email content into a clean
          list you can copy immediately.
        </p>
      </section>
    </main>
  )
}