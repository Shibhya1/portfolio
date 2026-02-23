import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Southern California, Los Angeles",
    date: "Aug 2025 — May 2027",
    gpa: "3.5 GPA",
    courses: "Analysis of Algorithms · Information Retrieval · Operating Systems · Database Systems",
  },
  {
    degree: "B.E. Computer Engineering",
    school: "University of Mumbai",
    date: "Aug 2021 — May 2025",
    gpa: "9.49 CGPA",
    courses: "Top of class. Comprehensive foundation in computer science fundamentals, systems design, and software engineering principles.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-12 max-lg:px-6">
      <SectionHeader num="04" title="Education" />
      <div className="grid grid-cols-2 gap-8 reveal max-lg:grid-cols-1">
        {education.map((e) => (
          <div
            key={e.degree}
            className="border border-border bg-surface p-10 rounded hover:border-accent transition-colors duration-200"
          >
            <div className="font-display text-[1.3rem] font-bold text-text mb-2">{e.degree}</div>
            <div className="text-[0.9rem] text-accent mb-1">{e.school}</div>
            <div className="font-mono text-[0.68rem] text-muted tracking-[0.1em] mb-4">{e.date}</div>
            <div className="font-display text-[1.8rem] font-bold text-accent2 mb-3">{e.gpa}</div>
            <div className="text-[0.82rem] text-muted leading-relaxed">{e.courses}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
