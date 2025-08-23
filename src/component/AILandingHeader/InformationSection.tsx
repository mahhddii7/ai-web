import { motion } from "framer-motion";
import { Sparkles, LogIn } from "lucide-react";
import { GhostButton, PrimaryButton } from "../‌Buttons";
import Percent from "./Percent";

function InformationSection({ typed }: { typed: string }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
      >
        <Sparkles className="size-3.5" />
        Introducing Futius — AI Productivity
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Supercharge your workflow
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
          with AI
        </span>
      </motion.h1>
      <p className="mt-4 max-w-xl text-zinc-300">
        {typed}
        <span className="ml-1 inline-block h-5 w-0.5 translate-y-1 align-middle bg-zinc-300 animate-pulse" />
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <PrimaryButton>Try for free</PrimaryButton>
        <GhostButton>
          <LogIn className="size-4" />
          Sign in
        </GhostButton>
      </div>

      <Percent />
    </div>
  );
}

export default InformationSection;
