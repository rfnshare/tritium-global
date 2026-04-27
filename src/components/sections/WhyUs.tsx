const items = [
  {
    num: '01',
    title: 'Results, not reports',
    desc: "Every milestone is tied to an outcome your business can measure, not hours billed or tasks completed. If it doesn't move your operations forward, it doesn't ship.",
  },
  {
    num: '02',
    title: 'No surprises, ever',
    desc: 'We send clear updates, surface blockers early, and never leave you guessing at handover. You know exactly where your project stands at every point.',
  },
  {
    num: '03',
    title: 'We work the way you work',
    desc: "We embed into your workflow, not the other way around. Fixed-scope project, embedded team, or ongoing managed support. We adapt to your structure.",
  },
  {
    num: '04',
    title: 'Built to last, not just to ship',
    desc: "We write clean, documented, extensible code. No dependency on us. You own the system fully and your next developer will thank you for it.",
  },
]

export function WhyUs() {
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100 dark:border-zinc-800">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Why Tritium Global
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900 dark:text-zinc-50">
        What makes us different
      </h2>
      <p className="text-muted mb-12 max-w-lg text-base leading-relaxed">
        Most IT firms promise delivery. We're built around a culture of accountability: to outcomes, to timelines, and to the client.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item.num}
            className="group relative p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-brand-200 dark:hover:border-brand-900 hover:shadow-sm transition-all duration-200 overflow-hidden"
          >
            {/* Decorative large number — only number shown */}
            <div
              aria-hidden
              className="absolute -right-2 -top-3 text-[7rem] font-bold leading-none select-none pointer-events-none text-zinc-100 dark:text-zinc-800 group-hover:text-brand-50 dark:group-hover:text-brand-950 transition-colors duration-300"
            >
              {item.num}
            </div>

            <div className="relative">
              <h3 className="font-medium text-base mb-2 text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
