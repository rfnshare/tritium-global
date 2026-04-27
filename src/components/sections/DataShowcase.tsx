'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ─── Data ─────────────────────────────────────────────────────── */

const cols = ['cust_id', 'full_name', 'mobile', 'email', 'city', 'amt_bdt'] as const

const rawRows = [
  { bad: true,  cust_id: 'NULL',  full_name: 'ahmed r.',      mobile: '01711 ??????',   email: 'ahmed_r',          city: 'dhaka',       amt_bdt: '"12,500 tk"'  },
  { bad: true,  cust_id: '1042',  full_name: 'AHMED RAHMAN',  mobile: '+88 01711234',   email: 'ahmed@mail',       city: 'DHAKA',       amt_bdt: '12500'         },
  { bad: true,  cust_id: '1042',  full_name: 'Ahmed R.',       mobile: '01711-1234',     email: 'ahmed@mail.com',   city: 'Dhaka',       amt_bdt: 'BDT12,500'     },
  { bad: true,  cust_id: '1043',  full_name: 'farida b',       mobile: 'N/A',            email: '',                 city: 'ctg',         amt_bdt: '5000tk'        },
  { bad: true,  cust_id: '1044',  full_name: 'MD KARIM',       mobile: '017 22 33 444',  email: 'karim@biz.com',    city: 'sylhet',      amt_bdt: '#N/A'          },
  { bad: true,  cust_id: '0',     full_name: 'RINA ISLAM',     mobile: '01900-112233',   email: 'rina.@gmail',      city: 'Chittagong',  amt_bdt: '0'             },
  { bad: true,  cust_id: '1045',  full_name: '',               mobile: '1800456789',     email: 'sales@co.com',     city: 'DK',          amt_bdt: '15,000.00'     },
]

const cleanRows = [
  { cust_id: '1042', full_name: 'Ahmed Rahman',  mobile: '+8801711001234', email: 'ahmed@mail.com',  city: 'Dhaka',       amt_bdt: '12,500.00' },
  { cust_id: '1043', full_name: 'Farida Begum',  mobile: '—',         email: '—',           city: 'Chittagong',  amt_bdt: '5,000.00'  },
  { cust_id: '1044', full_name: 'Md. Karim',     mobile: '+8801722334440', email: 'karim@biz.com',   city: 'Sylhet',      amt_bdt: '8,000.00'  },
  { cust_id: '1045', full_name: 'Rina Islam',    mobile: '+8801900112233', email: '—',           city: 'Chittagong',  amt_bdt: '15,000.00' },
]

/* ─── Pipeline steps ────────────────────────────────────────────── */

const PIPELINE_STEPS = [
  'Scanning 7 records for quality issues...',
  'Found 3 duplicate entries (cust_id 1042) — merging...',
  'Normalising 7 phone numbers to E.164 format...',
  'Resolving NULL, blank and invalid field values...',
  'Standardising city names and casing...',
  'Cleaning and unifying amount formats...',
  'Final validation complete. 4 clean records ready.',
]

const STEP_DELAY_MS = 380
const TOTAL_MS = PIPELINE_STEPS.length * STEP_DELAY_MS + 320

/* ─── Component ─────────────────────────────────────────────────── */

type View = 'raw' | 'processing' | 'clean'

