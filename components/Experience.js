import SectionHeader from "./SectionHeader";

const experience = [
  {
    date: "Jan 2025 — Apr 2025",
    company: "Quickyearning Pvt. Ltd.",
    role: "Fullstack Developer",
    heading: "Building Financial Dashboards at Scale",
    bullets: [
      "Architected scalable financial dashboards integrating React.js front-end with a Node.js/Python back-end to support high-volume real-time stock, crypto, and forex data streams.",
      "Designed APIs and system pipelines using yfinance + Express to fetch, process, and serve live market data with reduced latency.",
      "Collaborated with a 30-member engineering team, implementing debugging protocols and modularized system components for smoother deployments.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-12 max-lg:px-6">
      <SectionHeader num="02" title="Experience" />
      {experience.map((exp) => (
        <div
          key={exp.company}
          className="grid grid-cols-[1fr_2fr] gap-12 py-12 border-t border-border last:border-b reveal max-lg:grid-cols-1 max-lg:gap-4"
        >
          <div>
            <div className="font-mono text-[0.7rem] text-muted tracking-[0.1em] mb-2">{exp.date}</div>
            <div className="font-display text-xl font-bold text-accent mb-1">{exp.company}</div>
            <div className="text-sm text-muted font-light">{exp.role}</div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-text mb-4">{exp.heading}</h3>
            <ul className="flex flex-col gap-3">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-[0.92rem] text-muted pl-5 relative leading-relaxed">
                  <span className="absolute left-0 text-accent2 font-mono">→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
