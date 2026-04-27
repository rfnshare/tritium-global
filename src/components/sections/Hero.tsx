'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease, delay } },
  }
}

const stats = [
  { value: '5+', label: 'Enterprise projects delivered' },
  { value: '3',  label: 'Clients on managed retainer' },
  { value: '2',  label: 'Dedicated teams deployed' },
  { value: '100%', label: 'Output-based delivery' },
]

export function Hero() {
  return (
    <section className="section-pad mx-auto max-w-7xl pt-20 pb-24 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #0F6E56 0%, transparent 70%)' }}
      />

      {/* Badge */}
      <motion.div
        {...fadeUp(0)}
        className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full px-4 py-1.5 mb-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-brand-400 inline-block shrink-0 animate-pulse" />
        Enterprise Software · Data Engineering · Cloud &amp; DevOps
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.08)}
        className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] mb-6 max-w-3xl text-zinc-900 dark:text-zinc-50"
      >
        We build what your{' '}
        <span className="text-brand-600">business runs on.</span>
      </motion.h1>

      {/* Subheadline — em-dashes removed, clean punctuation */}
      <motion.p
        {...fadeUp(0.16)}
        className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed mb-3"
      >
        From first requirement to final delivery, Tritium Global builds reliable
        software systems, structured data infrastructure, and cloud environments
        that enterprises and growing companies depend on.
      </motion.p>
      <motion.p
        {...fadeUp(0.2)}
        className="text-base text-brand-600 dark:text-brand-400 font-medium mb-10"
      >
        We've delivered for real clients. We'll deliver for you.
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-800 transition-colors shadow-sm"
        >
          See our work
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:border-zinc-400 dark:hover:border-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
        >
          Request a consultation →
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.36)}
        className="mt-16 pt-10 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="group">
            <div className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-brand-600 transition-colors">
              {s.value}
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
