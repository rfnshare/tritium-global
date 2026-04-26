"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease, delay } },
  };
}

export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center h-6 px-3 rounded-full text-xs font-medium border"
          style={{
            backgroundColor: "#E1F5EE",
            color: "#0F6E56",
            borderColor: "#0F6E56",
          }}
        >
          Enterprise Software · Data Engineering · Cloud &amp; DevOps
        </motion.span>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-3xl"
        >
          We turn messy data into systems that work.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg text-gray-500 max-w-2xl leading-relaxed"
        >
          Tritium Global is a technology services organization delivering
          end-to-end software solutions, data engineering services, and cloud
          &amp; DevOps support. We turn ideas and unstructured data into
          reliable, scalable, and usable systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-3 mt-2"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg text-sm font-medium text-white"
            style={{ backgroundColor: "#0F6E56" }}
          >
            See our work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-11 px-6 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            Request a consultation →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex flex-wrap justify-center gap-8 border-t border-gray-100 pt-8 w-full"
        >
          {[
            { value: "5+", label: "Enterprise projects" },
            { value: "3", label: "Managed clients" },
            { value: "2", label: "Dedicated teams" },
            { value: "100%", label: "Output-based" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="text-2xl font-bold"
                style={{ color: "#0F6E56" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
