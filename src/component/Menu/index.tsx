import { useState } from "react";
import { GhostButton, LogoMark, NavLink, PrimaryButton } from "../‌Buttons";
import { Github, LogIn, Menu, X } from "lucide-react";

function MenuBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <LogoMark />
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#Comparison">Comparison</NavLink>
          <NavLink href="#Testimonials">Testimonials</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <GhostButton>
            <Github className="size-4" />
            GitHub
          </GhostButton>
          <PrimaryButton>Try for free</PrimaryButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-zinc-300 hover:bg-white/5"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
            <a
              className="block rounded-xl px-3 py-2 text-sm hover:bg-white/5"
              href="#features"
            >
              Features
            </a>
            <a
              className="block rounded-xl px-3 py-2 text-sm hover:bg-white/5"
              href="#how"
            >
              How it works
            </a>
            <a
              className="block rounded-xl px-3 py-2 text-sm hover:bg-white/5"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="block rounded-xl px-3 py-2 text-sm hover:bg-white/5"
              href="#faq"
            >
              FAQ
            </a>
            <div className="flex gap-2 pt-2">
              <GhostButton className="flex-1">
                <LogIn className="size-4" />
                Sign in
              </GhostButton>
              <PrimaryButton className="flex-1">Get started</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MenuBar;
