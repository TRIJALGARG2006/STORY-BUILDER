import React from 'react';
import { ALL_ACHIEVEMENTS } from '../data/index.js';

export default function AchievementsScreen({ unlocked, totalChoices, onBack, light }) {
  const pct = Math.round((unlocked.length / ALL_ACHIEVEMENTS.length) * 100);
  const catGroups = [
    { key:null,       label:"General",           icon:"🌐", color:"text-zinc-400"   },
    { key:"dark",     label:"The White Wolf",    icon:"☽",  color:"text-red-400"   },
    { key:"adventure",label:"Dust & Crown",      icon:"⚔",  color:"text-amber-400" },
    { key:"romance",  label:"Crimson Court",     icon:"♡",  color:"text-rose-400"  },
    { key:"mystery",  label:"The Shibuya Files", icon:"◈",  color:"text-violet-400"},
    { key:"horror",   label:"Ashwood Manor",     icon:"⊘",  color:"text-green-400" },
    { key:"epic",     label:"Blood & Senate",    icon:"✦",  color:"text-sky-400"   },
  ];
  const bg = light ? "bg-stone-50 text-zinc-800" : "bg-zinc-950 text-zinc-100";
  const cardEarned = light ? "border-amber-400/60 bg-amber-50" : "border-amber-700/40 bg-amber-950/15";
  const cardLocked = light ? "border-zinc-200 bg-white/60 opacity-50" : "border-zinc-800/60 bg-zinc-900/40 opacity-50";

  return (
    <div className={`min-h-screen ${bg}`}>
      <style>{`@keyframes slideIn{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}`}</style>
      <div className="max-w-2xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-10">
          <button onClick={onBack} className={`flex items-center gap-2 text-sm transition-colors group ${light ? "text-zinc-400 hover:text-zinc-700" : "text-zinc-500 hover:text-zinc-200"}`}>
            <span className="group-hover:-translate-x-1 transition-transform inline-block text-base">←</span> Back
          </button>
        </div>

        <div className="mb-10">
          <h1 className="text-5xl font-black mb-1 leading-none" style={{fontFamily:"'Georgia',serif"}}>Achievements</h1>
          <p className={`text-sm mb-6 ${light ? "text-zinc-400" : "text-zinc-600"}`}>{totalChoices} total choices made across all stories</p>
          <div className="flex items-center gap-4">
            <div className={`flex-1 h-3 rounded-full overflow-hidden ${light ? "bg-zinc-200" : "bg-zinc-800"}`}>
              <div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-1000" style={{width:`${pct}%`}} />
            </div>
            <span className="text-sm font-mono font-bold text-amber-500 flex-shrink-0">{unlocked.length} / {ALL_ACHIEVEMENTS.length}</span>
          </div>
          <div className={`text-xs mt-2 ${light ? "text-zinc-400" : "text-zinc-600"}`}>{pct}% complete</div>
        </div>

        <div className="space-y-8">
          {catGroups.map(grp => {
            const items = ALL_ACHIEVEMENTS.filter(a => a.cat === grp.key);
            if (!items.length) return null;
            const groupUnlocked = items.filter(a => unlocked.includes(a.id)).length;
            return (
              <div key={grp.key || "global"}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{grp.icon}</span>
                    <h2 className={`text-xs font-bold uppercase tracking-widest ${grp.color}`}>{grp.label}</h2>
                  </div>
                  <span className={`text-xs font-mono ${light ? "text-zinc-400" : "text-zinc-600"}`}>{groupUnlocked}/{items.length}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {items.map(a => {
                    const earned = unlocked.includes(a.id);
                    return (
                      <div key={a.id} className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${earned ? cardEarned : cardLocked}`}>
                        <span className={`text-xl flex-shrink-0 mt-0.5 ${!earned && "grayscale opacity-50"}`}>{a.icon}</span>
                        <div className="min-w-0">
                          <div className={`font-bold text-sm leading-snug ${earned ? (light ? "text-zinc-800" : "text-zinc-50") : (light ? "text-zinc-400" : "text-zinc-500")}`}>{a.title}</div>
                          <div className={`text-xs mt-0.5 leading-relaxed ${light ? "text-zinc-500" : "text-zinc-600"}`}>{a.desc}</div>
                          {earned && <div className="text-[10px] text-amber-500 mt-1.5 font-bold uppercase tracking-wider">✓ Earned</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}