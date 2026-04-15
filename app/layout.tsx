import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ToasterWrapper } from '@/components/toaster-wrapper'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://extractemailsfrompdf.com'),
  title: {
    default: 'Free PDF Email Extractor',
    template: '%s | PDF Email Extractor',
  },
  description:
    'Extract visible email addresses from PDF files online. Fast browser-based PDF email extraction for text-based PDFs.',
  keywords: [
    'pdf email extractor',
    'extract emails from pdf',
    'extract email addresses from pdf',
    'text-based pdf email extraction',
    'extract emails from multiple pdfs',
    'extract emails from scanned pdf',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Free PDF Email Extractor',
    description:
      'Extract visible email addresses from PDF files online. Fast browser-based PDF email extraction for text-based PDFs.',
    url: 'https://extractemailsfrompdf.com',
    siteName: 'PDF Email Extractor',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J7GYHF9N3N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J7GYHF9N3N');
          `}
        </Script>
      </head>

      <body className={`${geistSans.className} bg-white text-neutral-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-base font-semibold tracking-tight text-neutral-900">
                PDF Email Extractor
              </Link>

              <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
                <Link
                  href="/extract-emails-from-scanned-pdf"
                  className="hover:text-neutral-900"
                >
                  Scanned PDFs
                </Link>
                <Link
                  href="/extract-emails-from-multiple-pdfs"
                  className="hover:text-neutral-900"
                >
                  Multiple PDFs
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="mt-20 border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">
                    PDF Email Extractor
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
                    Extract visible email addresses from text-based PDF files online. Fast, simple,
                    and built for clean copy-ready results.
                  </p>
                  <p className="mt-4 text-sm text-neutral-500">
                    Contact: support@extractemailsfrompdf.com
                  </p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-neutral-900">Pages</div>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-500">
                    <Link href="/" className="hover:text-neutral-900">
                      Main PDF extractor
                    </Link>
                    <Link
                      href="/extract-emails-from-scanned-pdf"
                      className="hover:text-neutral-900"
                    >
                      Scanned PDF guide
                    </Link>
                    <Link
                      href="/extract-emails-from-multiple-pdfs"
                      className="hover:text-neutral-900"
                    >
                      Multiple PDF extractor
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-neutral-900">Legal</div>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-500">
                    <Link href="/privacy-policy" className="hover:text-neutral-900">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-neutral-900">
                      Terms
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
                © 2026 PDF Email Extractor
              </div>
            </div>
          </footer>
        </div>

        <ToasterWrapper />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}