import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | PDF Email Extractor',
  description:
    'Read the privacy policy for PDF Email Extractor, including how files are processed, what data may be collected, and how user information is handled.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: April 11, 2026
          </p>
          <p className="mt-6 text-muted-foreground leading-7">
            This Privacy Policy explains how PDF Email Extractor collects, uses,
            and protects information when you use this website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">1. Information we collect</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            When you use PDF Email Extractor, we may process the PDF file you
            upload in order to extract visible email addresses. We may also
            collect limited technical information such as browser type, device
            type, pages visited, and general usage events for analytics and site
            improvement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">2. How uploaded files are handled</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            Uploaded PDF files are processed only for the purpose of extracting
            visible email addresses. We do not store uploaded files longer than
            necessary to complete processing. We do not use uploaded file
            contents for advertising.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">3. Extracted email addresses</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            Extracted email addresses are generated from the contents of the file
            you upload. They are shown back to you as part of the tool result.
            We do not sell extracted email addresses to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">4. Analytics</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            We may use analytics tools to understand how visitors use the
            website, such as which pages are viewed, which buttons are clicked,
            and whether extraction succeeds or fails. This helps us improve the
            product and user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">5. Cookies and similar technologies</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            This website may use cookies or similar technologies for analytics,
            performance, and basic functionality. These technologies help us
            understand usage patterns and maintain site reliability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">6. Feedback submissions</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            If you submit feedback through the website, we may store the content
            of that feedback in order to review product issues, improve the
            service, and respond to common problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">7. Data security</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            We take reasonable steps to protect information processed through the
            website. However, no method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">8. Third-party services</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            We may rely on third-party infrastructure or analytics providers to
            operate the website. Those providers may process limited technical
            data as part of delivering their services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">9. Children&apos;s privacy</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            This website is not directed to children, and we do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">10. Changes to this policy</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            We may update this Privacy Policy from time to time. When we do, we
            will post the updated version on this page and revise the “Last
            updated” date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. Contact</h2>
          <p className="mt-4 text-muted-foreground leading-7">
            If you have questions about this Privacy Policy, you can contact us
            through the contact information provided on this website when
            available.
          </p>
        </section>
      </div>
    </div>
  )
}