const reasons = [
  {
    number: "01",
    title: "Outcome-Centric Delivery",
    description:
      "We build functional, high-performance solutions focused on real business problems — not lines of code.",
  },
  {
    number: "02",
    title: "Transparent Governance",
    description:
      "Clear communication, rigorous milestone reporting, and no surprises at any stage of delivery.",
  },
  {
    number: "03",
    title: "Adaptive Collaboration",
    description:
      "Flexible engagement models that integrate into any existing team structure or delivery process.",
  },
  {
    number: "04",
    title: "Sustainable Engineering",
    description:
      "High-quality code and robust architecture. We do not take short-term workarounds that create long-term debt.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0F6E56" }}
          >
            Why Tritium Global
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What makes us different
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="rounded-xl border border-gray-200 p-6 flex flex-col gap-3 hover:border-gray-400 transition-colors"
            >
              <span
                className="text-3xl font-bold tabular-nums leading-none"
                style={{ color: "#0F6E56" }}
              >
                {reason.number}
              </span>
              <h3 className="font-semibold text-gray-900 text-base">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
