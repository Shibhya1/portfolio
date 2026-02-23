"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
        SK — Portfolio
      </div>
      <ul className="flex gap-10 list-none">
        {["Skills", "Experience", "Projects", "Education", "Research"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-muted hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
