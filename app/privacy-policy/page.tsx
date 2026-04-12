import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PDF Email Extractor',
  description:
    'Privacy policy for PDF Email Extractor, including how uploaded files are processed, how analytics are used, and how user data is handled.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Header */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: April 12, 2026
          </p>

          <p className="mt-6 text-slate-600 leading-7">
            This Privacy Policy explains how PDF Email Extractor processes
            information when you use this website. The service is designed to
            extract visible email addresses from PDF files while minimizing data
            collection and retention.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            When you upload a PDF, the file is processed to extract visible email
            addresses and return results to you. We also use analytics tools to
            understand site usage and improve the product.
          </p>
        </section>

        {/* 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            1. Information we process
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            When you use PDF Email Extractor, we process:
          </p>

          <ul className="mt-4 list-disc pl-5 text-slate-600 space-y-2">
            <li>PDF files that you upload for email extraction</li>
            <li>
              Technical data such as browser type, device type, and general
              interaction events
            </li>
            <li>
              Usage signals such as page views, button clicks, and extraction
              success or failure
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            2. How uploaded files are handled
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            Uploaded PDF files are processed solely for the purpose of extracting
            visible email addresses.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            We do not intentionally store uploaded files after processing is
            complete. Files may be temporarily handled by the system as required
            for processing, but are not retained for long-term storage.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            We do not use uploaded file content for advertising, profiling, or
            resale.
          </p>
        </section>

        {/* 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            3. Extracted email addresses
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            Email addresses are extracted directly from the contents of the PDF
            files you upload and are displayed to you as part of the tool output.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            We do not sell or distribute extracted email addresses to third
            parties.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            4. Analytics and cookies
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            This website uses analytics tools, including Google Analytics and
            Vercel Analytics, to understand how visitors use the site and to
            improve performance and usability.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            These tools may collect information such as pages visited, device
            information, approximate location, and interaction events.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            Cookies and similar technologies are used to support analytics and
            basic functionality.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            5. Third-party services
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            We rely on third-party infrastructure providers to operate this
            website, including hosting and analytics services.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            These may include services such as Vercel (hosting) and Google
            Analytics (usage analytics). These providers may process limited
            technical data as part of delivering their services.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            6. Data security
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            We take reasonable measures to protect information processed through
            this website. However, no method of transmission or storage is
            completely secure, and absolute security cannot be guaranteed.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            7. User choices
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            You may choose not to upload files if you do not want their contents
            processed by this tool.
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            You can also disable cookies in your browser settings, although this
            may affect certain functionality or analytics capabilities.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            8. Children’s privacy
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            This website is not intended for children, and we do not knowingly
            collect personal information from children.
          </p>
        </section>

        {/* 9 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            9. Changes to this policy
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            We may update this Privacy Policy from time to time. When we do, the
            updated version will be posted on this page and the “Last updated”
            date will be revised.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            10. Contact
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            If you have questions about this Privacy Policy, you can contact us
            at:
          </p>

          <p className="mt-4 text-slate-600 leading-7">
            support@extractemailsfrompdf.com
          </p>
        </section>
      </div>
    </div>
  )
}