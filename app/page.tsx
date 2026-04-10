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
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Spinner } from '@/components/ui/spinner'
import { useToast } from '@/hooks/use-toast'

export default function PDFEmailExtractor() {
  const [emails, setEmails] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [submittingFeedback, setSubmittingFeedback] = useState(false)
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

      e.target.value = ''
    },
    [handleFile]
  )

  const copyAllEmails = useCallback(() => {
    if (emails.length === 0) return

    navigator.clipboard.writeText(emails.join('\n'))
    track('copy_all_emails', {
      email_count: emails.length,
    })

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)

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
    setShowFeedback(false)
    setFeedback('')
  }, [])

  const uploadAnotherPDF = useCallback(() => {
    track('upload_another_pdf_clicked', {
      source: emails.length > 0 ? 'results' : 'empty_result',
    })
  
    reset()
    fileInputRef.current?.click()
  }, [emails.length, reset])

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header + Upload */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Mail className="w-9 h-9 text-primary" />
            </div>

            <h1 className="text-4xl font-bold mb-3 text-balance">
              Instantly Extract Email Addresses from PDF
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Get a clean, copy-ready email list from any PDF file
            </p>

            <p className="mx-auto mt-5 mb-2 max-w-2xl text-sm text-muted-foreground text-center">
              Example output: <span className="text-foreground">john@gmail.com · sales@company.com · hr@startup.io</span>
            </p>
          </div>

          <Card>
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
              className={`group rounded-xl border-2 border-dashed px-8 py-10 text-center transition-colors cursor-pointer ${isDragging ? 'border-primary bg-primary/5' : 'border-border bg-card'
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

              <div className="flex flex-col items-center gap-3">
                {isLoading ? (
                  <>
                    <Spinner className="w-12 h-12" />
                    <p className="text-muted-foreground">
                      Extracting email addresses...
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      <Upload className="w-7 h-7 text-muted-foreground" />
                    </div>

                    <p className="text-sm font-medium text-foreground">
                      Upload your PDF to extract emails
                    </p>

                    <div className="flex flex-col items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          if (isLoading) return
                          track('upload_area_clicked', { source: 'button' })
                          fileInputRef.current?.click()
                        }}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        Upload PDF
                      </button>

                      <p className="text-sm text-muted-foreground">
                        or drag and drop it here
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>No signup</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>No file storage</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>100% private</span>
            </div>
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
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Mail className="size-5 text-muted-foreground" />
                </div>

                <h2 className="text-xl font-semibold mb-2">
                  No email addresses found
                </h2>

                <p className="text-sm text-muted-foreground max-w-md">
                  This PDF is likely scanned or image-based.
                  Try uploading a text-based PDF for best results.
                </p>

                <p className="text-xs text-muted-foreground mt-2">
                  OCR support is coming soon.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    onClick={uploadAnotherPDF}
                  >
                    Upload another PDF
                  </Button>

                  <button
                    type="button"
                    onClick={() => {
                      track('empty_feedback_clicked')
                      setShowFeedback(true)
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    Didn’t work? Tell us
                  </button>
                  {showFeedback && (
                    <div className="mt-4 w-full max-w-md">
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="What went wrong? e.g. scanned PDF, email not detected"
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm resize-none"
                        rows={4}
                      />

                      <Button
                        className="mt-3 w-full"
                        disabled={!feedback.trim() || submittingFeedback}
                        onClick={async () => {
                          try {
                            setSubmittingFeedback(true)

                            const res = await fetch('/api/feedback', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                message: feedback,
                                page: 'home',
                                type: 'empty_result',
                                project: 'pdf-email-extractor',
                              }),
                            })

                            const data = await res.json()

                            if (!res.ok || !data.ok) {
                              throw new Error(data.error || 'Failed to submit')
                            }

                            track('feedback_submitted', { source: 'empty_result' })
                            setFeedback('')
                            setShowFeedback(false)

                            toast({
                              title: 'Thanks!',
                              description: 'Your feedback helps us improve',
                            })
                          } catch (error) {
                            toast({
                              variant: 'destructive',
                              title: 'Failed to send feedback',
                              description: 'Please try again later.',
                            })
                          } finally {
                            setSubmittingFeedback(false)
                          }
                        }}
                      >
                        {submittingFeedback ? 'Sending...' : 'Submit feedback'}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}

          {emails.length > 0 && (
            <Card className="p-6">
              <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Emails extracted</h2>
                  <p className="text-sm text-muted-foreground">
                    {emails.length === 1
                      ? '1 email found — click to copy'
                      : `${emails.length} emails found — click to copy`}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button onClick={copyAllEmails} size="default" className="gap-2 min-w-37">
                    <Copy className="w-4 h-4" />
                    {copied ? 'Copied!' : 'Copy all emails'}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={reset}
                    className="gap-2 text-muted-foreground"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Clear
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 max-h-96 overflow-y-auto">
                <ul className="space-y-2">
                  {emails.map((email, index) => (
                    <li
                      key={index}
                      onClick={() => copySingleEmail(email)}
                      className="flex items-center gap-3 rounded-md border bg-background px-3 py-3 cursor-pointer transition-colors hover:bg-accent"
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
            <p className="text-base font-semibold tracking-tight mb-1">Recruiters</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Extract emails from resumes instantly
            </p>
          </Card>

          <Card className="p-4">
            <p className="text-base font-semibold tracking-tight mb-1">Sales & Outreach</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Build email lists from PDFs
            </p>
          </Card>

          <Card className="p-4">
            <p className="text-base font-semibold tracking-tight mb-1">Researchers</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Find contact emails in reports
            </p>
          </Card>
        </section>

        {/* FAQ / SEO Block */}
        <section className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              How does this PDF email extractor work?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              Upload a PDF and the tool scans it for email addresses, then shows all detected emails in a clean list you can copy instantly.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              What types of PDFs work best?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              This tool works best with text-based PDFs such as resumes, reports, proposals, and contact lists. Scanned or image-based files may need OCR support.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Is this PDF email extractor free?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              Yes. You can extract email addresses from a PDF without creating an account or signing in.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">
              Why didn’t this PDF return any emails?
            </h2>
            <p className="text-sm text-muted-foreground leading-6">
              Some PDFs are scanned documents or image-based files with no selectable text. In those cases, this extractor may not detect any email addresses.
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
            Best results come from text-based PDFs. If no emails are found, your file may be scanned, image-based, or simply not contain any email addresses.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8 pb-6 mt-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

              <div className="text-center md:text-left">
                <p className="font-medium text-foreground">
                  PDF Email Extractor
                </p>
                <p className="text-sm text-muted-foreground">
                  Simple, private email extraction from PDFs
                </p>
              </div>

              <p className="text-sm text-muted-foreground text-center md:text-right">
                © {new Date().getFullYear()} PDF Email Extractor
              </p>

            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}