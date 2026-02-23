"use client";
import { useEffect, useState } from "react";

const links = ["Skills", "Experience", "Projects", "Education", "Research"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change / link click
  const handleLink = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center transition-all duration-300 ${
          scrolled || open
            ? "bg-bg/95 backdrop-blur-md border-b border-border"
            : "border-b border-transparent"
        }`}
      >
        <div className="font-mono text-xs tracking-[0.15em] uppercase text-accent">
          <a href="#">SK</a>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((item) => (
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

        {/* Hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px bg-accent transition-all duration-300"
            style={{
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-px bg-accent transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-accent transition-all duration-300"
            style={{
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`fixed top-[61px] left-0 right-0 z-40 bg-bg/98 backdrop-blur-md border-b border-border md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col list-none px-8 py-6 gap-6">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleLink}
                className="font-mono text-[0.8rem] tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors duration-200 block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}