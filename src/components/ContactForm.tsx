'use client'
import { useState, type FormEvent } from 'react'
import type { SiteContent } from '@/data/types'

interface Props {
  content: SiteContent['contact']
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({ content }: Props) {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const form = e.currentTarget
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

    if (!endpoint) {
      // Dev fallback — log and show success
      console.info('NEXT_PUBLIC_FORM_ENDPOINT not set; form data:', Object.fromEntries(new FormData(form)))
      setStatus('success')
      return
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite"
        className="bg-surface border border-border rounded-md p-8 text-center text-text">
        <p className="text-lg font-semibold">{content.successMessage}</p>
      </div>
    )
  }

  const inputClass = `w-full bg-surface-raised border border-border-input rounded-sm px-4 py-3
    text-text placeholder:text-muted text-sm
    focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
    transition-colors duration-[200ms]`

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <p className="text-sm text-muted">{content.formLabel}</p>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs font-semibold text-muted uppercase tracking-wide">
          {content.fields.name}
        </label>
        <input id="name" name="name" type="text" required autoComplete="name"
          className={inputClass} placeholder={content.fields.name} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs font-semibold text-muted uppercase tracking-wide">
          {content.fields.email}
        </label>
        <input id="email" name="email" type="email" required autoComplete="email"
          className={inputClass} placeholder="you@example.com" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-xs font-semibold text-muted uppercase tracking-wide">
          {content.fields.message}
        </label>
        <textarea id="message" name="message" required rows={5}
          className={`${inputClass} resize-y`} placeholder="…" />
      </div>

      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="text-sm text-accent">
          {content.errorMessage}
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'}
        className="bg-accent text-on-accent font-bold font-display italic text-lg
                   px-8 py-3 rounded-sm self-start
                   hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-opacity duration-[200ms]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
        {status === 'submitting' ? '…' : content.fields.send}
      </button>
    </form>
  )
}
