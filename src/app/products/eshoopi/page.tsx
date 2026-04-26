import type { Metadata } from 'next'
import Link from 'next/link'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'eShoopi — B2B Customer Intelligence for Bangladesh Retail',
  description:
    'eShoopi turns your raw sales data into actionable customer profiles built for the Bangladesh B2B retail market.',
}

const product = siteConfig.products.find((p) => p.id === 'eshoopi')!

const features = [
  {
    title: 'Customer segmentation',
    desc: 'Automatically group your buyers by purchase behaviour, order size, frequency, and product affinity — without any manual tagging.',
  },
  {
    title: 'Churn prediction',
    desc: 'Identify which customers are going quiet before they leave. Get actionable signals so your sales team can intervene at the right moment.',
  },
  {
    title: 'Purchase pattern analysis',
    desc: 'Understand what your buyers buy together, when they reorder, and which product categories drive the most lifetime value.',
  },
  {
    title: 'Sales team intelligence',
    desc: 'Give your sales reps a dashboard that surfaces the right customers to call, the right products to pitch, and the right timing to act.',
  },
  {
    title: 'Bangladesh market focus',
    desc: 'Built around local trade patterns, regional distribution networks, and the realities of B2B retail in Bangladesh — not a generic global template.',
  },
  {
    title: 'Works with your existing data',
    desc: 'Plug in your POS export, your ERP spreadsheet, or your accounting file. eShoopi cleans and structures it — no IT project required.',
  },
]

const useCases = [
  {
    who: 'Distributors',
    pain: 'You have hundreds of retail clients but no idea which ones are growing, shrinking, or about to churn.',
  },
  {
    who: 'Wholesalers',
    pain: 'Your sales team calls the same accounts every week. eShoopi tells you which accounts actually deserve the call.',
  },
  {
    who: 'FMCG brands',
    pain: 'You sell through retailers but have no visibility into who is buying what. eShoopi builds that picture from your invoice data.',
  },
]

export default function EshoopiPage() {
  return (
    <div className="section-pad mx-auto max-w-7xl py-20">

      {/* Header */}
      <div className="mb-4">
        <StatusBadge status={product.status} />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-3xl">
          🛍️
        </div>
        <h1 className="text-5xl font-medium tracking-tight text-zinc-900">{product.name}</h1>
      </div>
      <p className="text-xl text-muted max-w-2xl leading-relaxed mb-12">
        {product.description}
      </p>

      {/* Early access CTA */}
      <div className="p-6 md:p-8 rounded-2xl border border-amber-200 bg-amber-50 mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <p className="font-medium mb-1 text-zinc-900">Join the early access programme</p>
          <p className="text-sm text-muted leading-relaxed max-w-md">
            We are onboarding a small cohort of B2B retailers in Bangladesh for the initial launch.
            Early access members shape the product roadmap.
          </p>
        </div>
        <Link
          href="/contact?product=eshoopi&type=early-access"
          className="shrink-0 px-5 py-3 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-800 transition-colors whitespace-nowrap"
        >
          Request early access →
        </Link>
      </div>

      {/* Problem statement */}
      <div className="mb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
          The problem
        </p>
        <h2 className="text-3xl font-medium tracking-tight mb-6 max-w-2xl text-zinc-900 leading-snug">
          Most B2B businesses in Bangladesh are flying blind on their customers.
        </h2>
        <p className="text-muted max-w-2xl leading-relaxed mb-8 text-base">
          You have sales data — invoices, POS records, order histories — but it lives in spreadsheets
          or disconnected systems. You cannot easily answer: who are my best customers, who is about
          to leave, or which product to push to which buyer. eShoopi solves this without a six-month
          IT project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {useCases.map((uc) => (
            <div key={uc.who} className="p-5 rounded-xl border border-zinc-200 bg-zinc-50">
              <p className="font-medium text-sm mb-2 text-zinc-900">{uc.who}</p>
              <p className="text-sm text-muted leading-relaxed">{uc.pain}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
          Features
        </p>
        <h2 className="text-3xl font-medium tracking-tight mb-10 text-zinc-900">
          What eShoopi does
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-zinc-200 hover:border-brand-200 transition-colors"
            >
              <h3 className="font-medium mb-2 text-zinc-900">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Built by Tritium */}
      <div className="p-8 md:p-10 rounded-2xl bg-zinc-900 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">
          Built by Tritium Global
        </p>
        <h2 className="text-2xl font-medium mb-3 leading-snug max-w-2xl">
          The same data engineering that powers enterprise systems — now as a product.
        </h2>
        <p className="text-zinc-400 mb-6 max-w-2xl leading-relaxed text-base">
          Tritium Global has been building data pipelines and customer profiling systems for enterprise
          clients. eShoopi packages that same capability into a product designed specifically for
          B2B retailers in Bangladesh.
        </p>
        <Link
          href="/projects"
          className="text-sm text-brand-200 hover:text-white underline underline-offset-2 transition-colors"
        >
          See our data engineering work →
        </Link>
      </div>
    </div>
  )
}
