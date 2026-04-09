import type { Metadata } from 'next'
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
        {/* Google Analytics */}
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

      <body className="font-sans antialiased">
        {children}
        <ToasterWrapper />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}