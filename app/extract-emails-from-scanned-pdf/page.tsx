import type { Metadata } from 'next'
import ExtractEmailsFromScannedPDFPage from '@/components/extract-emails-from-scanned-pdf-client'

export const metadata: Metadata = {
  title: 'Extract Emails from Scanned PDF (Why It Fails & Fix)',
  description:
    'Learn why you cannot extract emails from scanned PDFs. Check if your file has readable text and understand when OCR is required for email extraction.',
  alternates: {
    canonical: '/extract-emails-from-scanned-pdf',
  },
}

export default function Page() {
  return <ExtractEmailsFromScannedPDFPage />
}