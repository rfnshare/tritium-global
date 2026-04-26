'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

const rawRows = [
  { cust_id: 'NULL', name: 'ahmed r.', phone: '01711??????', segment: '—' },
  { cust_id: '1042', name: 'AHMED R', phone: '+88017111234', segment: 'retail' },
  { cust_id: '1042', name: 'Ahmed Rahman', phone: '01711-11234', segment: 'Retail' },
  { cust_id: '1043', name: 'farida b', phone: 'N/A', segment: 'wholesale' },
  { cust_id: '1044', name: 'KARIM md', phone: '017-22-33444', segment: 'RETAIL' },
]

const cleanRows = [
  { cust_id: '1042', name: 'Ahmed Rahman', phone: '01711111234', segment: 'Retail' },
  { cust_id: '1043', name: 'Farida Begum', phone: '—', segment: 'Wholesale' },
  { cust_id: '1044', name: 'Karim Md', phone: '01722334444', segment: 'Retail' },
]

const cols = ['cust_id', 'name', 'phone', 'segment'] as const

function isProblematic(row: Record<string, string>, i: number) {
  return i === 0 || i === 2 || ['NULL', 'N/A', 'AHMED R', 'KARIM md', 'retail', 'RETAIL', 'wholesale'].some(v => Object.values(row).includes(v))
}

export function DataShowcase() {
  const [view, setView] = useState<'raw' | 'clean'>('raw')
  const isRaw = view === 'raw'

  return (
    <section id="data-showcase" className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100 dark:border-zinc-800">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Data showcase
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900 dark:text-zinc-50">
        See the transformation
      </h2>
      <p className="text-muted mb-10 max-w-lg text-base leading-relaxed">
        We don't just describe our data work — we show it. This is exactly what happens before any system or analytics layer touches your data.
      </p>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <div className="flex rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden text-sm font-medium bg-white dark:bg-zinc-900">
          <button
            onClick={() => setView('raw')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 border-r border-zinc-200 dark:border-zinc-700 transition-colors',
              isRaw
                ? 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full transition-colors', isRaw ? 'bg-red-500' : 'bg-zinc-300 dark:bg-zinc-600')} />
            Raw input
          </button>
          <button
            onClick={() => setView('clean')}
            className={cn(
              'flex items-center gap-2 px-4 py-2 transition-colors',
              !isRaw
                ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            )}
          >
            <span className={cn('h-1.5 w-1.5 rounded-full transition-colors', !isRaw ? 'bg-green-500' : 'bg-zinc-300 dark:bg-zinc-600')} />
            Clean output
          </button>
        </div>

        {isRaw ? (
          <button
            onClick={() => setView('clean')}
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium text-white bg-brand-600 hover:bg-brand-800 transition-colors"
          >
            <Play size={12} />
            Run pipeline
          </button>
        ) : (
          <button
            onClick={() => setView('raw')}
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        )}
      </div>

      {/* Panel */}
      <div
        className={cn(
          'rounded-2xl border overflow-hidden transition-colors duration-300',
          isRaw
            ? 'border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/10'
            : 'border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-950/10'
        )}
      >
        {/* Panel header */}
        <div
          className={cn(
            'flex items-center justify-between px-5 py-3 border-b text-xs font-semibold uppercase tracking-wider transition-colors duration-300',
            isRaw
              ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400'
              : 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900/50 text-green-700 dark:text-green-400'
          )}
        >
          <div className="flex items-center gap-2">
            <span className={cn('h-1.5 w-1.5 rounded-full', isRaw ? 'bg-red-500' : 'bg-green-500')} />
            {isRaw ? 'Raw input — messy' : 'Cleaned output — structured'}
          </div>
          <span className="text-[10px] font-normal opacity-75 hidden sm:inline">
            {isRaw
              ? '5 rows · 1 null · 2 duplicates · inconsistent formats'
              : '3 rows · deduplicated · normalized · validated'}
          </span>
        </div>

        {/* Animated table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-x-auto"
          >
            <table className="w-full text-xs font-mono">
              <thead>
                <tr className="border-b border-zinc-200/60 dark:border-zinc-700/60">
                  {cols.map((col) => (
                    <th key={col} className="text-left px-5 py-2.5 text-zinc-400 dark:text-zinc-500 font-normal">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(isRaw ? rawRows : cleanRows).map((row, i) => {
                  const bad = isRaw && isProblematic(row as Record<string, string>, i)
                  return (
                    <tr key={i} className="border-b border-zinc-100 dark:border-zinc-800/60 last:border-0">
                      {cols.map((col) => (
                        <td
                          key={col}
                          className={cn(
                            'px-5 py-2 transition-colors',
                            isRaw
                              ? bad
                                ? 'text-red-500 dark:text-red-400'
                                : 'text-zinc-600 dark:text-zinc-300'
                              : 'text-green-700 dark:text-green-400'
                          )}
                        >
                          {(row as Record<string, string>)[col]}
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>

        {/* Clean footer */}
        {!isRaw && (
          <div className="px-5 py-3 border-t border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/10">
            <p className="text-xs text-brand-600 dark:text-brand-400">
              ✓ Deduplicated · Normalized · Null-handled · Standardized
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
