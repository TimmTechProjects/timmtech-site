"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const TECHS = [
  "React Native", "Expo", "Next.js", "TypeScript", "Node.js",
  "PostgreSQL", "AWS", "Cloudflare", "Tailwind CSS",
];

export default function TechStackBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    setMouse({ x: mx, y: my });

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      let targetX = mx;
      let targetY = my;
      let closestDist = Infinity;

      chipRefs.current.forEach((chip) => {
        if (!chip) return;
        const cr = chip.getBoundingClientRect();
        const cx = cr.left + cr.width / 2 - rect.left;
        const cy = cr.top + cr.height / 2 - rect.top;
        const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);

        if (dist < 150 && dist < closestDist) {
          closestDist = dist;
          const pull = Math.max(0, 1 - dist / 150);
          const ease = pull * pull;
          targetX = mx + (cx - mx) * ease * 0.6;
          targetY = my + (cy - my) * ease * 0.6;
        }
      });

      setGlowPos({ x: targetX, y: targetY });
    });
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="border-t border-card-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted">
          Technologies We Work With
        </p>
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-6"
        >
          {/* Grid background */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Magnetic glow */}
          <div
            className="pointer-events-none absolute transition-opacity duration-300"
            style={{
              left: glowPos.x - 120,
              top: glowPos.y - 120,
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.08) 40%, transparent 70%)",
              opacity: isHovering ? 1 : 0,
              filter: "blur(20px)",
            }}
          />

          {/* Chips */}
          <div className="relative flex flex-wrap items-center justify-center gap-3">
            {TECHS.map((tech, i) => (
              <span
                key={tech}
                ref={(el) => { chipRefs.current[i] = el; }}
                className="relative z-10 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-indigo-400/40 hover:text-white hover:bg-white/[0.08] cursor-default select-none"
                style={{
                  textShadow: isHovering
                    ? (() => {
                        const chip = chipRefs.current[i];
                        if (!chip || !containerRef.current) return "none";
                        const rect = containerRef.current.getBoundingClientRect();
                        const cr = chip.getBoundingClientRect();
                        const cx = cr.left + cr.width / 2 - rect.left;
                        const cy = cr.top + cr.height / 2 - rect.top;
                        const dist = Math.sqrt((mouse.x - cx) ** 2 + (mouse.y - cy) ** 2);
                        const intensity = Math.max(0, 1 - dist / 200);
                        return intensity > 0
                          ? `0 0 ${8 + intensity * 12}px rgba(129,140,248,${intensity * 0.6})`
                          : "none";
                      })()
                    : "none",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
