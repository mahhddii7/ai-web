export const Card: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ className = "", children }) => (
  <div
    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-violet-400/30 hover:bg-white/[0.08] ${className}`}
  >
    <div
      className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition duration-300 group-hover:opacity-40"
      style={{
        background:
          "radial-gradient(24rem 12rem at 20% -10%, rgba(139,92,246,0.35), transparent 60%)," +
          "radial-gradient(16rem 8rem at 110% 110%, rgba(79,70,229,0.35), transparent 60%)",
      }}
    />
    {children}
  </div>
);
