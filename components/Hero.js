"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let petals = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    function drawPetal(ctx, x, y, w, h, rotation, opacity, r, g, b) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      ctx.beginPath();
      ctx.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(0, -h * 0.2, 0, 0, 0, Math.max(w, h));
      grad.addColorStop(0,   `rgba(${r+30}, ${g+30}, ${b+30}, 1)`);
      grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.85)`);
      grad.addColorStop(1,   `rgba(${r-20}, ${g-20}, ${b-20}, 0.3)`);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    }

    class Petal {
      constructor(initial = false) { this.reset(initial); }
      reset(initial = false) {
        const side = Math.random();
        if (side < 0.4) {
          this.x = -20;
          this.y = Math.random() * canvas.height;
          this.vx = 0.15 + Math.random() * 0.35;
          this.vy = 0.1 + Math.random() * 0.25;
        } else if (side < 0.8) {
          this.x = canvas.width + 20;
          this.y = Math.random() * canvas.height;
          this.vx = -(0.15 + Math.random() * 0.35);
          this.vy = 0.1 + Math.random() * 0.25;
        } else {
          this.x = Math.random() * canvas.width;
          this.y = -20;
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = 0.15 + Math.random() * 0.3;
        }

        if (initial) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        this.w = 3 + Math.random() * 7;
        this.h = this.w * (0.4 + Math.random() * 0.4);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.04;
        this.opacity = 0.4 + Math.random() * 0.6;

        const type = Math.random();
        if (type < 0.65) {
          const v = 200 + Math.floor(Math.random() * 55);
          this.r = v; this.g = v - 10; this.b = v - 20;
        } else if (type < 0.85) {
          this.r = 220; this.g = 160; this.b = 160;
        } else {
          this.r = 140 + Math.floor(Math.random() * 60);
          this.g = 20 + Math.floor(Math.random() * 30);
          this.b = 20 + Math.floor(Math.random() * 20);
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotSpeed;
        this.vy += 0.0005;
        const oob = this.x < -60 || this.x > canvas.width + 60 || this.y > canvas.height + 60;
        if (oob) this.reset(false);
      }

      draw(ctx) {
        drawPetal(ctx, this.x, this.y, this.w, this.h, this.rotation, this.opacity, this.r, this.g, this.b);
      }
    }

    for (let i = 0; i < 180; i++) petals.push(new Petal(true));

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#080608";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const smear = ctx.createRadialGradient(
        canvas.width * 0.35, canvas.height * 0.5, 0,
        canvas.width * 0.35, canvas.height * 0.5, canvas.width * 0.28
      );
      smear.addColorStop(0, "rgba(60, 8, 12, 0.35)");
      smear.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = smear;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      petals.forEach(p => { p.update(); p.draw(ctx); });
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)"
      }} />

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <div
          className="font-mono text-[0.65rem] tracking-[0.35em] uppercase mb-5 animate-[fadeUp_1s_ease_both]"
          style={{ color: "rgba(200,185,155,0.6)" }}
        >
          Software Engineer & CS Graduate Student
        </div>

        <div className="flex items-center gap-4 mb-4 animate-[fadeUp_1s_0.1s_ease_both] w-full max-w-lg">
          <div className="flex-1 h-px" style={{ background: "rgba(200,185,155,0.35)" }} />
          <div className="flex-1 h-px" style={{ background: "rgba(200,185,155,0.35)" }} />
        </div>

        <h1
          className="font-cinzel font-normal leading-none tracking-widest uppercase"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            letterSpacing: "0.12em",
            background: "linear-gradient(180deg, #e8dfc8 0%, #d4c4a0 12%, #b8a878 28%, #a08858 42%, #7a6440 55%, #95733d 68%, #472f13 80%, #1a1410 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 40px rgba(180,160,110,0.3)) drop-shadow(0 8px 32px rgba(0,0,0,0.95))",
            animation: "heroIn 2.2s ease 0.3s both",
          }}
        >
          Shibhya
          <br />
          Kaimal
        </h1>

        <style>{`
          @keyframes heroIn {
            0% {
              opacity: 0;
              transform: translateY(18px);
              filter: drop-shadow(0 0 0px rgba(200,144,10,0)) brightness(0.3);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              filter: drop-shadow(0 0 40px rgba(180,160,110,0.3)) drop-shadow(0 8px 32px rgba(0,0,0,0.95)) brightness(1);
            }
          }
        `}</style>

        <div className="flex items-center gap-4 mt-4 mb-8 animate-[fadeUp_1s_0.3s_ease_both] w-full max-w-lg">
          <div className="flex-1 h-px" style={{ background: "rgba(200,185,155,0.35)" }} />
          <div className="flex-1 h-px" style={{ background: "rgba(200,185,155,0.35)" }} />
        </div>

        <div className="animate-[fadeUp_1s_0.4s_ease_both] flex flex-col items-center gap-2">
          <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, transparent, rgba(200,185,155,0.25))" }} />
          <blockquote
            className="font-display italic text-center leading-snug"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.4rem)", color: "rgba(218, 211, 200, 0.58)" }}
          >
            "If it ain't broke, don't fix it."
          </blockquote>
          <cite
            className="font-mono text-[0.58rem] tracking-[0.25em] uppercase not-italic"
            style={{ color: "rgba(210,195,170,0.09)" }}
          >
            — Some Wise Guy
          </cite>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
        background: "linear-gradient(to top, #0b0b0b, transparent)"
      }} />
    </section>
  );
}