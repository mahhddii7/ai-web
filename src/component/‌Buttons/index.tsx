import { ArrowRight } from "lucide-react";

export const GhostButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className = "", children, ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-zinc-200 border border-white/10 hover:bg-white/5 transition ${className}`}
  >
    {children}
  </button>
);

export const PrimaryButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className = "", children, ...props }) => (
  <button
    {...props}
    className={`group inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-900/30 hover:shadow-violet-800/40 active:scale-[0.99] transition ${className}`}
  >
    {children}
    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
  </button>
);

export const LogoMark: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="size-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_50px_-10px_rgba(139,92,246,0.8)]" />
    <span className="text-base font-semibold tracking-tight">Futius AI</span>
  </div>
);

export const NavLink: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="text-sm/6 text-zinc-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);
