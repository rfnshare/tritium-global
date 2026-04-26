import { cn } from '@/lib/utils'
import type { ProductStatus } from '@/types/content'

const styles: Record<ProductStatus, string> = {
  'coming-soon': 'bg-zinc-100 text-zinc-600 border-zinc-200',
  'early-access': 'bg-amber-50 text-amber-700 border-amber-200',
  'live': 'bg-brand-50 text-brand-800 border-brand-200',
}

const labels: Record<ProductStatus, string> = {
  'coming-soon': 'Coming soon',
  'early-access': 'Early access',
  'live': 'Live',
}

export function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border',
        styles[status]
      )}
    >
      {labels[status]}
    </span>
  )
}
