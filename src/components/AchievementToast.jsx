import React, { useEffect } from 'react';

export default function AchievementToast({ title, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{ animation: "slideIn 0.4s ease-out" }}
      className="fixed top-5 right-5 z-[9999] flex items-center gap-3 bg-zinc-900 border border-amber-600/60 px-5 py-3.5 rounded-2xl shadow-2xl shadow-black/60"
    >
      <span className="text-2xl">🏆</span>
      <div>
        <div className="text-[10px] text-amber-400 uppercase tracking-[0.2em] font-bold mb-0.5">Achievement Unlocked</div>
        <div className="text-sm font-bold text-amber-100">{title}</div>
      </div>
    </div>
  );
}