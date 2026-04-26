import Link from 'next/link'
import { siteInfo } from '@/lib/site'

export function CtaSection() {
  return (
    <section className="section-pad mx-auto max-w-7xl pb-24">
      <div className="rounded-2xl bg-brand-800 dark:bg-brand-900 px-8 md:px-14 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #9FE1CB 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative">
          <p className="text-brand-200 text-xs font-semibold uppercase tracking-widest mb-3">
            Ready to get started?
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-white mb-3 max-w-xl leading-snug">
            Let's build what your business runs on.
          </h2>
          <p className="text-brand-100 text-base leading-relaxed">
            No commitment. Just a conversation about your project, your timeline, and whether we're the right fit.
          </p>
        </div>
        <div className="relative flex flex-col items-start md:items-end gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-white text-brand-800 font-medium text-sm hover:bg-brand-50 transition-colors whitespace-nowrap shadow-sm"
          >
            Schedule a consultation
          </Link>
          <Link
            href="/products/eshoopi"
            className="text-xs text-brand-200 hover:text-white transition-colors underline underline-offset-2"
          >
            Or explore eShoopi, our B2B intelligence product →
          </Link>
          <p className="text-xs text-brand-300 mt-1">
            {siteInfo.contact.email} · {siteInfo.contact.phone}
          </p>
        </div>
      </div>
    </section>
  )
}
