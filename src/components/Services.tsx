import { Code2, Cloud, Database, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    name: "End-to-End Software Solutions",
    description:
      "Requirement analysis, UI/UX design, backend & frontend development, testing & deployment, and post-delivery support — from idea to production.",
    stack: ["React", "Django", "PostgreSQL", "Figma"],
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps Solutions",
    description:
      "Cloud setup & configuration, CI/CD pipelines, application deployment, monitoring & security, and ongoing maintenance for reliable infrastructure.",
    stack: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: Database,
    name: "Data Engineering Services",
    description:
      "Data cleaning & validation, structuring & transformation, requirement-based processing — making raw data usable for systems and reporting.",
    stack: ["Python", "DuckDB", "ETL Pipelines"],
  },
  {
    icon: Users,
    name: "Small Dedicated Team Support",
    description:
      "On-demand engineering teams with flexible engagement models and role-based participation tailored to your delivery needs.",
    stack: ["On-demand", "Flexible", "Role-based"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0F6E56" }}
          >
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Four ways we deliver value
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:border-gray-400 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#E1F5EE" }}
                >
                  <Icon size={20} style={{ color: "#0F6E56" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-gray-900 text-base">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {service.stack.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center h-5 px-2 rounded-full text-xs font-medium border border-gray-200 text-gray-600 bg-gray-50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
