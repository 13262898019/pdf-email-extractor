import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | PDF Email Extractor',
  description:
    'Read the terms of service for using the PDF Email Extractor tool, including usage rules, limitations, and responsibilities.',
}

export default function TermsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: April 11, 2026
          </p>
          <p className="mt-6 text-muted-foreground leading-7">
            These Terms of Service govern your use of the PDF Email Extractor
            website. By using this site, you agree to these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">1. Use of the service</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            PDF Email Extractor provides a tool to extract visible email
            addresses from PDF files. You agree to use this service only for
            lawful purposes and in compliance with applicable laws and
            regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">2. User responsibility</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            You are responsible for the files you upload and the way you use the
            extracted information. You must ensure that you have the right to
            process and use any content contained in the uploaded files.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">3. Acceptable use</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            You agree not to use this service for unlawful, abusive, or harmful
            activities. This includes, but is not limited to, violating privacy
            rights, distributing spam, or misusing extracted contact data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">4. Service availability</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            We aim to keep the service available and functioning properly, but
            we do not guarantee uninterrupted access. The service may be modified,
            suspended, or discontinued at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">5. No warranty</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            This service is provided “as is” without warranties of any kind. We
            do not guarantee that email extraction results will be complete,
            accurate, or suitable for your specific use case.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">6. Limitation of liability</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            To the maximum extent permitted by law, we are not liable for any
            damages resulting from your use of the service, including but not
            limited to data loss, business interruption, or misuse of extracted
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">7. Intellectual property</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            The website and its content, excluding user-uploaded files, are
            owned by or licensed to PDF Email Extractor. You may not copy,
            reproduce, or distribute site content without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">8. Third-party services</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            The service may rely on third-party infrastructure or tools. We are
            not responsible for the availability or behavior of those third-party
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">9. Changes to these terms</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            We may update these Terms of Service from time to time. Continued use
            of the service after changes means you accept the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Contact</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            If you have questions about these Terms, you can contact us through
            the contact information provided on this website when available.
          </p>
        </section>
      </div>
    </div>
  )
}