export function DataShowcase() {
  const [view, setView] = useState<View>('raw')
  const [stepsDone, setStepsDone] = useState(0)

  const isRaw        = view === 'raw'
  const isProcessing = view === 'processing'
  const isClean      = view === 'clean'

  /* Cascade pipeline steps then transition to clean */
  useEffect(() => {
    if (!isProcessing) { setStepsDone(0); return }

    const timers = PIPELINE_STEPS.map((_, i) =>
      window.setTimeout(() => setStepsDone(i + 1), i * STEP_DELAY_MS + 80)
    )
    const done = window.setTimeout(() => setView('clean'), TOTAL_MS)

    return () => { timers.forEach(clearTimeout); clearTimeout(done) }
  }, [isProcessing])

  function runPipeline() { setView('processing') }
  function reset()       { setView('raw') }

  return (
    <section id="data-showcase" className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100 dark:border-zinc-800">

      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Data showcase
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900 dark:text-zinc-50">
        See the transformation
      </h2>
      <p className="text-muted mb-10 max-w-lg text-base leading-relaxed">
        We do not just describe our data work. We show it. This is what happens before any system or analytics layer touches your data.
      </p>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        {/* Tab switcher */}
        <div className="flex rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden text-sm font-medium bg-white dark:bg-zinc-900">
          <button
            onClick={() => !isProcessing && setView('raw')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 border-r border-zinc-200 dark:border-zinc-700 transition-colors',
              isRaw
                ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800',
              isProcessing && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full', isRaw ? 'bg-red-500' : 'bg-zinc-300 dark:bg-zinc-600')} />
            Raw input
          </button>
          <button
            onClick={() => !isProcessing && setView('clean')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 transition-colors',
              isClean
                ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800',
              isProcessing && 'opacity-50 cursor-not-allowed'
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full', isClean ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-600')} />
            Clean output
          </button>
        </div>

        {/* Action button */}
        {isRaw && (
          <button
            onClick={runPipeline}
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium text-white bg-brand-600 hover:bg-brand-800 transition-colors"
          >
            <Play size={12} />
            Run pipeline
          </button>
        )}
        {isProcessing && (
          <span className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 cursor-not-allowed">
            <Loader2 size={12} className="animate-spin" />
            Processing...
          </span>
        )}
        {isClean && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        )}
      </div>

      {/* Panel */}
      <AnimatePresence mode="wait">

        {/* ── RAW ── */}
        {isRaw && (
          <motion.div
            key="raw"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/10 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Raw input — messy
              </div>
              <span className="text-[10px] text-red-400 dark:text-red-500 hidden sm:block">
                7 rows · 3 duplicates · 4 nulls · 6 format issues · inconsistent casing
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b border-red-100 dark:border-red-900/40">
                    {cols.map(c => (
                      <th key={c} className="text-left px-4 py-2.5 text-zinc-400 dark:text-zinc-500 font-normal whitespace-nowrap">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rawRows.map((row, i) => (
                    <tr key={i} className="border-b border-red-50 dark:border-red-900/20 last:border-0">
                      {cols.map(c => (
                        <td
                          key={c}
                          className={cn(
                            'px-4 py-1.5 whitespace-nowrap',
                            row.bad ? 'text-red-500 dark:text-red-400' : 'text-zinc-600 dark:text-zinc-300'
                          )}
                        >
                          {(row as Record<string, string>)[c] || <span className="italic text-zinc-300 dark:text-zinc-600">(blank)</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* ── PROCESSING ── */}
        {isProcessing && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-brand-200 dark:border-brand-800 bg-brand-50/40 dark:bg-brand-950/20 overflow-hidden"
          >
            {/* Progress header */}
            <div className="px-5 pt-5 pb-4 border-b border-brand-100 dark:border-brand-900">
              <div className="flex items-center gap-2 mb-3">
                <Loader2 size={14} className="animate-spin text-brand-600" />
                <span className="text-sm font-semibold text-brand-700 dark:text-brand-400">
                  Tritium pipeline running...
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 w-full rounded-full bg-brand-100 dark:bg-brand-900 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-brand-600"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(stepsDone / PIPELINE_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Step log */}
            <div className="px-5 py-4 space-y-2 min-h-[200px]">
              {PIPELINE_STEPS.map((step, i) => (
                <AnimatePresence key={step}>
                  {stepsDone > i && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={14}
                        className={cn(
                          'mt-0.5 shrink-0',
                          i === stepsDone - 1
                            ? 'text-brand-600 dark:text-brand-400'
                            : 'text-zinc-300 dark:text-zinc-600'
                        )}
                      />
                      <span className={cn(
                        'text-xs font-mono leading-relaxed',
                        i === stepsDone - 1
                          ? 'text-brand-700 dark:text-brand-300'
                          : 'text-zinc-400 dark:text-zinc-500'
                      )}>
                        {step}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── CLEAN ── */}
        {isClean && (
          <motion.div
            key="clean"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="rounded-2xl border border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-950/10 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-950/20">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Cleaned output — structured
              </div>
              <span className="text-[10px] text-green-600 dark:text-green-500 hidden sm:block">
                4 records · deduplicated · normalised · validated
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b border-green-100 dark:border-green-900/40">
                    {cols.map(c => (
                      <th key={c} className="text-left px-4 py-2.5 text-zinc-400 dark:text-zinc-500 font-normal whitespace-nowrap">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cleanRows.map((row, i) => (
                    <tr key={i} className="border-b border-green-50 dark:border-green-900/20 last:border-0">
                      {cols.map(c => (
                        <td key={c} className="px-4 py-1.5 whitespace-nowrap text-green-700 dark:text-green-400">
                          {(row as Record<string, string>)[c]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-green-200 dark:border-green-900/50 bg-green-50/60 dark:bg-green-950/10">
              <p className="text-xs text-brand-600 dark:text-brand-400">
                ✓ Deduplicated &nbsp;·&nbsp; Normalised &nbsp;·&nbsp; Null-handled &nbsp;·&nbsp; Standardised &nbsp;·&nbsp; Format-unified
              </p>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </section>
  )
}
