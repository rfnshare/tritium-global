'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay },
    },
  }
}

const stats = [
  { value: '5+', label: 'Enterprise projects' },
  { value: '3', label: 'Managed clients' },
  { value: '2', label: 'Teams deployed' },
  { value: '100%', label: 'Output-based' },
]

export function Hero() {
  return (
    <section className="section-pad mx-auto max-w-7xl pt-20 pb-24">
      {/* Badge */}
      <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 text-sm text-zinc-500 border border-zinc-200 rounded-full px-4 py-1.5 mb-10">
        <span className="w-2 h-2 rounded-full bg-brand-400 inline-block shrink-0" />
        Enterprise Software · Data Engineering · Cloud &amp; DevOps
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.08)}
        className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] mb-6 max-w-3xl text-zinc-900"
      >
        We turn messy data into{' '}
        <span className="text-brand-600">systems that work.</span>
      </motion.h1>

      {/* Subline */}
      <motion.p
        {...fadeUp(0.16)}
        className="text-lg text-muted max-w-xl leading-relaxed mb-10"
      >
        Tritium Global delivers end-to-end software, data pipelines, and cloud
        infrastructure for businesses that need practical results — not promises.
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="px-5 py-3 rounded-lg bg-brand-600 text-white font-medium text-sm hover:bg-brand-800 transition-colors"
        >
          See our work
        </Link>
        <Link
          href="/contact"
          className="px-5 py-3 rounded-lg border border-zinc-200 text-zinc-700 font-medium text-sm hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
        >
          Request a consultation →
        </Link>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.34)}
        className="mt-16 pt-10 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-medium tracking-tight text-zinc-900">{s.value}</div>
            <div className="text-sm text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
