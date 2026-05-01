import React from 'react';

export default function StatBar({ label, value, max = 100, color, icon, light }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div>
      <div className="flex justify-between items-center text-xs mb-1">
        <span className={`flex items-center gap-1 ${light ? "text-zinc-500" : "text-zinc-500"}`}>
          {icon && <span>{icon}</span>}{label}
        </span>
        <span className={`font-mono tabular-nums ${light ? "text-zinc-700" : "text-zinc-300"}`}>{value}</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${light ? "bg-zinc-200" : "bg-zinc-800"}`}>
        <div className={`h-full rounded-full transition-all duration-500 ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
