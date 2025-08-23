import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { Card } from "../Card";
import { defaultFeatures } from "./MockData";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  pill?: string;
};

export const FeaturesSection: React.FC<{ id?: string; items?: Feature[] }> = ({
  id = "features",
  items = defaultFeatures,
}) => {
  return (
    <section
      id={id}
      className="relative isolate bg-[#0a0a0f] py-16 sm:py-20 text-white"
    >
      {/* background mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at -10% 0%, rgba(124,58,237,0.25), transparent 60%)," +
            "radial-gradient(50rem 25rem at 120% 60%, rgba(99,102,241,0.18), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Futius?"
          title="Everything you need to ship AI features"
          subtitle="Clean building blocks, predictable costs and production‑grade tooling."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 text-violet-300 ring-1 ring-violet-500/30">
                    {f.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight">
                        {f.title}
                      </h3>
                      {f.pill && (
                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] text-emerald-200">
                          {f.pill}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-zinc-300">{f.desc}</p>
                  </div>
                </div>

                {/* bottom accent */}
                <div className="mt-5 h-0.5 w-full bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-50" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
