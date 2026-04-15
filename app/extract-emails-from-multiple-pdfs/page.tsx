import type { Metadata } from 'next'
import ExtractEmailsFromMultiplePDFsClient from '@/components/extract-emails-from-multiple-pdfs-client'

export const metadata: Metadata = {
  title: 'Extract Emails from Multiple PDFs',
  description:
    'Extract emails from multiple PDF files in one run. Free batch PDF email extractor that merges results and removes duplicate emails automatically.',
  alternates: {
    canonical: '/extract-emails-from-multiple-pdfs',
  },
}

export default function Page() {
  return <ExtractEmailsFromMultiplePDFsClient />
}