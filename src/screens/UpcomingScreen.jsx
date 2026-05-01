import React from 'react';

export default function UpcomingScreen({ onBack, light }) {
  const bg = light ? "bg-stone-50 text-zinc-800" : "bg-zinc-950 text-zinc-100";
  const cardBg = light ? "bg-white border-zinc-200" : "bg-zinc-900/60 border-zinc-800";
  const cardHov = light ? "hover:border-zinc-400" : "hover:border-zinc-600";
  const mutedText = light ? "text-zinc-500" : "text-zinc-500";
  const labelText = light ? "text-zinc-400" : "text-zinc-600";

  const upcoming = [
    {
      icon:"✦", tag:"AI Integration", color:"text-violet-400",
      tagBg: light ? "bg-violet-50 border-violet-200 text-violet-600" : "bg-violet-950/40 border-violet-800/40 text-violet-400",
      title:"Infinite Story Mode",
      desc:"Every choice triggers a live Claude generation — the story continues forever, adapting to your exact playstyle. No two playthroughs are ever the same.",
      eta:"In Development",
    },
    {
      icon:"🎙️", tag:"AI Voice", color:"text-sky-400",
      tagBg: light ? "bg-sky-50 border-sky-200 text-sky-600" : "bg-sky-950/40 border-sky-800/40 text-sky-400",
      title:"Narrator Voice",
      desc:"AI-generated voice narration reads each scene aloud in a style matched to the story's genre. Toggle it on mid-read.",
      eta:"Planned",
    },
    {
      icon:"🧠", tag:"AI Companion", color:"text-emerald-400",
      tagBg: light ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-emerald-950/40 border-emerald-800/40 text-emerald-400",
      title:"Story Advisor",
      desc:"Before each choice, ask your AI advisor how this decision might ripple through your character stats, relationships, and story arc.",
      eta:"Planned",
    },
    {
      icon:"🖊️", tag:"Create", color:"text-amber-400",
      tagBg: light ? "bg-amber-50 border-amber-200 text-amber-600" : "bg-amber-950/40 border-amber-800/40 text-amber-400",
      title:"Community Story Builder",
      desc:"Write and publish your own branching story using our visual node editor. Set stats, moods, images and endings. Share it with a link.",
      eta:"Coming Soon",
    },
    {
      icon:"👤", tag:"Profiles", color:"text-rose-400",
      tagBg: light ? "bg-rose-50 border-rose-200 text-rose-600" : "bg-rose-950/40 border-rose-800/40 text-rose-400",
      title:"Character Profiles & Journals",
      desc:"Every playthrough auto-generates a character journal — key decisions, stat evolution, and a narrative recap of your path.",
      eta:"Planned",
    },
    {
      icon:"🌐", tag:"Multiplayer", color:"text-cyan-400",
      tagBg: light ? "bg-cyan-50 border-cyan-200 text-cyan-600" : "bg-cyan-950/40 border-cyan-800/40 text-cyan-400",
      title:"Co-op Story Mode",
      desc:"Play a story with a friend, each controlling different characters whose choices affect each other.",
      eta:"Exploring",
    },
    {
      icon:"🗺️", tag:"World", color:"text-teal-400",
      tagBg: light ? "bg-teal-50 border-teal-200 text-teal-600" : "bg-teal-950/40 border-teal-800/40 text-teal-400",
      title:"Interactive Story Map",
      desc:"See every decision tree visualized as a beautiful branching map. Explore paths you haven't taken.",
      eta:"Planned",
    },
    {
      icon:"🎨", tag:"AI Art", color:"text-pink-400",
      tagBg: light ? "bg-pink-50 border-pink-200 text-pink-600" : "bg-pink-950/40 border-pink-800/40 text-pink-400",
      title:"AI Scene Illustrations",
      desc:"Each chapter node gets a custom AI illustration generated on-the-fly, matched to the exact mood, setting, and events of that scene.",
      eta:"Exploring",
    },
  ];

  const etaColor = (eta) => {
    if (eta === "In Development") return light ? "text-emerald-600 bg-emerald-50 border-emerald-200" : "text-emerald-400 bg-emerald-950/30 border-emerald-800/40";
    if (eta === "Coming Soon") return light ? "text-amber-600 bg-amber-50 border-amber-200" : "text-amber-400 bg-amber-950/30 border-amber-800/40";
    if (eta === "Planned") return light ? "text-blue-600 bg-blue-50 border-blue-200" : "text-blue-400 bg-blue-950/30 border-blue-800/40";
    return light ? "text-zinc-500 bg-zinc-100 border-zinc-200" : "text-zinc-500 bg-zinc-900 border-zinc-700";
  };

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="max-w-4xl mx-auto px-5 py-10">
        <div className="flex items-center justify-between mb-12">
          <button onClick={onBack} className={`flex items-center gap-2 text-sm transition-colors group ${light ? "text-zinc-400 hover:text-zinc-700" : "text-zinc-500 hover:text-zinc-200"}`}>
            <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back
          </button>
        </div>

        <div className="mb-10">
          <div className={`text-[10px] uppercase tracking-[0.5em] mb-3 ${labelText}`}>What's Next</div>
          <h1 className="text-5xl font-black leading-none mb-4" style={{fontFamily:"'Georgia',serif"}}>
            Upcoming<span className={light ? "text-zinc-300" : "text-zinc-600"}>Features</span>
          </h1>
          <p className={`text-base max-w-lg leading-relaxed ${mutedText}`}>
            StoryForge is a living project. Here's what's being built, explored, and dreamed about — roughly in order of priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcoming.map((f, i) => (
            <div key={i} className={`rounded-2xl border p-5 transition-all duration-300 ${cardBg} ${cardHov}`}>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{f.icon}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${f.tagBg}`}>{f.tag}</span>
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border flex-shrink-0 ${etaColor(f.eta)}`}>{f.eta}</span>
              </div>
              <h3 className="font-black text-base mb-2" style={{fontFamily:"'Georgia',serif"}}>{f.title}</h3>
              <p className={`text-xs leading-relaxed ${mutedText}`}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 rounded-2xl border text-center ${light ? "bg-zinc-50 border-zinc-200" : "bg-zinc-900/40 border-zinc-800"}`}>
          <div className="text-2xl mb-2">💬</div>
          <h3 className="font-bold text-base mb-1" style={{fontFamily:"'Georgia',serif"}}>Have an idea?</h3>
          <p className={`text-sm ${mutedText}`}>This roadmap is shaped by players. The best feature suggestions have already made it into earlier versions of this list.</p>
        </div>
      </div>
    </div>
  );
}