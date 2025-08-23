import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import { defaultSteps } from "./MockData";

export type Step = {
  id: number;
  title: string;
  desc: string;
};
export const HowItWorksSection: React.FC<{ id?: string; steps?: Step[] }> = ({
  id = "how",
  steps = defaultSteps,
}) => {
  return (
    <section
      id={id}
      className="relative isolate bg-[#06060a] py-16 sm:py-20 text-white"
    >
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From raw data to production in 3 steps"
          subtitle="Connect sources, compose flows, then deploy a secure API."
        />
        <div className="mt-12 hidden md:grid grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              {/* connector */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-[-30px] top-12 hidden h-1 w-24 md:block"
                >
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500/60 to-indigo-500/60" />
                </div>
              )}

              <Card className="h-full p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-semibold">
                    {s.id}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="mt-8 space-y-4 md:hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <Card className="p-5">
                <div className="flex items-start gap-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-sm font-semibold">
                    {s.id}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-300">{s.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
