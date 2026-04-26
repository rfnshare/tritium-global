const items = [
  {
    num: '01',
    title: 'Outcome-centric delivery',
    desc: 'We focus on functional, high-performance solutions. Every engagement is scoped around solving real business problems — not abstract deliverables.',
  },
  {
    num: '02',
    title: 'Transparent governance',
    desc: 'Clear communication and rigorous milestone reporting. Every stakeholder stays aligned from discovery to go-live — no surprises.',
  },
  {
    num: '03',
    title: 'Adaptive collaboration',
    desc: 'We integrate into your existing structure — whether that is a fixed-scope project or a dedicated team working directly under your leadership.',
  },
  {
    num: '04',
    title: 'Sustainable engineering',
    desc: 'We build for the long run. High-quality code and robust architecture — not shortcuts that become problems six months from now.',
  },
]

export function WhyUs() {
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Why Tritium Global
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-12 text-zinc-900">
        What makes us different
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {items.map((item) => (
          <div key={item.num} className="py-7 border-t border-zinc-100">
            <span className="text-sm font-semibold text-brand-600 block mb-2">{item.num}</span>
            <h3 className="font-medium text-base mb-2 text-zinc-900">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
