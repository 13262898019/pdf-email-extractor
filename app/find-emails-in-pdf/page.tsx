import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Emails in PDF - How to Search Faster',
  description:
    'Learn how to find email addresses in PDF files faster. See manual methods, common limitations, and when a PDF email extractor is the better option.',
  alternates: {
    canonical: '/find-emails-in-pdf',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              How-To Guide
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Find Emails in PDF: How to Search Faster
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you need to find email addresses in a PDF, you can do it manually,
              but that gets slow when the file is long or when you have several PDFs
              to check. This guide shows the fastest ways to find emails in PDF files
              and when an extractor makes more sense.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Learn the basic manual method, its limitations, and a simpler workflow
              for text-based PDFs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/"
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Use the PDF email extractor
              </a>

              <a
                href="#manual-method"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                See the manual method
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-8" id="manual-method">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Manual approach
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            How to find emails in a PDF manually
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The simplest manual method is to open the PDF and search for characters
            that often appear in email addresses, such as <span className="font-medium">@</span>.
            If the document is small and text-based, this can work well enough.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              1
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Open the PDF
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start with a PDF reader that allows text search and selection.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              2
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Search for &quot;@&quot;
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Use the built-in search function to find likely email address matches.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              3
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Check each result
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Some matches may be partial, broken across lines, or not valid emails.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              4
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              Copy the emails
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Save the addresses you need into a spreadsheet, CRM, or notes app.
            </p>
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
              Why manual PDF searching is often not enough
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Manual search works for short documents, but it becomes inefficient when
              the file is long, the formatting is messy, or you need to check multiple
              PDFs in one session.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Long PDFs take time
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Searching page by page gets slow when you are working with reports,
                resumes, proposals, or document sets.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Some matches are messy
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Email addresses may be split by formatting, line breaks, or unusual
                layout, which makes manual checking more annoying.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Scanned PDFs may fail completely
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                If the PDF is image-based and has no text layer, searching for emails
                manually will not work in a normal PDF reader.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Repeated copy-paste is tedious
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Even when you find results, collecting them one by one is slower than
                using an extractor that returns a ready-to-copy list.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-slate-600">
            If the file is image-based, read the{' '}
            <a
              href="/extract-emails-from-scanned-pdf"
              className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900"
            >
              scanned PDF guide
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
            A faster way to find emails in PDF files
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Instead of searching manually, you can use a PDF email extractor to scan
            the document automatically and return email addresses in one place. This
            is usually faster, cleaner, and easier when working with text-based PDFs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Better for longer PDFs
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The whole document can be scanned without checking every page manually.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Better for repeated work
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              If you review PDFs often, an extractor saves time and reduces copy-paste
              work.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Better for clean results
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              A ready-to-copy list is easier to move into your workflow than scattered
              manual search results.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Use the main tool to find emails in PDF files faster
          </h3>
          <p className="mt-3 text-slate-600">
            For text-based PDFs, the main PDF email extractor is the easiest way to
            find and copy visible email addresses from one or multiple files.
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
              Common questions about finding emails in PDFs
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: 'How can I find emails in a PDF manually?',
                a: 'Open the PDF in a reader, use search, and look for characters like "@". This works best when the PDF contains selectable text.',
              },
              {
                q: 'What is the fastest way to find emails in a PDF?',
                a: 'For text-based PDFs, using a PDF email extractor is usually faster than manual searching because it scans the document automatically.',
              },
              {
                q: 'Why can’t I find emails in some PDF files?',
                a: 'Some PDFs are scanned or image-based, which means they do not contain readable text for search or extraction.',
              },
              {
                q: 'Can I find emails in multiple PDFs?',
                a: 'Yes. You can check files one by one manually, but using an extractor is usually easier when working with several PDFs.',
              },
              {
                q: 'Do I need OCR to find emails in scanned PDFs?',
                a: 'Often yes. If the file has no text layer, OCR is usually needed before normal search or extraction can work.',
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
            Ready to find emails in PDF files faster?
          </h2>
          <p className="mt-4 text-slate-600">
            Use the main PDF email extractor to scan text-based PDFs and get a clean
            list of visible email addresses.
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