import Link from 'next/link'

export const metadata = {
  title: 'Find Emails in PDF Free Online',
  description:
    'Find email addresses in PDF files online for free. Upload your PDF and quickly locate visible email addresses in seconds.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Find Emails in PDF (Free Online)
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Quickly locate visible email addresses inside PDF documents.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          Best for text-based PDFs. No signup. No file storage.
        </p>

        <Link
          href="/#upload"
          className="mt-10 block rounded-2xl border border-dashed border-neutral-300 p-10 text-center transition-colors hover:bg-neutral-50"
        >
          <p className="text-base font-medium">
            Use the main tool to find email addresses in your PDF
          </p>
          <span className="mt-4 inline-flex rounded-lg bg-black px-5 py-3 text-white">
            Go to PDF Email Extractor
          </span>
          <p className="mt-3 text-sm text-neutral-500">
            Start scanning your PDF in seconds
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
            Find contact emails in resumes
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Quickly locate candidate email addresses inside resume PDFs.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Scan reports for emails
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Find visible email addresses in reports, proposals, and documents.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Review PDF contact details
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Check PDF files for embedded email addresses before copying results.
          </p>
        </div>
      </section>

      {/* INTENT BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Why find emails in a PDF?
        </h2>
        <p className="mt-4 text-neutral-700">
          Searching for email addresses inside a PDF manually can be slow,
          especially when the document is long or contains multiple sections.
          This page helps you understand how to quickly locate visible email
          addresses without scanning line by line.
        </p>

        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>• Locate visible email addresses faster</li>
          <li>• Avoid missing contact details in long PDF files</li>
          <li>• Useful for resumes, reports, and business documents</li>
        </ul>
      </section>

      {/* LIMITATION BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Works best with text-based PDF files
        </h2>
        <p className="mt-4 text-neutral-700">
          This email finder works best when the PDF contains selectable text.
          If the file is scanned or image-based, visible email addresses may
          not be detected unless OCR is applied first.
        </p>
      </section>

      {/* PAGE-SPECIFIC BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Quickly locate visible email addresses inside PDF documents
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page when you want to check whether a PDF contains email
          addresses before extracting or copying them. It is especially useful
          for reviewing resumes, reports, contact sheets, and proposal files
          where email addresses may appear in different sections.
        </p>
      </section>

      {/* HOW TO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to find emails in a PDF
        </h2>
        <ol className="mt-6 space-y-3 text-neutral-700">
          <li>1. Open the main PDF email extractor tool.</li>
          <li>2. Upload your PDF file.</li>
          <li>3. Review the visible email addresses found in the document.</li>
          <li>4. Copy the results you need.</li>
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
              How do I find email addresses in a PDF?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Open the main tool, upload your PDF, and it scans the file for visible
              email addresses before returning the results in a clean list.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Can this tool find emails in long PDF documents?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. This workflow is useful for quickly locating email addresses
              in longer PDFs where manual review would take more time.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Does this PDF email finder work on scanned files?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Not always. Scanned or image-based PDFs may not contain
              selectable text, which means visible email addresses may not
              be detected without OCR.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Is this PDF email finder free to use?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. You can find email addresses in PDF files online without
              signing up or creating an account.
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
              Extract and copy email addresses into a clean list.
            </p>
          </Link>

          <Link href="/get-email-addresses-from-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Get Email Addresses from PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Turn visible PDF emails into a copy-ready result list.
            </p>
          </Link>

          <Link href="/extract-emails-from-scanned-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Extract Emails from Scanned PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Learn what happens when the PDF is scanned or image-based.
            </p>
          </Link>
        </div>
      </section>

      {/* CLOSING SUMMARY */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Find email addresses in PDF files faster
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page to understand how PDF email finding works, then start
          with the main tool to locate visible email addresses and review
          contact details inside text-based PDF documents.
        </p>
      </section>
    </main>
  )
}