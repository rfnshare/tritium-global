'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw } from 'lucide-react'

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

const isProblematicRow = (row: Record<string, string>, i: number) =>
  i === 0 || i === 2 || Object.values(row).some((v) => v === 'NULL' || v === 'N/A' || v === '—' || v === 'AHMED R' || v === 'KARIM md' || v === 'retail' || v === 'RETAIL' || v === 'wholesale')

export function DataShowcase() {
  const [view, setView] = useState<'raw' | 'clean'>('raw')
  const isRaw = view === 'raw'

  return (
    <section id="data-showcase" className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100">
      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Data showcase
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900">
        See the transformation
      </h2>
      <p className="text-muted mb-10 max-w-lg text-base leading-relaxed">
        We don't just describe our data work — we show it. This is the kind of cleanup Tritium
        Global does before any system or analytics layer touches your data.
      </p>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex rounded-lg border border-zinc-200 overflow-hidden text-sm font-medium">
          <button
            onClick={() => setView('raw')}
            className="flex items-center gap-2 px-4 py-2 transition-colors"
            style={{
              backgroundColor: isRaw ? '#FEF2F2' : 'white',
              color: isRaw ? '#dc2626' : '#6b7280',
              borderRight: '1px solid #e5e7eb',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: isRaw ? '#dc2626' : '#d1d5db' }}
            />
            Raw input
          </button>
          <button
            onClick={() => setView('clean')}
            className="flex items-center gap-2 px-4 py-2 transition-colors"
            style={{
              backgroundColor: !isRaw ? '#F0FDF4' : 'white',
              color: !isRaw ? '#15803d' : '#6b7280',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: !isRaw ? '#15803d' : '#d1d5db' }}
            />
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
            className="flex items-center gap-1.5 h-9 px-4 rounded-lg text-sm font-medium border border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50 transition-colors bg-white"
          >
            <RotateCcw size={12} />
            Reset
          </button>
        )}
      </div>

      {/* Panel */}
      <div
        className="rounded-2xl border overflow-hidden transition-colors duration-300"
        style={{
          borderColor: isRaw ? '#fecaca' : '#bbf7d0',
          backgroundColor: isRaw ? 'rgb(254 242 242 / 0.35)' : 'rgb(240 253 244 / 0.35)',
        }}
      >
        {/* Panel header */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
          style={{
            borderColor: isRaw ? '#fecaca' : '#bbf7d0',
            backgroundColor: isRaw ? '#FEF2F2' : '#F0FDF4',
            color: isRaw ? '#dc2626' : '#15803d',
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: isRaw ? '#dc2626' : '#15803d' }}
            />
            {isRaw ? 'Raw input — messy' : 'Cleaned output — structured'}
          </div>
          <span className="text-[10px] font-normal" style={{ opacity: 0.75 }}>
            {isRaw
              ? '5 rows · 1 null · 2 duplicates · inconsistent formats'
              : '3 rows · deduplicated · normalized · validated'}
          </span>
        </div>

        {/* Animated table swap */}
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
                <tr className="border-b border-zinc-100">
                  {cols.map((col) => (
                    <th key={col} className="text-left px-5 py-2.5 text-zinc-400 font-normal">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(isRaw ? rawRows : cleanRows).map((row, i) => {
                  const bad = isRaw && isProblematicRow(row as Record<string, string>, i)
                  return (
                    <tr key={i} className="border-b border-zinc-50 last:border-0">
                      {cols.map((col) => (
                        <td
                          key={col}
                          className="px-5 py-2"
                          style={{ color: isRaw ? (bad ? '#dc2626' : '#374151') : '#15803d' }}
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

        {/* Footer caption (clean only) */}
        {!isRaw && (
          <div className="px-5 py-3 border-t border-green-100 bg-green-50/50">
            <p className="text-xs text-brand-600">
              ✓ Deduplicated · Normalized · Null-handled · Standardized
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
