import type { Metadata } from 'next'
import HomePageClient from '@/components/home-page-client'

export const metadata: Metadata = {
  title: 'Extract Emails from PDF - Free Online Tool',
  description:
    'Extract emails from PDF files in seconds. Free online tool for fast, clean email extraction from text-based PDFs.',
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return <HomePageClient />
}