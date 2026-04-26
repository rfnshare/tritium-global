const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Data Showcase", href: "#data-showcase" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span
              className="flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "#0F6E56" }}
            >
              T
            </span>
            <span className="font-semibold text-gray-900 text-sm">
              Tritium Global
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Enterprise Software · Data Engineering · Cloud &amp; DevOps
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-5 border-t border-gray-100 flex justify-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Tritium Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
