type TrackParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function track(eventName: string, params: TrackParams = {}) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return

  window.gtag('event', eventName, params)
}