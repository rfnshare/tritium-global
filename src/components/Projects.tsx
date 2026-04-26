const projects = [
  {
    industry: "Commercial Real Estate",
    name: "Enterprise Ecosystem for Tier-1 Commercial Developers",
    description:
      "Multi-site digital infrastructure spanning land records, unit inventory, customer installments, and executive reporting dashboards.",
    tags: ["Figma UI/UX", "Full-stack", "Cloud Deployment", "24/7 Monitoring"],
  },
  {
    industry: "Residential Construction",
    name: "Operational Management System for Local Builders",
    description:
      "Automated lifecycle tracking from land acquisition to handover, with workflow automation, milestone tracking, and stakeholder alignment tools.",
    tags: ["Workflow Automation", "Milestone Tracking", "Stakeholder Tools"],
  },
  {
    industry: "Managed Services",
    name: "Strategic Cloud & DevOps Managed Services",
    description:
      "Embedded DevOps for 2 SMEs and 1 global enterprise. Cloud orchestration, CI/CD pipelines, and proactive maintenance. Ongoing engagement.",
    tags: ["AWS", "CI/CD", "Cloud Orchestration", "Ongoing"],
  },
  {
    industry: "Data Engineering",
    name: "Data Engineering & Predictive Customer Profiling",
    description:
      "High-volume unstructured datasets transformed into behavioral customer profiles for targeted marketing and sales activation.",
    tags: ["Python", "DuckDB", "ETL", "Predictive Profiling"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#0F6E56" }}
          >
            Project experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real work, real systems
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col gap-4 hover:border-gray-400 transition-colors"
            >
              <span
                className="inline-flex items-center h-5 w-fit px-2 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "#E1F5EE",
                  color: "#0F6E56",
                  borderColor: "#0F6E56",
                }}
              >
                {project.industry}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-gray-900 text-base leading-snug">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center h-5 px-2 rounded-full text-xs font-medium border border-gray-200 text-gray-600 bg-gray-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
