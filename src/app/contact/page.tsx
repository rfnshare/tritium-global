import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ContactForm } from './ContactForm'
import { siteInfo } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Tritium Global for project inquiries, partnerships, or consultations.',
}

export default function ContactPage() {
  return (
    <div className="section-pad mx-auto max-w-5xl py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Get in touch
      </p>
      <h1 className="text-4xl font-medium tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
        Let's talk about your project
      </h1>
      <p className="text-muted mb-14 max-w-lg text-base leading-relaxed">
        No commitment. Just a conversation about what you need and whether we're the right fit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Suspense fallback={<div className="h-64 rounded-2xl bg-zinc-100 dark:bg-zinc-800 animate-pulse" />}>
          <ContactForm />
        </Suspense>

        <div className="space-y-10">
          <div>
            <h3 className="font-medium mb-4 text-zinc-900 dark:text-zinc-100">Direct contact</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>Email: <a href={`mailto:${siteInfo.contact.email}`} className="text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-2">{siteInfo.contact.email}</a></p>
              <p>Phone: <a href={`tel:${siteInfo.contact.phone.replace(/\s|-/g, '')}`} className="text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-2">{siteInfo.contact.phone}</a></p>
              <p>Web: <a href={siteInfo.url} className="text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-2">tritiumglbl.com</a></p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-zinc-900 dark:text-zinc-100">Office</h3>
            <p className="text-sm text-muted leading-relaxed mb-1">
              {siteInfo.address.line1}<br />
              {siteInfo.address.line2}<br />
              {siteInfo.address.country}
            </p>
            <a href={siteInfo.address.mapUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-brand-600 dark:text-brand-400 hover:underline underline-offset-2">
              View on Google Maps ↗
            </a>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-zinc-900 dark:text-zinc-100">Partnership &amp; referrals</h3>
            <p className="text-sm text-muted leading-relaxed">
              We run a structured partnership programme for brokers and consultants. For successful project introductions, partners receive a performance-based commission. Select "Partnership" in the form.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-2 text-zinc-900 dark:text-zinc-100">Response time</h3>
            <p className="text-sm text-muted">Within 24 hours on business days — guaranteed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
