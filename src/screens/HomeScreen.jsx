import React, { useState } from 'react';
import { CATS, ALL_ACHIEVEMENTS, STORY_LIST } from '../data/index.js';
import ThemeToggle from '../components/ThemeToggle.jsx';
import CatPill from '../components/CatPill.jsx';

export default function HomeScreen({ onPlay, onAchievements, onUpcoming, unlockedCount, light, onToggleLight }) {
  const [hovCat, setHovCat] = useState(null);
  const bg = light ? "bg-stone-50 text-zinc-800" : "bg-zinc-950 text-zinc-100";
  const cardBg = light ? "bg-white border-zinc-200 hover:border-zinc-400" : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-600";
  const catActiveBg = (c) => light ? `${c.bg} ${c.ba} ${c.ta}` : `${c.bg} ${c.ba} ${c.ta}`;
  const catInactiveBg = light ? "border-zinc-200 bg-zinc-50 text-zinc-500 hover:border-zinc-300" : "border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700";
  const mutedText = light ? "text-zinc-400" : "text-zinc-500";
  const filterLabel = light ? "text-zinc-400" : "text-zinc-600";
  const achBtn = light
    ? "bg-white border-zinc-200 text-zinc-500 hover:border-amber-400 hover:text-amber-600"
    : "bg-zinc-900 border-zinc-700/60 text-zinc-400 hover:border-amber-700/60 hover:text-amber-300";

  return (
    <div className={`min-h-screen ${bg}`}>
      <style>{`
        @keyframes slideIn{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}
        @keyframes fadeUp{from{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}
        .fade-up{animation:fadeUp 0.4s ease-out forwards}
      `}</style>

      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex items-start justify-between mb-14 flex-wrap gap-4">
          <div>
            <div className={`text-[10px] uppercase tracking-[0.5em] mb-3 ${filterLabel}`}>Interactive Fiction</div>
            <h1 className="text-7xl md:text-8xl font-black leading-none" style={{fontFamily:"'Georgia',serif", letterSpacing:"-0.03em"}}>
              Story<span className={light ? "text-zinc-300" : "text-zinc-600"}>Forge</span>
            </h1>
            <p className={`mt-4 text-base max-w-xs leading-relaxed ${mutedText}`}>Six worlds. Branching paths. Every decision is permanent.</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <ThemeToggle light={light} onToggle={onToggleLight} />
            <button onClick={onUpcoming} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-sm group ${achBtn}`}>
              <span>🔭</span>
              <span className="font-medium">Upcoming</span>
            </button>
            <button onClick={onAchievements} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all text-sm group ${achBtn}`}>
              <span className="text-base">🏆</span>
              <span className="font-medium">Achievements</span>
              {unlockedCount > 0 && <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">{unlockedCount}</span>}
            </button>
          </div>
        </div>

        <div className={`text-[10px] uppercase tracking-widest mb-3 ${filterLabel}`}>Filter by genre</div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10">
          {Object.values(CATS).map(c => (
            <button key={c.id} onClick={() => setHovCat(hovCat===c.id?null:c.id)}
              className={`p-3 rounded-xl border text-center transition-all text-sm ${hovCat===c.id ? catActiveBg(c) : catInactiveBg}`}>
              <div className="text-xl mb-1">{c.icon}</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider">{c.label}</div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STORY_LIST.filter(s => !hovCat || s.category === hovCat).map((story, i) => {
            const cat = CATS[story.category];
            return (
              <button key={story.id} onClick={() => onPlay(story.id)}
                style={{animationDelay:`${i*60}ms`}}
                className={`fade-up text-left rounded-2xl border overflow-hidden group transition-all duration-300 ${cardBg}`}>
                <div className="h-44 relative overflow-hidden bg-zinc-800">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.style.display="none"; }}
                  />
                  <div className={`absolute inset-0 ${light ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent" : "bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"}`} />
                  <div className="absolute top-3 left-3"><CatPill catId={story.category} small /></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-black text-white leading-tight" style={{fontFamily:"'Georgia',serif"}}>{story.title}</h3>
                    <p className={`text-xs font-semibold ${cat.ta} mt-0.5`}>{story.subtitle}</p>
                  </div>
                </div>
                <div className={`p-4 ${light ? "bg-white" : ""}`}>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${light ? "text-zinc-500" : "text-zinc-500"}`}>{story.synopsis}</p>
                  <div className={`text-xs font-bold ${cat.ta} mt-3 group-hover:translate-x-0.5 transition-transform inline-block`}>Begin →</div>
                </div>
              </button>
            );
          })}
        </div>

        <footer className={`mt-20 pt-8 border-t text-center ${light ? "border-zinc-200" : "border-zinc-800/50"}`}>
          <div className="text-sm font-black mb-1" style={{fontFamily:"'Georgia',serif"}}>
            Story<span className={light ? "text-zinc-300" : "text-zinc-600"}>Forge</span>
          </div>
          <p className={`text-[11px] ${light ? "text-zinc-400" : "text-zinc-700"}`}>Six worlds. Infinite paths. Every choice permanent.</p>
          <div className={`flex items-center justify-center gap-4 mt-4 text-[11px] ${light ? "text-zinc-400" : "text-zinc-700"}`}>
            <span>✦ Handcrafted narrative</span>
            <span>·</span>
            <span>✦ AI-powered storytelling</span>
            <span>·</span>
            <span>✦ {ALL_ACHIEVEMENTS.length} achievements</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
