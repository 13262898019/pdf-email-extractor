import type { Metadata } from 'next'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ToasterWrapper } from '@/components/toaster-wrapper'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Extract Emails from PDF - Free PDF Email Extractor',
  description:
    'Extract email addresses from one or multiple PDF files online. Free PDF email extractor for fast, clean results from text-based PDFs.',
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
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} ${_geistMono.className} antialiased`}>
        <div className="min-h-screen bg-white text-neutral-900">
          <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
              <Link href="/" className="text-base font-semibold tracking-tight text-neutral-900">
                Extract Emails from PDF
              </Link>

              <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
                <Link
                  href="/extract-emails-from-scanned-pdf"
                  className="hover:text-neutral-900"
                >
                  Scanned PDF Guide
                </Link>
              </nav>
            </div>
          </header>

          {children}

          <footer className="border-t border-neutral-200 bg-neutral-50">
            <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
              <div className="grid gap-10 md:grid-cols-4">
                <div className="md:col-span-2">
                  <Link href="/" className="text-base font-semibold tracking-tight text-neutral-900">
                    Extract Emails from PDF
                  </Link>
                  <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
                    Extract visible email addresses from text-based PDF files. Use the
                    main PDF email extractor for single files or small batches, and
                    explore guides for scanned PDFs and related workflows.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Pages</h3>
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
                      Multiple PDF workflow
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">Guides</h3>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-500">
                    <Link href="/pdf-email-extractor" className="hover:text-neutral-900">
                      PDF email extractor
                    </Link>
                    <Link href="/find-emails-in-pdf" className="hover:text-neutral-900">
                      Find emails in PDF
                    </Link>
                    <Link
                      href="/extract-email-addresses-from-pdf"
                      className="hover:text-neutral-900"
                    >
                      Extract email addresses from PDF
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
                © {new Date().getFullYear()} Extract Emails from PDF. All rights reserved.
              </div>
            </div>
          </footer>
        </div>

        <ToasterWrapper />
        <Analytics />
      </body>
    </html>
  )
}