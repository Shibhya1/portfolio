import SectionHeader from "./SectionHeader";

const projects = [
  {
    num: "001",
    title: "Multithreaded Token Bucket Traffic Shaper",
    desc: "Built a multithreaded traffic shaper emulator in C using POSIX threads, implementing 4 concurrent threads (packet arrival, token arrival, and two servers) to simulate a token bucket filter. Designed thread-safe FCFS queues with mutex locks and condition variables, preventing race conditions while maintaining high server utilization. Supports deterministic and trace-driven modes with precise timing, event logging, and detailed performance statistics.",
    tech: ["C", "POSIX Threads", "Mutex Locks", "Systems Programming"],
    link: null,
  },
  {
    num: "002",
    title: "Hybrid Book Recommender System",
    desc: "Engineered a hybrid recommendation pipeline combining collaborative filtering and content-based models, delivering top-10 personalized recommendations with optimized query performance. Containerized the full-stack application using Docker and pushed images to AWS ECR for consistent, reproducible deployments. Deployed on AWS EC2 with REST APIs, database integration, networking, and environment configuration simulating a production-ready cloud setup.",
    tech: ["Python", "Docker", "AWS ECR", "AWS EC2", "REST API"],
    link: "https://github.com/Shibhya1/Hybrid_book_Recommender",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-12 bg-surface border-y border-border max-lg:px-6">
      <SectionHeader num="03" title="Projects" />
      <div className="grid grid-cols-2 gap-px bg-border reveal max-lg:grid-cols-1">
        {projects.map((p) => (
          <div
            key={p.num}
            className="bg-bg p-10 flex flex-col gap-4 hover:bg-[#0d0d0d] transition-colors duration-200"
          >
            <div className="font-mono text-[0.65rem] text-border tracking-[0.15em]">{p.num}</div>
            <div className="font-display text-[1.4rem] font-bold text-text leading-tight">{p.title}</div>
            <p className="text-[0.88rem] text-muted leading-relaxed flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-[0.65rem] tracking-[0.08em] px-2.5 py-1 bg-[#1a1a1a] rounded-sm text-accent2">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors mt-1 inline-flex items-center gap-1"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
