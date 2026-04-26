'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const inquiryTypes = [
  { value: 'Project inquiry', label: 'Project inquiry' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Early access - eShoopi', label: 'Early access — eShoopi' },
  { value: 'General', label: 'General' },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const defaultType = searchParams.get('type') === 'early-access'
    ? 'Early access - eShoopi'
    : searchParams.get('type') === 'partnership'
    ? 'Partnership'
    : 'Project inquiry'

  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    type: defaultType,
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function set(key: string, value: string) {
    setFields((f) => ({ ...f, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl border border-brand-200 bg-brand-50 text-center">
        <div className="text-2xl mb-3">✓</div>
        <p className="font-medium text-zinc-900 mb-1">Message received</p>
        <p className="text-sm text-muted">
          We'll get back to you within 24 hours on business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="name">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={fields.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="Your name"
            className="w-full h-10 px-3 rounded-lg border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="email">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={fields.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="you@company.com"
            className="w-full h-10 px-3 rounded-lg border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={fields.company}
          onChange={(e) => set('company', e.target.value)}
          placeholder="Your company name (optional)"
          className="w-full h-10 px-3 rounded-lg border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
        />
      </div>

      {/* Inquiry type */}
      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="type">
          Inquiry type
        </label>
        <select
          id="type"
          value={fields.type}
          onChange={(e) => set('type', e.target.value)}
          className="w-full h-10 px-3 rounded-lg border border-zinc-200 text-sm text-zinc-900 bg-white focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors"
        >
          {inquiryTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-zinc-700 mb-1.5" htmlFor="message">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={fields.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="Tell us about your project or question…"
          className="w-full px-3 py-2.5 rounded-lg border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-colors resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try emailing us directly at support@tritiumglbl.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full h-11 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
