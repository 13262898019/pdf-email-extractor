import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ToasterWrapper } from '@/components/toaster-wrapper'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF Email Extractor - Extract Emails from PDF Online Free',
  description:
    'Extract email addresses from PDF files instantly. Free PDF email extractor tool with no signup. Works with resumes, reports, and business documents.',
  keywords: [
    'pdf email extractor',
    'extract emails from pdf',
    'find email addresses in pdf',
    'pdf contact extractor',
    'get emails from pdf',
  ],
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

      <body className="font-sans antialiased text-neutral-900 bg-white">
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-neutral-200">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-base font-semibold tracking-tight">
                PDF Email Extractor
              </Link>

              <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
                <Link href="/extract-emails-from-pdf" className="hover:text-neutral-900">
                  Extract
                </Link>
                <Link href="/find-emails-in-pdf" className="hover:text-neutral-900">
                  Find
                </Link>
                <Link href="/get-email-addresses-from-pdf" className="hover:text-neutral-900">
                  Get
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="mt-20 border-t border-neutral-200">
            <div className="mx-auto max-w-5xl px-6 py-10">
              <div className="flex flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
                <p>© 2026 PDF Email Extractor</p>

                <div className="flex gap-4">
                  <Link href="/privacy-policy" className="hover:text-neutral-900">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-neutral-900">
                    Terms
                  </Link>
                </div>
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