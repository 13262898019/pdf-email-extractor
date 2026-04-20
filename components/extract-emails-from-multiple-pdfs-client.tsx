import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Extract Emails from Multiple PDF Files (Batch Guide)',
  description:
    'Learn how to extract email addresses from multiple PDF files. Process PDFs in bulk, merge results, and save time with a simple workflow.',
  alternates: {
    canonical: '/extract-emails-from-multiple-pdfs',
  },
}

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-slate-900">
      {/* HERO */}
      <h1 className="text-4xl font-bold tracking-tight">
        Extract Emails from Multiple PDF Files
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Need to extract email addresses from several PDF files at once? This guide
        shows how to process multiple PDFs, combine results, and save time using a
        simple workflow.
      </p>

      {/* INTRO */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Why extract emails from multiple PDFs?</h2>
        <p className="mt-3 text-slate-600">
          In many real scenarios, email data is spread across multiple documents.
          Instead of opening each PDF one by one, you can process them together and
          merge results into a single list.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>Sales teams collecting leads from multiple files</li>
          <li>Recruiters scanning resumes in batches</li>
          <li>Agencies processing client documents</li>
          <li>Researchers extracting contacts from reports</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">
          How to extract emails from multiple PDFs
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold">1. Upload multiple PDF files</h3>
            <p className="text-slate-600">
              Select one or several PDF files from your device. Most modern tools
              allow batch selection.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. Extract email addresses</h3>
            <p className="text-slate-600">
              Each file is scanned for visible text, and email addresses are
              detected automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Merge and deduplicate results</h3>
            <p className="text-slate-600">
              All extracted emails are combined into a single list, with duplicates
              removed.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">4. Copy or export the results</h3>
            <p className="text-slate-600">
              Use the final list in your CRM, spreadsheet, or outreach workflow.
            </p>
          </div>
        </div>
      </section>

      {/* TOOL CTA（最关键） */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold">
          Extract emails from multiple PDFs instantly
        </h2>

        <p className="mt-3 text-slate-600">
          You can upload and process multiple PDF files directly using our PDF
          email extractor. Results are merged and cleaned automatically.
        </p>

        <a
          href="/"
          className="mt-5 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
        >
          Try the PDF Email Extractor
        </a>
      </section>

      {/* LIMITATIONS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Limitations to consider</h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>Works best for text-based PDFs</li>
          <li>Scanned PDFs may not return results</li>
          <li>Large files may take longer to process</li>
        </ul>

        <p className="mt-4 text-slate-600">
          If your files are scanned or image-based, you may need OCR first. Learn
          more about{' '}
          <a
            href="/extract-emails-from-scanned-pdf"
            className="underline underline-offset-4"
          >
            extracting emails from scanned PDFs
          </a>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">FAQ</h2>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold">
              Can I extract emails from multiple PDFs at once?
            </h3>
            <p className="text-slate-600">
              Yes. You can upload several PDF files and process them together,
              combining all extracted email addresses into one list.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Are duplicate emails removed?
            </h3>
            <p className="text-slate-600">
              Most tools automatically deduplicate results, so each email appears
              only once.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Does this work for scanned PDFs?
            </h3>
            <p className="text-slate-600">
              Not always. Scanned PDFs often require OCR before emails can be
              extracted.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}