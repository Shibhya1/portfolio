export default function Footer() {
  return (
    <footer className="px-12 py-12 border-t border-border flex justify-between items-center max-lg:px-6 max-lg:flex-col max-lg:gap-6 max-lg:text-center">
      <div className="font-display text-2xl font-bold italic text-accent">Shibhya Kaimal</div>
      <div className="flex gap-8">
        {[
          { label: "Email", href: "mailto:shibhyask@gmail.com" },
          { label: "LinkedIn", href: "https://linkedin.com/in/shibhya-kaimal" },
          { label: "GitHub", href: "https://github.com/Shibhya1" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-muted hover:text-accent transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      {/* <div className="font-mono text-[0.65rem] text-muted">© 2025 — Built with intention.</div> */}
    </footer>
  );
}
