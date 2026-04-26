import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tritium Global for project inquiries, partnerships, or consultations.',
}

export default function ContactPage() {
  return (
    <div className="section-pad mx-auto max-w-5xl py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Get in touch
      </p>
      <h1 className="text-4xl font-medium tracking-tight mb-4 text-zinc-900">
        Let's talk about your project
      </h1>
      <p className="text-muted mb-14 max-w-lg text-base leading-relaxed">
        No commitment. Just a conversation about what you're building and whether we can help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Suspense fallback={<div className="h-64 rounded-2xl bg-zinc-50 animate-pulse" />}>
          <ContactForm />
        </Suspense>

        <div className="space-y-10">
          <div>
            <h3 className="font-medium mb-4 text-zinc-900">Direct contact</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>
                Email:{' '}
                <a
                  href="mailto:support@tritiumglbl.com"
                  className="text-zinc-900 hover:underline underline-offset-2"
                >
                  support@tritiumglbl.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+8801521259370"
                  className="text-zinc-900 hover:underline underline-offset-2"
                >
                  +880 1521-259370
                </a>
              </p>
              <p>
                Website:{' '}
                <a
                  href="https://tritiumglbl.com"
                  className="text-zinc-900 hover:underline underline-offset-2"
                >
                  tritiumglbl.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-zinc-900">Partnership &amp; referrals</h3>
            <p className="text-sm text-muted leading-relaxed">
              Tritium Global offers a structured partnership model for brokers and consultants.
              For successful project introductions, partners receive a performance-based commission.
              Select "Partnership" in the form to learn more.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-zinc-900">Response time</h3>
            <p className="text-sm text-muted">
              We respond to all inquiries within 24 hours on business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
