import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import { Star, StarHalf, Quote, ChevronLeft, ChevronRight } from "lucide-react";
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number; // 0..5, supports halves
  avatarUrl?: string;
  company?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    role: "Head of Ops, Arcturus",
    company: "Arcturus",
    quote:
      "Futius has removed hours of manual work every week. Our ops run smoother and faster.",
    rating: 5,
  },
  {
    name: "Daniel Weber",
    role: "CTO, Northbeam",
    company: "Northbeam",
    quote:
      "We shipped AI features in days instead of weeks. The developer experience is top‑tier.",
    rating: 4.5,
  },
  {
    name: "Aisha Al‑Khaled",
    role: "Product Manager, Qedra",
    company: "Qedra",
    quote:
      "Clear analytics on quality and cost let us iterate with confidence. A game‑changer.",
    rating: 5,
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="size-4 fill-current" />
      ))}
      {half && <StarHalf className="size-4 fill-current" />}
      {Array.from({ length: Math.max(0, 5 - full - (half ? 1 : 0)) }).map(
        (_, i) => (
          <Star key={`e-${i}`} className="size-4 opacity-30" />
        )
      )}
    </div>
  );
}

export const CommentSection: React.FC<{
  id?: string;
  items?: Testimonial[];
}> = ({ id = "Testimonials", items = defaultTestimonials }) => {
  const [index, setIndex] = useState(0);
  const max = items.length;
  const intervalRef = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % max);
  const prev = () => setIndex((i) => (i - 1 + max) % max);

  useEffect(() => {
    if (paused || max <= 1) return;
    intervalRef.current = window.setInterval(next, 4200);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused, max]);

  const goTo = (i: number) => setIndex(i % max);

  return (
    <section
      id={id}
      className="relative isolate bg-[#06060c] py-16 sm:py-20 text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 10% -10%, rgba(139,92,246,0.22), transparent 60%)," +
            "radial-gradient(50rem 25rem at 120% 80%, rgba(59,130,246,0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Loved by product teams and engineers"
          subtitle="Real feedback from early adopters using Futius in production."
        />

        <div
          className="mx-auto mt-10 max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${index * 100}%)`,
                width: `${max * 100}%`,
              }}
            >
              {items.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <Card>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {/* Avatar */}
                      {t.avatarUrl ? (
                        <img
                          src={t.avatarUrl}
                          alt={t.name}
                          className="size-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="size-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600" />
                      )}

                      {/* Quote */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-amber-300">
                          <Quote className="size-4" />
                          <Stars rating={t.rating} />
                        </div>
                        <p className="mt-2 text-base text-zinc-100">
                          {t.quote}
                        </p>
                        <div className="mt-3 text-sm text-zinc-400">
                          <span className="font-medium text-white">
                            {t.name}
                          </span>{" "}
                          — {t.role}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            {max > 1 && (
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1">
                <button
                  onClick={prev}
                  className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/40 p-2 ring-1 ring-white/10 backdrop-blur hover:bg-black/60"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={next}
                  className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-black/40 p-2 ring-1 ring-white/10 backdrop-blur hover:bg-black/60"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}
          </div>

          {/* Dots */}
          {max > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === i ? "w-6 bg-white" : "w-3 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
