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
  const [nearestIdx, setNearestIdx] = useState(-1);
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
      let closestIdx = -1;

      chipRefs.current.forEach((chip, i) => {
        if (!chip) return;
        const cr = chip.getBoundingClientRect();
        const cx = cr.left + cr.width / 2 - rect.left;
        const cy = cr.top + cr.height / 2 - rect.top;
        const dist = Math.sqrt((mx - cx) ** 2 + (my - cy) ** 2);

        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      // Strong magnetic pull — glow snaps toward nearest chip
      if (closestDist < 200 && closestIdx >= 0) {
        const chip = chipRefs.current[closestIdx]!;
        const cr = chip.getBoundingClientRect();
        const cx = cr.left + cr.width / 2 - rect.left;
        const cy = cr.top + cr.height / 2 - rect.top;
        const pull = Math.max(0, 1 - closestDist / 200);
        const ease = pull * pull * pull; // cubic for aggressive snap
        targetX = mx + (cx - mx) * ease * 0.85;
        targetY = my + (cy - my) * ease * 0.85;
      }

      setGlowPos({ x: targetX, y: targetY });
      setNearestIdx(closestDist < 200 ? closestIdx : -1);
    });
  }, []);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setNearestIdx(-1); }}
      className="relative border-t border-card-border bg-card/30 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted relative z-10">
          Technologies We Work With
        </p>
        <div className="relative py-4">

          {/* Magnetic glow */}
          <div
            className="pointer-events-none absolute"
            style={{
              left: glowPos.x - 100,
              top: glowPos.y - 100,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: nearestIdx >= 0
                ? "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(99,102,241,0.15) 30%, transparent 65%)"
                : "radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 40%, transparent 70%)",
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.3s, background 0.15s",
              filter: "blur(15px)",
            }}
          />

          {/* Chips — original inline layout with separators */}
          <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted/70">
            {TECHS.map((tech, i) => (
              <span key={tech} className="flex items-center gap-10">
                <span
                  ref={(el) => { chipRefs.current[i] = el; }}
                  className="relative z-10 cursor-default select-none transition-all duration-200"
                  style={{
                    color: nearestIdx === i && isHovering ? "#e0e7ff" : undefined,
                    textShadow: (() => {
                      if (!isHovering) return "none";
                      const chip = chipRefs.current[i];
                      if (!chip || !containerRef.current) return "none";
                      const rect = containerRef.current.getBoundingClientRect();
                      const cr = chip.getBoundingClientRect();
                      const cx = cr.left + cr.width / 2 - rect.left;
                      const cy = cr.top + cr.height / 2 - rect.top;
                      const dist = Math.sqrt((mouse.x - cx) ** 2 + (mouse.y - cy) ** 2);
                      const intensity = Math.max(0, 1 - dist / 180);
                      if (intensity <= 0) return "none";
                      return `0 0 ${10 + intensity * 20}px rgba(129,140,248,${intensity * 0.8}), 0 0 ${2 + intensity * 6}px rgba(165,180,252,${intensity * 0.5})`;
                    })(),
                  }}
                >
                  {tech}
                </span>
                {i < TECHS.length - 1 && (
                  <span className="hidden text-card-border sm:inline">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
