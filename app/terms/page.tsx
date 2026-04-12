import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | PDF Email Extractor',
  description:
    'Terms of Service for PDF Email Extractor, including permitted use, service limitations, disclaimers, and user responsibilities.',
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <section className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Terms of Service
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: April 12, 2026
          </p>

          <p className="mt-6 leading-7 text-slate-600">
            These Terms of Service govern your use of the PDF Email Extractor website and
            tools. By using this site, you agree to these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            1. Use of the service
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            PDF Email Extractor provides tools for extracting visible email addresses from
            PDF files. You may use the service only for lawful purposes and in compliance
            with applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            2. User responsibility
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            You are responsible for the files you upload, the information you extract, and
            the way you use the service. You must ensure that you have the right to process
            and use any content contained in uploaded files.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            3. Acceptable use
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            You agree not to use this service for unlawful, abusive, or harmful activities.
            This includes, without limitation, violating privacy rights, sending spam,
            misusing extracted contact information, attempting to interfere with the
            service, or using the site in a way that could damage availability or
            performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            4. Tool limitations and availability
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            PDF Email Extractor works best for text-based PDFs that contain a readable text
            layer. Some files, including scanned or image-based PDFs, may return incomplete
            results or no results at all.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            We aim to keep the service available and functioning properly, but we do not
            guarantee uninterrupted access. The service may be changed, updated, restricted,
            suspended, or discontinued at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            5. No warranty
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            This service is provided “as is” and “as available” without warranties of any
            kind. We do not guarantee that extraction results will be complete, accurate,
            error-free, or suitable for your specific use case.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            6. Limitation of liability
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            To the maximum extent permitted by law, PDF Email Extractor and its operators
            will not be liable for any indirect, incidental, special, consequential, or
            business-related damages arising out of or related to your use of the service,
            including data loss, workflow interruption, inaccurate results, or misuse of
            extracted information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            7. Intellectual property
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The website, branding, and service content, excluding user-uploaded files and
            their contents, are owned by or licensed to PDF Email Extractor. You may not
            copy, reproduce, or redistribute site content except as permitted by law or by
            written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            8. Third-party services
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            The service may rely on third-party providers for hosting, analytics,
            infrastructure, or related technical functions. We are not responsible for the
            availability, performance, or behavior of third-party services outside our
            control.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-900">
            9. Changes to these terms
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            We may update these Terms of Service from time to time. When we do, the updated
            version will be posted on this page and the “Last updated” date will be
            revised. Continued use of the service after changes take effect means you
            accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-slate-900">
            10. Contact
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            If you have questions about these Terms of Service, please contact:
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            support@extractemailsfrompdf.com
          </p>
        </section>
      </div>
    </div>
  )
}