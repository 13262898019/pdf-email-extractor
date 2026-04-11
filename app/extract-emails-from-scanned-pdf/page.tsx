import Link from 'next/link'

export const metadata = {
  title: 'Extract Emails from Scanned PDF (OCR Guide)',
  description:
    'Extract email addresses from scanned PDF files. Learn why emails may not be detected and how OCR helps recover email data.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Extract Emails from Scanned PDF
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Learn how scanned PDFs affect email extraction and when OCR is required.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          Scanned PDFs may require OCR before visible email addresses can be detected.
        </p>

        <Link
          href="/#upload"
          className="mt-10 block rounded-2xl border border-dashed border-neutral-300 p-10 text-center transition-colors hover:bg-neutral-50"
        >
          <p className="text-base font-medium">
            Use the main tool to test a scanned PDF
          </p>
          <span className="mt-4 inline-flex rounded-lg bg-black px-5 py-3 text-white">
            Go to PDF Email Extractor
          </span>
          <p className="mt-3 text-sm text-neutral-500">
            Try extraction first, then use OCR if needed
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
            Extract emails from scanned resumes
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Check whether email addresses in scanned resume PDFs can be detected after OCR.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Handle image-based PDF files
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Work with PDFs that contain images instead of selectable text.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-lg font-semibold">
            Recover hidden email text
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Use OCR to recover email addresses that are not directly machine-readable.
          </p>
        </div>
      </section>

      {/* INTENT BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Why emails are hard to extract from scanned PDFs
        </h2>
        <p className="mt-4 text-neutral-700">
          Scanned PDF files are often just images of documents. This means there is no
          selectable text inside the file, so standard email extraction tools may not
          detect any email addresses even if they are visible to the human eye.
        </p>

        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>• Scanned PDFs contain images instead of text</li>
          <li>• Email addresses are not machine-readable by default</li>
          <li>• Standard extraction tools may return no results</li>
        </ul>
      </section>

      {/* OCR BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          OCR is required for scanned PDF email extraction
        </h2>
        <p className="mt-4 text-neutral-700">
          To extract email addresses from a scanned PDF, the file must first go
          through OCR (Optical Character Recognition). OCR converts image-based
          content into selectable text, allowing email detection tools to find
          visible addresses.
        </p>

        <ul className="mt-6 space-y-2 text-neutral-700">
          <li>• OCR converts images into readable text</li>
          <li>• Makes email addresses detectable</li>
          <li>• Improves extraction accuracy for scanned files</li>
        </ul>
      </section>

      {/* PAGE-SPECIFIC BLOCK */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Try extracting emails from scanned PDFs
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page when you need to understand why a scanned PDF may not return
          results immediately. A good workflow is to test the file with the main tool
          first, then apply OCR if no visible email addresses are detected.
        </p>
      </section>

      {/* HOW TO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to extract emails from a scanned PDF
        </h2>
        <ol className="mt-6 space-y-3 text-neutral-700">
          <li>1. Open the main PDF email extractor tool.</li>
          <li>2. Upload your scanned PDF file and test for visible email addresses.</li>
          <li>3. If no emails are found, apply OCR to the document.</li>
          <li>4. Re-run extraction on the OCR-processed file.</li>
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
              Why can’t I extract emails from a scanned PDF?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Scanned PDFs contain images instead of text, so email addresses
              are not directly readable without OCR.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              What is OCR and why is it needed?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              OCR (Optical Character Recognition) converts image-based content
              into selectable text so email extraction tools can detect addresses.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Can this tool extract emails from image PDFs?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              It may not work unless the PDF has been processed with OCR first.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">
              Is this tool free to use?
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Yes. You can test PDFs online without creating an account.
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
              Extract email addresses from text-based PDF files.
            </p>
          </Link>

          <Link href="/find-emails-in-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Find Emails in PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Locate visible email addresses inside PDF documents.
            </p>
          </Link>

          <Link href="/get-email-addresses-from-pdf" className="rounded-2xl border p-4 hover:bg-neutral-50">
            <p className="font-semibold">Get Email Addresses from PDF</p>
            <p className="mt-1 text-sm text-neutral-600">
              Turn PDF emails into a clean, copy-ready list.
            </p>
          </Link>
        </div>
      </section>

      {/* CLOSING SUMMARY */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Extract emails from scanned PDFs with the right approach
        </h2>
        <p className="mt-4 text-neutral-700">
          Use this page to understand why scanned PDFs behave differently, then
          start with the main tool and apply OCR when needed to recover visible
          email addresses from image-based documents.
        </p>
      </section>
    </main>
  )
}