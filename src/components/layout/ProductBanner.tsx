'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import type { SiteConfig } from '@/types/content'

type Props = { config: SiteConfig['productBanner'] }

export function ProductBanner({ config }: Props) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  return (
    <div className="bg-brand-800 text-white text-sm">
      <div className="section-pad mx-auto max-w-7xl flex items-center justify-between gap-4 py-2.5">
        <div className="flex items-center gap-2 flex-wrap min-w-0">
          <span className="font-medium shrink-0">{config.headline}</span>
          <span className="text-brand-100 hidden sm:inline truncate">{config.subtext}</span>
          <Link
            href={config.ctaUrl}
            className="text-brand-100 underline underline-offset-2 hover:text-white transition-colors font-medium shrink-0"
          >
            {config.ctaLabel}
          </Link>
        </div>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="text-brand-200 hover:text-white transition-colors shrink-0 ml-2"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  )
}
