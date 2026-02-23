export default function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-6 mb-16 reveal">
      <span className="font-mono text-[0.68rem] text-accent2 tracking-[0.15em]">{num}</span>
      <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-bold text-text leading-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
