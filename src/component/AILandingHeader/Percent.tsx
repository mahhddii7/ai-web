function Percent() {
  return (
    <div className="mt-6 flex items-center gap-6 text-xs text-zinc-400">
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-emerald-400" />
        99.9% Uptime
      </div>
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-blue-400" />
        GDPR Ready
      </div>
      <div className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-violet-400" />
        API First
      </div>
    </div>
  );
}

export default Percent;
