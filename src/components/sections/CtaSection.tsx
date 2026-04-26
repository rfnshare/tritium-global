import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="section-pad mx-auto max-w-7xl pb-24">
      <div className="rounded-2xl bg-brand-800 px-8 md:px-14 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-white mb-3 max-w-xl leading-tight">
            Ready to turn your data into a system that works?
          </h2>
          <p className="text-brand-100 text-base leading-relaxed">
            Let's talk about your project. No commitment, just a conversation.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg bg-white text-brand-800 font-medium text-sm hover:bg-brand-50 transition-colors whitespace-nowrap"
          >
            Schedule a consultation
          </Link>
          <p className="text-xs text-brand-200">
            support@tritiumglbl.com · +880 1521-259370
          </p>
        </div>
      </div>
    </section>
  )
}
