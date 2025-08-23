import React, { useRef, useState } from "react";
import { SectionHeader } from "../SectionHeader";

export type ComparisonProps = {
  id?: string;
  beforeSrc?: string; // URL of before image
  afterSrc?: string; // URL of after image
  beforeLabel?: string;
  afterLabel?: string;
  initial?: number; // initial percentage 0..100
};

export const ComparingSection: React.FC<ComparisonProps> = ({
  id = "compare",
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  initial = 55,
}) => {
  const [pct, setPct] = useState(Math.min(100, Math.max(0, initial)));
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const onPointerMove = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const ratio = (x / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, ratio)));
  };

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    draggingRef.current = true;
    if ("touches" in e && e.touches[0]) onPointerMove(e.touches[0].clientX);
    if ("clientX" in e) onPointerMove(e.clientX);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
  };
  const onMouseMove = (e: MouseEvent) =>
    draggingRef.current && onPointerMove(e.clientX);
  const onTouchMove = (e: TouchEvent) => {
    if (!draggingRef.current) return;
    if (e.touches[0]) onPointerMove(e.touches[0].clientX);
  };
  const stopDrag = () => {
    draggingRef.current = false;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchend", stopDrag);
  };

  // Accessible range control fallback
  const onRange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPct(Number(e.target.value));

  return (
    <section
      id={id}
      className="relative isolate bg-[#090911] py-16 sm:py-20 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(50rem 25rem at 110% 10%, rgba(124,58,237,0.22), transparent 60%)," +
            "radial-gradient(60rem 30rem at -10% 90%, rgba(59,130,246,0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Comparison"
          title="See the impact before and after AI"
          subtitle="Drag the handle to compare raw vs. enhanced results."
        />

        <div className="mt-10">
          <div
            ref={wrapRef}
            className="relative mx-auto aspect-[16/9] max-w-5xl select-none overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            {/* Before layer */}
            {beforeSrc ? (
              <img
                src={beforeSrc}
                alt={beforeLabel}
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 size-full bg-gradient-to-br from-zinc-900 to-black">
                <div className="absolute inset-0 grid place-items-center text-zinc-400">
                  {beforeLabel}
                </div>
              </div>
            )}

            {/* After layer clipped by pct */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pct}%` }}
            >
              {afterSrc ? (
                <img
                  src={afterSrc}
                  alt={afterLabel}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 size-full bg-gradient-to-br from-indigo-900 to-violet-900">
                  <div className="absolute inset-0 grid place-items-center text-violet-200">
                    {afterLabel}
                  </div>
                </div>
              )}
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10 backdrop-blur">
              {beforeLabel}
            </div>
            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10 backdrop-blur">
              {afterLabel}
            </div>

            {/* Handle */}
            <div
              className="absolute top-0 bottom-0 -ml-3 w-6 cursor-col-resize"
              style={{ left: `${pct}%` }}
              onMouseDown={startDrag}
              onTouchStart={startDrag}
              role="separator"
              aria-orientation="vertical"
              aria-label="Comparison handle"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={pct}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur">
                <div className="h-8 w-0.5 rounded bg-white/70" />
              </div>
            </div>
          </div>

          {/* Range control (accessible) */}
          <div className="mx-auto mt-4 max-w-5xl">
            <input
              type="range"
              min={0}
              max={100}
              value={Math.round(pct)}
              onChange={onRange}
              className="w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/20 [&::-webkit-slider-thumb]:-mt-1.5 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              aria-label="Comparison slider"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// =====================================
// Example composition (optional)
// =====================================
// export default function ComparisonTestimonialsDemo(){
//   return (
//     <>
//       <BeforeAfterSection beforeSrc="/before.jpg" afterSrc="/after.jpg" />
//       <TestimonialsSection />
//     </>
//   );
// }
