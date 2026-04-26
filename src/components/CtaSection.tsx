export default function CtaSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-6"
      style={{ backgroundColor: "#085041" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Ready to turn your data into a system that works?
        </h2>
        <p className="text-base text-white/70 max-w-xl leading-relaxed">
          Whether you need a full software build, cloud infrastructure, data
          engineering, or a dedicated team — we deliver outcomes, not just code.
        </p>
        <a
          href="mailto:support@tritiumglbl.com"
          className="inline-flex items-center justify-center h-11 px-7 rounded-lg text-sm font-semibold bg-white transition-colors hover:bg-gray-100"
          style={{ color: "#085041" }}
        >
          Schedule a consultation
        </a>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm text-white/60">
          <a
            href="mailto:support@tritiumglbl.com"
            className="hover:text-white/90 transition-colors"
          >
            support@tritiumglbl.com
          </a>
          <span className="hidden sm:inline">·</span>
          <a
            href="tel:+8801521259370"
            className="hover:text-white/90 transition-colors"
          >
            +880 1521-259370
          </a>
          <span className="hidden sm:inline">·</span>
          <span>www.tritiumglbl.com</span>
        </div>
      </div>
    </section>
  );
}
