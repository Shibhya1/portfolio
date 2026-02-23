import SectionHeader from "./SectionHeader";

const skills = [
  { cat: "Languages", tags: ["C", "C++", "Python", "JavaScript"] },
  { cat: "Frameworks", tags: ["React", "Node.js", "Express", "Django", "Flask", "PyTorch"] },
  { cat: "Cloud & DevOps", tags: ["AWS", "Docker", "Kubernetes", "Git"] },
  { cat: "Databases", tags: ["PostgreSQL", "MySQL", "MongoDB"] },
  { cat: "System Design", tags: ["Distributed Systems", "Microservices", "REST APIs"] },
  { cat: "Operating System", tags: ["Ubuntu Linux", "POSIX", "Multithreading"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-12 bg-surface border-y border-border max-lg:px-6">
      <SectionHeader num="01" title="Technical Skills" />
      <div className="grid grid-cols-3 gap-px bg-border border border-border reveal max-lg:grid-cols-1">
        {skills.map((s) => (
          <div
            key={s.cat}
            className="bg-bg p-8 hover:bg-[#131313] transition-colors duration-200"
          >
            <div className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-accent2 mb-4">
              {s.cat}
            </div>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.72rem] px-3 py-1.5 border border-border rounded-sm text-text tracking-[0.04em] hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
