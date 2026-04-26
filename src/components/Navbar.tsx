"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Data Showcase", href: "#data-showcase" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.header
      className="sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300"
      style={{
        backgroundColor: scrolled ? "rgb(255,255,255)" : "transparent",
        borderBottom: scrolled ? "1px solid rgb(229,231,235)" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 3px 0 rgb(0 0 0 / 0.04)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold"
            style={{ backgroundColor: "#0F6E56" }}
          >
            T
          </span>
          <span className="font-semibold text-gray-900 text-sm tracking-tight">
            Tritium Global
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center h-9 px-4 rounded-lg text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: "#0F6E56" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#085041")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0F6E56")
          }
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 pb-4 pt-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center h-9 px-4 rounded-lg text-sm font-medium text-white"
            style={{ backgroundColor: "#0F6E56" }}
            onClick={() => setOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </motion.header>
  );
}
