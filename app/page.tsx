import type { Metadata } from 'next'
import HomePageClient from '@/components/home-page-client'

export const metadata: Metadata = {
  title: 'Extract Emails from PDF - Free PDF Email Extractor',
  description:
    'Extract email addresses from one or multiple PDF files online. Free PDF email extractor for fast, clean results from text-based PDFs.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return <HomePageClient />
}