import { IMGS } from './images.js';

export const CATS = {
  dark:      { id:"dark",      label:"Dark",      icon:"☽",  tagline:"Where shadows breathe",          grad:"from-zinc-950 via-neutral-900 to-zinc-950",   ta:"text-red-400",    ba:"border-red-900/50",    bg:"bg-red-950/20",    thumb:IMGS.fog_battlefield },
  romance:   { id:"romance",   label:"Romance",   icon:"♡",  tagline:"Love that costs everything",     grad:"from-rose-950 via-pink-950 to-rose-950",      ta:"text-rose-400",   ba:"border-rose-800/50",   bg:"bg-rose-950/20",   thumb:IMGS.palace_night },
  adventure: { id:"adventure", label:"Adventure", icon:"⚔",  tagline:"Glory or the grave",             grad:"from-amber-950 via-stone-900 to-amber-950",   ta:"text-amber-400",  ba:"border-amber-800/50",  bg:"bg-amber-950/20",  thumb:IMGS.medieval_castle },
  mystery:   { id:"mystery",   label:"Mystery",   icon:"◈",  tagline:"Every truth hides a deeper lie", grad:"from-indigo-950 via-slate-900 to-indigo-950", ta:"text-violet-400", ba:"border-violet-800/50", bg:"bg-violet-950/20", thumb:IMGS.neon_alley },
  horror:    { id:"horror",    label:"Horror",    icon:"⊘",  tagline:"Fear is only the beginning",     grad:"from-green-950 via-zinc-950 to-green-950",    ta:"text-green-400",  ba:"border-green-900/50",  bg:"bg-green-950/20",  thumb:IMGS.haunted_manor },
  epic:      { id:"epic",      label:"Epic",      icon:"✦",  tagline:"Legends are written in blood",   grad:"from-sky-950 via-blue-950 to-sky-950",        ta:"text-sky-400",    ba:"border-sky-800/50",    bg:"bg-sky-950/20",    thumb:IMGS.roman_forum },
};

export const MOOD = {
  heroic:  { border:"border-amber-600/50",  bg:"bg-amber-950/20",  text:"text-amber-200",  lbg:"bg-amber-50",    lborder:"border-amber-300",  ltext:"text-amber-800"  },
  dark:    { border:"border-red-800/50",    bg:"bg-red-950/20",    text:"text-red-200",    lbg:"bg-red-50",      lborder:"border-red-300",    ltext:"text-red-800"    },
  mystic:  { border:"border-violet-700/50", bg:"bg-violet-950/20", text:"text-violet-200", lbg:"bg-violet-50",   lborder:"border-violet-300", ltext:"text-violet-800" },
  neutral: { border:"border-zinc-600/40",   bg:"bg-zinc-800/25",   text:"text-zinc-200",   lbg:"bg-zinc-100",    lborder:"border-zinc-300",   ltext:"text-zinc-700"   },
  stealth: { border:"border-slate-600/40",  bg:"bg-slate-900/25",  text:"text-slate-200",  lbg:"bg-slate-100",   lborder:"border-slate-300",  ltext:"text-slate-700"  },
  danger:  { border:"border-orange-700/50", bg:"bg-orange-950/20", text:"text-orange-200", lbg:"bg-orange-50",   lborder:"border-orange-300", ltext:"text-orange-800" },
  romance: { border:"border-rose-700/50",   bg:"bg-rose-950/20",   text:"text-rose-200",   lbg:"bg-rose-50",     lborder:"border-rose-300",   ltext:"text-rose-800"   },
};

export const ATM_BG = {
  foggy:    "from-zinc-900 via-slate-800 to-zinc-950",
  dark:     "from-zinc-950 via-neutral-900 to-zinc-950",
  fire:     "from-red-950 via-orange-950 to-zinc-950",
  mystical: "from-violet-950 via-indigo-950 to-zinc-950",
  combat:   "from-red-950 via-zinc-900 to-zinc-950",
  victory:  "from-amber-950 via-stone-900 to-zinc-950",
  cosmic:   "from-indigo-950 via-violet-950 to-zinc-950",
  tense:    "from-zinc-900 via-slate-900 to-zinc-950",
  neutral:  "from-zinc-900 via-stone-900 to-zinc-950",
  rain:     "from-slate-950 via-zinc-900 to-slate-950",
  horror:   "from-green-950 via-zinc-950 to-green-950",
  roman:    "from-stone-900 via-amber-950 to-stone-950",
  japan:    "from-rose-950 via-zinc-900 to-rose-950",
};

export const ATM_BG_LIGHT = {
  foggy:    "from-slate-100 via-gray-50 to-slate-100",
  dark:     "from-zinc-100 via-neutral-50 to-zinc-100",
  fire:     "from-red-50 via-orange-50 to-amber-50",
  mystical: "from-violet-50 via-indigo-50 to-purple-50",
  combat:   "from-red-50 via-zinc-50 to-red-50",
  victory:  "from-amber-50 via-stone-50 to-amber-50",
  cosmic:   "from-indigo-50 via-violet-50 to-indigo-50",
  tense:    "from-slate-100 via-zinc-50 to-slate-100",
  neutral:  "from-zinc-50 via-stone-50 to-zinc-50",
  rain:     "from-slate-100 via-blue-50 to-slate-100",
  horror:   "from-green-50 via-zinc-50 to-green-50",
  roman:    "from-stone-50 via-amber-50 to-stone-50",
  japan:    "from-rose-50 via-zinc-50 to-rose-50",
};