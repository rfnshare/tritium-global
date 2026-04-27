import Link from 'next/link'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { siteConfig } from '@/lib/config'

export function ProductSpotlight() {
  const product = siteConfig.products.find((p) => p.visible)
  if (!product) return null

  return (
    <section className="section-pad mx-auto max-w-7xl py-6 border-t border-zinc-100 dark:border-zinc-800">
      <div className="rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
        <div className="flex items-start sm:items-center gap-4">
          <div className="text-3xl shrink-0">🛍️</div>
          <div>
            <div className="flex items-center gap-2.5 mb-1 flex-wrap">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">
                {product.name}
              </span>
              <StatusBadge status={product.status} />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
              {product.tagline}. Early access applications now open.
            </p>
          </div>
        </div>
        <Link
          href={`/products/${product.id}`}
          className="shrink-0 px-4 py-2.5 rounded-lg border border-amber-300 dark:border-amber-800 text-sm font-medium text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors whitespace-nowrap"
        >
          Learn more →
        </Link>
      </div>
    </section>
  )
}
