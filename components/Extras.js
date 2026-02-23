import SectionHeader from "./SectionHeader";

export function Publication() {
  return (
    <section id="research" className="py-24 px-12 bg-surface border-y border-border max-lg:px-6">
      <SectionHeader num="05" title="Research" />
      <div className="border border-border bg-bg p-10 max-w-3xl rounded reveal">
        <div className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-accent2 mb-4">
          IEEE · ICICI 2025 · Bangalore, India
        </div>
        <div className="font-display text-[1.4rem] font-bold text-text leading-snug mb-4">
          Unlocking E-Map Potential in Internet-Challenged Zones Using Light Fidelity
        </div>
        <div className="text-[0.85rem] text-muted mb-2">
          S. Kaimal, A. Anto Vembil, D. Suvarna, J. Laurent Sequeira, V. Shrivastava
        </div>
        <div className="text-[0.85rem] text-muted mb-4">
          2025 3rd International Conference on Inventive Computing and Informatics · pp. 1370–1375
        </div>
        <div className="font-mono text-[0.7rem] text-muted tracking-[0.04em]">
          DOI:{" "}
          <a
            href="https://doi.org/10.1109/ICICI65870.2025.11069579"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            10.1109/ICICI65870.2025.11069579 ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export function Leadership() {
  const roles = [
    {
      role: "Technical Head",
      org: "Codex — College Coding Club",
      desc: "Led technical architecture for hackathons, coding competitions, and scalable event platforms. Responsible for engineering decisions, mentorship, and cross-team collaboration.",
    },
    {
      role: "Sports Executive",
      org: "Ignitra — Inter-College Sports Fest",
      desc: "Oversaw logistics and system workflows for 100+ participants across multiple events. Managed coordination between teams, scheduling, and on-ground operations.",
    },
  ];

  return (
    <section id="leadership" className="py-24 px-12 max-lg:px-6">
      <SectionHeader num="06" title="Leadership" />
      <div className="grid grid-cols-2 gap-6 reveal max-lg:grid-cols-1">
        {roles.map((r) => (
          <div
            key={r.role}
            className="border border-border p-8 rounded hover:border-accent2 transition-colors duration-200"
          >
            <div className="font-display text-[1.1rem] font-bold text-text mb-2">{r.role}</div>
            <div className="font-mono text-[0.68rem] text-accent2 tracking-[0.1em] uppercase mb-4">{r.org}</div>
            <p className="text-[0.88rem] text-muted leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
