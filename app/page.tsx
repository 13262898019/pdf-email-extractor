'use client'

import { track } from '@/lib/track'
import { useState, useCallback, useRef } from 'react'
import {
  Upload,
  FileText,
  Copy,
  RotateCcw,
  Mail,
  ShieldCheck,
  Zap,
  BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from '@/components/ui/empty'
import { Spinner } from '@/components/ui/spinner'
import { useToast } from '@/hooks/use-toast'

export default function PDFEmailExtractor() {
  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const { toast } = useToast()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const getEmailCountLabel = useCallback((count: number) => {
    return count === 1
      ? '1 email address — ready to copy'
      : `${count} email addresses — ready to copy`
  }, [])

  const handleFile = useCallback(
    async (file: File) => {
      if (file.type !== 'application/pdf') {
        track('upload_invalid_file_type', {
          file_type: file.type || 'unknown',
        })

        setError('Please upload a PDF file')
        toast({
          variant: 'destructive',
          title: 'Invalid file type',
          description: 'Only PDF files are supported',
        })
        return
      }

      track('extract_started', {
        file_size_kb: Math.round(file.size / 1024),
        file_name_length: file.name.length,
      })

      setIsLoading(true)
      setError(null)
      setEmails([])
      setHasSearched(true)

      try {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/extract', {
          method: 'POST',
          body: formData,
        })

        const data: { emails?: string[]; success?: boolean; error?: string } =
          await response.json()

        if (!response.ok || data.success === false) {
          const message =
            data.error ||
            'An error occurred while processing the PDF. Please try again.'

          track('extract_failed', {
            reason: message,
            status_code: response.status,
          })

          setError(message)
          toast({
            variant: 'destructive',
            title: 'Extraction failed',
            description: message,
          })
          return
        }

        const uniqueEmails: string[] = Array.from(new Set(data.emails || []))
        setEmails(uniqueEmails)

        if (uniqueEmails.length > 0) {
          track('extract_success', {
            email_count: uniqueEmails.length,
          })

          toast({
            title: 'Extraction successful',
            description: getEmailCountLabel(uniqueEmails.length),
          })
        } else {
          track('extract_empty', {
            reason: 'no_emails_found',
          })

          toast({
            title: 'No email addresses found',
            description: 'No email addresses were found in this PDF',
          })
        }
      } catch (err) {
        track('extract_failed', {
          reason: 'network_or_runtime_error',
        })

        setError('An error occurred while processing the PDF. Please try again.')
        toast({
          variant: 'destructive',
          title: 'Extraction failed',
          description: 'Unable to extract email addresses from the PDF',
        })
      } finally {
        setIsLoading(false)
      }
    },
    [getEmailCountLabel, toast]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragging(false)

      const file = e.dataTransfer.files[0]
      if (file) {
        track('file_dropped', {
          file_type: file.type || 'unknown',
          file_size_kb: Math.round(file.size / 1024),
        })
        handleFile(file)
      }
    },
    [handleFile]
  )

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        track('file_selected', {
          file_type: file.type || 'unknown',
          file_size_kb: Math.round(file.size / 1024),
        })
        handleFile(file)
      }
    },
    [handleFile]
  )

  const copyAllEmails = useCallback(() => {
    if (emails.length === 0) return
  
    navigator.clipboard.writeText(emails.join('\n'))
    track('copy_all_emails', {
      email_count: emails.length,
    })
  
    toast({
      title: 'Copied',
      description:
        emails.length === 1
          ? '1 email address copied to clipboard'
          : `${emails.length} email addresses copied to clipboard`,
    })
  }, [emails, toast])

  const copySingleEmail = useCallback(
    (email: string) => {
      navigator.clipboard.writeText(email)
      track('copy_single_email')
      toast({
        title: 'Copied',
        description: `${email} copied to clipboard`,
      })
    },
    [toast]
  )

  const reset = useCallback(() => {
    track('extractor_reset')
    setEmails([])
    setError(null)
    setHasSearched(false)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h1 className="text-4xl font-bold mb-3 text-balance">
            Extract All Email Addresses from PDF in Seconds
          </h1>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quickly extract all email addresses from PDF files
          </p>

          <p className="text-sm text-muted-foreground mt-3">
            Works with many text-based PDFs, including resumes, reports, and
            invoices
          </p>
        </section>

        {/* Upload Area */}
        <section className="mb-6">
          <Card className="mb-6">
            <div
              role="button"
              tabIndex={isLoading ? -1 : 0}
              onClick={() => {
                if (isLoading) return
                track('upload_area_clicked', { source: 'dropzone' })
                fileInputRef.current?.click()
              }}
              onKeyDown={(e) => {
                if (isLoading) return
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  track('upload_area_clicked', { source: 'keyboard' })
                  fileInputRef.current?.click()
                }
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`group p-12 text-center border-2 border-dashed rounded-lg transition-colors cursor-pointer ${isDragging ? 'border-primary bg-primary/5' : 'border-border bg-card'
                } ${isLoading ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              <input
                ref={fileInputRef}
                type="file"
                id="file-upload"
                accept=".pdf"
                onChange={handleFileInput}
                className="hidden"
                disabled={isLoading}
              />

              <div className="flex flex-col items-center gap-4">
                {isLoading ? (
                  <>
                    <Spinner className="w-12 h-12" />
                    <p className="text-muted-foreground">
                      Extracting email addresses...
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </div>

                    <p className="text-sm font-medium text-foreground mb-1">
                      Extract emails from your PDF in seconds
                    </p>

                    <div className="text-sm">
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer hover:underline"
                      >
                        Click to upload
                      </label>
                      <span className="text-muted-foreground">
                        {' '}
                        or drag and drop your PDF here
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Best results for text-based PDFs. Scanned or image PDFs may
                      not work perfectly.
                    </p>
                  </>
                )}
              </div>
            </div>
          </Card>

          {/* Trust Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-4">
            <div className="inline-flex items-center gap-2">
              <BadgeCheck className="w-4 h-4" />
              <span>Free</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>No signup</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>No file storage</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Instant results</span>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground">
              Useful for resumes, reports, invoices, and other PDF documents
            </p>
          </div>
        </section>

        {/* Results Area */}
        <section className="mb-12">
          {error && (
            <Card className="p-6 border-destructive/50 bg-destructive/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="font-medium text-destructive">
                    Couldn&apos;t extract emails from this PDF
                  </p>
                  <p className="text-sm text-destructive/80">{error}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Tip: Works best with non-scanned, text-based PDFs
                  </p>
                </div>
              </div>
            </Card>
          )}

          {!error && emails.length === 0 && !isLoading && hasSearched && (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Mail className="size-6" />
                </EmptyMedia>
                <EmptyTitle>No email addresses found</EmptyTitle>
                <EmptyDescription>
                  No email addresses were found in this PDF
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          )}

          {emails.length > 0 && (
            <Card className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Emails extracted</h2>
                  <p className="text-sm text-muted-foreground">
                    {getEmailCountLabel(emails.length)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button onClick={copyAllEmails} size="sm" className="gap-2">
                    <Copy className="w-4 h-4" />
                    Copy all
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={reset}
                    className="gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Clear
                  </Button>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 max-h-96 overflow-y-auto">
                <ul className="space-y-2">
                  {emails.map((email, index) => (
                    <li
                      key={index}
                      onClick={() => copySingleEmail(email)}
                      className="flex items-center gap-3 py-2 px-3 bg-background rounded-md cursor-pointer hover:bg-accent transition-colors"
                      title="Click to copy"
                    >
                      <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                      <span className="font-mono text-sm flex-1 break-all">
                        {email}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}
        </section>

        <section className="mb-12 grid gap-4 md:grid-cols-3 text-sm">
          <Card className="p-4">
            <p className="font-medium mb-1">Recruiters</p>
            <p className="text-muted-foreground">
              Extract emails from resumes in seconds
            </p>
          </Card>

          <Card className="p-4">
            <p className="font-medium mb-1">Sales & Outreach</p>
            <p className="text-muted-foreground">
              Pull leads from PDF contact lists
            </p>
          </Card>

          <Card className="p-4">
            <p className="font-medium mb-1">Researchers</p>
            <p className="text-muted-foreground">
              Find author or contact emails in reports
            </p>
          </Card>
        </section>

        {/* FAQ / SEO Block */}
        <section className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              What does this PDF email extractor do?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              This tool scans a PDF file and extracts email addresses it can
              detect, then shows them in a clean list you can copy instantly.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              What kinds of PDF files work best?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              It works best with standard text-based PDFs such as resumes,
              reports, proposals, and invoices. Scanned or image-based PDFs may
              return limited results.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Is this tool free to use?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              Yes. You can upload a PDF and extract email addresses without
              creating an account.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              When would I use this?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              It is useful for quickly finding contact emails in resumes,
              business documents, reports, and other PDF files.
            </p>
          </Card>
        </section>

        <section className="mb-12 max-w-3xl mx-auto text-sm text-muted-foreground leading-7">
          <h2 className="text-xl font-semibold mb-4 text-foreground">
            How to extract email addresses from a PDF
          </h2>

          <ol className="space-y-3 list-decimal list-inside">
            <li>Upload your PDF file.</li>
            <li>Wait a few seconds while the tool scans the document.</li>
            <li>Review the extracted email addresses.</li>
            <li>Copy all results in one click.</li>
          </ol>

          <p className="mt-4">
            This works best for text-based PDFs. If your file is scanned or
            image-based, some email addresses may not be detected.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 pb-6 mt-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="text-center md:text-left">
                <p className="font-medium text-foreground">PDF Email Extractor</p>
                <p className="text-sm text-muted-foreground">
                  Extract email addresses from PDF files for free
                </p>
              </div>

              <p className="text-sm text-muted-foreground text-center md:text-right">
                © {new Date().getFullYear()} PDF Email Extractor
              </p>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center leading-5 max-w-3xl mx-auto">
              Useful for searches like PDF email extractor, extract emails from
              PDF, find emails in PDF files, and PDF contact extractor.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}