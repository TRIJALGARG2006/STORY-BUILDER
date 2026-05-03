import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CATS, MOOD, ATM_BG, ATM_BG_LIGHT, ALL_ACHIEVEMENTS, STORIES } from '../data/index.js';
import { loadPersist, savePersist } from '../utils/persist.js';
import CatPill from '../components/CatPill.jsx';
import AchievementToast from '../components/AchievementToast.jsx';
import StatBar from '../components/StatBar.jsx';

export default function GameScreen({ storyId, onBack, onUnlock, light }) {
  const story = STORIES[storyId];
  const cat = CATS[story.category];
  const [nodeId, setNodeId]     = useState(story.start);
  const [player, setPlayer]     = useState({...story.player});
  const [history, setHistory]   = useState([]);
  const [transitioning, setTransitioning] = useState(false);
  const [displayText, setDisplayText]     = useState("");
  const [typing, setTyping]               = useState(false);
  const [aiMode, setAiMode]               = useState(false);
  const [aiLoading, setAiLoading]         = useState(false);
  const [aiNode, setAiNode]               = useState(null);
  const [toast, setToast]                 = useState(null);
  const [confirmReset, setConfirmReset]   = useState(false);
  const [weather] = useState(() => {
    const w = [{l:"Stormy",e:"⛈"},{l:"Clear",e:"☀️"},{l:"Foggy",e:"🌫️"},{l:"Rain",e:"🌧️"},{l:"Snow",e:"❄️"},{l:"Overcast",e:"☁️"}];
    return w[Math.floor(Math.random()*w.length)];
  });
  const typRef = useRef(null);
  const node = aiNode || story.nodes[nodeId];

  const atmBg = light
    ? (ATM_BG_LIGHT[node?.atm] || ATM_BG_LIGHT.neutral)
    : (ATM_BG[node?.atm] || ATM_BG.neutral);
  const pageBg = light ? `min-h-screen bg-gradient-to-b ${atmBg} text-zinc-800 flex flex-col` : `min-h-screen bg-gradient-to-b ${atmBg} text-zinc-100 flex flex-col`;
  const sidebarBg = light ? "bg-white/80 backdrop-blur-sm border-r border-zinc-200/60" : "border-r border-zinc-800/40";
  const headerBg = light ? "bg-white/90 backdrop-blur-md border-b border-zinc-200" : "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/50";
  const histBtnHov = light ? "hover:bg-zinc-100" : "hover:bg-zinc-800/60";
  const histTitle = light ? "text-zinc-500 group-hover:text-zinc-700" : "text-zinc-500 group-hover:text-zinc-300";
  const histSub = light ? "text-zinc-400" : "text-zinc-700";
  const storyText = light ? "text-zinc-700" : "text-zinc-300";
  const titleColor = light ? "text-zinc-900" : "text-zinc-50";
  const modalBg = light ? "bg-white border-zinc-300" : "bg-zinc-900 border-zinc-700";
  const bottomBarBg = light ? "bg-white/90 backdrop-blur-md border-t border-zinc-200" : "bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800/50";
  const statChipBg = light ? "bg-zinc-50 border border-zinc-200" : "bg-zinc-900 border border-zinc-800";

  useEffect(() => {
    if (!node?.text) return;
    clearInterval(typRef.current);
    setDisplayText("");
    setTyping(true);
    let i = 0;
    const t = node.text;
    typRef.current = setInterval(() => {
      i += 3;
      setDisplayText(t.slice(0, i));
      if (i >= t.length) { clearInterval(typRef.current); setTyping(false); setDisplayText(t); }
    }, 18);
    return () => clearInterval(typRef.current);
  }, [nodeId, aiNode]);

  const skipTyping = () => {
    clearInterval(typRef.current);
    setTyping(false);
    if (node?.text) setDisplayText(node.text);
  };

  const handleChoice = useCallback(async (choice) => {
    if (transitioning || aiLoading) return;
    const cons = choice.cons || {};
    const newPlayer = {
      ...player,
      honor:    Math.min(100, Math.max(0, player.honor    + (cons.honor    || 0))),
      survival: Math.min(100, Math.max(0, player.survival + (cons.survival || 0))),
      magic:    Math.min(100, Math.max(0, player.magic    + (cons.magic    || 0))),
      gold:     Math.max(0, player.gold + (cons.gold || 0)),
    };
    setPlayer(newPlayer);
    setHistory(h => [{ nodeId, nodeTitle: node.title, choiceText: choice.text, snap: {...player} }, ...h]);

    const toUnlock = [...(choice.ach || [])];
    const prevTotal = loadPersist("sf_totalChoices", 0);
    const newTotal = prevTotal + 1;
    savePersist("sf_totalChoices", newTotal);
    if (newTotal === 1) toUnlock.push("first_blood");
    if (newTotal >= 10) toUnlock.push("ten_choices");
    if (newPlayer.honor >= 100) toUnlock.push("honor_100");

    if (toUnlock.length) {
      onUnlock(toUnlock);
      const first = ALL_ACHIEVEMENTS.find(a => toUnlock.includes(a.id));
      if (first) setToast(first.title);
    }

    const nextNodeId = choice.next;
    const nextNode = story.nodes[nextNodeId];
    if (nextNode?.isEnding) {
      const done = loadPersist("sf_done", []);
      if (!done.includes(storyId)) {
        const newDone = [...done, storyId];
        savePersist("sf_done", newDone);
        if (newDone.length >= 6) { onUnlock(["completionist"]); setToast("Completionist"); }
      }
    }

    if (aiMode) {
      setAiLoading(true);
      try {
        const res = await fetch("https://api.anthropic.com/v1/messages", {
          method:"POST", headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
            model:"claude-sonnet-4-20250514", max_tokens:900,
            system:`You are a literary fiction writer continuing "${story.title}" (${story.category} genre, set in ${node.location}). Write exactly 2 rich, atmospheric paragraphs continuing directly from what just happened. Then on a new line write CHOICES:[{"id":"a","text":"under 8 words","icon":"single emoji","mood":"heroic|dark|mystic|neutral|stealth|danger|romance"},{"id":"b",...},{"id":"c",...}]`,
            messages:[{role:"user",content:`Location: ${node.location}. Scene: "${node.title}".\n\nWhat happened: ${node.text}\n\nPlayer chose: "${choice.text}"\n\nContinue.`}],
          }),
        });
        const data = await res.json();
        const full = (data.content||[]).map(b=>b.text||"").join("");
        const m = full.match(/CHOICES:(\[[\s\S]*?\])/);
        let choices = [];
        if (m) { try { choices = JSON.parse(m[1]); } catch(e) {  } }
        const prose = full.replace(/CHOICES:[\s\S]*$/,"").trim();
        const newAiNode = {
          id:`ai_${Date.now()}`, title:"The Story Continues",
          location: node.location, time: node.time,
          image: node.image, atm: node.atm,
          text: prose || "The story continues...",
          choices: choices.length
            ? choices.map(c=>({...c, next:story.start, cons:{}, ach:[]}))
            : [{id:"cont", text:"Continue forward", icon:"→", next:story.start, cons:{}, mood:"neutral", ach:[]}],
        };
        setAiNode(newAiNode);
        setNodeId(newAiNode.id);
      } catch(e) { setNodeId(nextNodeId); setAiNode(null); }
      setAiLoading(false);
      return;
    }

    setTransitioning(true);
    setAiNode(null);
    setTimeout(() => { setNodeId(nextNodeId); setTransitioning(false); }, 450);
  }, [transitioning, aiLoading, nodeId, node, player, aiMode, story, storyId, onUnlock]);

  const jumpBack = (idx) => {
    const h = history[idx];
    setHistory(prev => prev.slice(idx+1));
    setPlayer({...h.snap});
    setAiNode(null);
    setNodeId(h.nodeId);
  };

  const doReset = () => {
    setNodeId(story.start); setPlayer({...story.player});
    setHistory([]); setAiNode(null); setConfirmReset(false);
  };

  if (!node) return null;

  return (
    <div className={pageBg}>
      <style>{`
        @keyframes slideIn{from{transform:translateX(60px);opacity:0}to{transform:translateX(0);opacity:1}}
        @keyframes fadeUp{from{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}
        .fade-up{animation:fadeUp 0.4s ease-out forwards}
        .cursor-type::after{content:'▌';animation:blink 0.85s step-end infinite;margin-left:1px;color:#a1a1aa}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        .choice-btn:hover{transform:translateX(3px)}
      `}</style>

      {toast && <AchievementToast title={toast} onDone={() => setToast(null)} />}

      {confirmReset && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className={`rounded-2xl p-6 max-w-xs w-full shadow-2xl border ${modalBg}`}>
            <h3 className="font-bold mb-1">Restart this story?</h3>
            <p className={`text-sm mb-5 ${light ? "text-zinc-500" : "text-zinc-500"}`}>All progress in this story will be reset.</p>
            <div className="flex gap-2">
              <button onClick={doReset} className="flex-1 py-2 bg-red-900/50 border border-red-800 text-red-300 rounded-xl text-sm font-semibold hover:bg-red-900 transition-colors">Restart</button>
              <button onClick={() => setConfirmReset(false)} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors ${light ? "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:bg-zinc-200" : "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700"}`}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <header className={`sticky top-0 z-30 px-4 py-3 flex items-center gap-3 ${headerBg}`}>
        <button onClick={onBack} className={`text-xl px-1 leading-none transition-colors ${light ? "text-zinc-400 hover:text-zinc-700" : "text-zinc-500 hover:text-zinc-200"}`}>←</button>
        <div className="flex-1 min-w-0">
          <div className={`text-[10px] uppercase tracking-widest truncate ${light ? "text-zinc-400" : "text-zinc-600"}`}>{story.title}</div>
          <div className={`text-sm font-bold truncate ${light ? "text-zinc-800" : "text-zinc-100"}`}>{node.title}</div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`hidden sm:block text-xs px-2.5 py-1 rounded-lg border ${light ? "text-zinc-500 bg-zinc-100 border-zinc-200" : "text-zinc-600 bg-zinc-900 border-zinc-800"}`}>{weather.e} {weather.l}</span>
          <button onClick={() => setAiMode(a=>!a)} className={`text-[11px] px-2.5 py-1.5 rounded-lg border font-bold transition-all ${aiMode ? "bg-violet-900/60 border-violet-600/50 text-violet-300" : light ? "bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-zinc-700" : "bg-zinc-900 border-zinc-700 text-zinc-500 hover:text-zinc-300"}`}>✦ AI</button>
          <button onClick={() => setConfirmReset(true)} className={`text-[11px] px-2.5 py-1.5 rounded-lg border transition-colors ${light ? "bg-zinc-100 border-zinc-200 text-zinc-400 hover:border-red-300 hover:text-red-500" : "bg-zinc-900 border-zinc-800 text-zinc-600 hover:border-red-900 hover:text-red-400"}`}>↺</button>
        </div>
      </header>

      <div className="flex flex-1 max-w-5xl mx-auto w-full">
        <aside className={`hidden lg:flex flex-col w-52 flex-shrink-0 p-4 gap-4 sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto ${sidebarBg}`}>
          <div className="space-y-3.5">
            <div className={`flex items-center gap-2 pb-3 border-b ${light ? "border-zinc-200" : "border-zinc-800"}`}>
              <div className={`w-8 h-8 rounded-full border ${cat.ba} ${cat.bg} flex items-center justify-center text-base flex-shrink-0`}>{cat.icon}</div>
              <div>
                <div className={`text-xs font-bold ${light ? "text-zinc-700" : "text-zinc-200"}`}>{player.name}</div>
                <div className={`text-[10px] ${light ? "text-zinc-400" : "text-zinc-600"}`}>{history.length} choices</div>
              </div>
            </div>
            <StatBar label="Honor"    value={player.honor}    color="bg-amber-500"  icon="🏅" light={light} />
            <StatBar label="Survival" value={player.survival} color="bg-green-600"  icon="💚" light={light} />
            <StatBar label="Magic"    value={player.magic}    color="bg-violet-500" icon="✨" light={light} />
            <div className="flex items-center justify-between pt-1">
              <span className={`text-[10px] uppercase tracking-wider ${light ? "text-zinc-400" : "text-zinc-600"}`}>Gold</span>
              <span className="text-amber-500 font-mono font-bold text-sm">{player.gold}⬡</span>
            </div>
            {player.inventory?.length > 0 && (
              <div>
                <div className={`text-[10px] uppercase tracking-wider mb-1.5 ${light ? "text-zinc-400" : "text-zinc-600"}`}>Items</div>
                <div className="flex flex-wrap gap-1">
                  {player.inventory.map((item,i) => (
                    <span key={i} className={`text-[10px] px-1.5 py-0.5 rounded border ${light ? "bg-zinc-100 text-zinc-500 border-zinc-200" : "bg-zinc-800 text-zinc-400 border-zinc-700/60"}`}>{item}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
          {history.length > 0 && (
            <div className={`pt-3 border-t ${light ? "border-zinc-200" : "border-zinc-800"}`}>
              <div className={`text-[10px] uppercase tracking-wider mb-2 ${light ? "text-zinc-400" : "text-zinc-600"}`}>Path</div>
              <div className="space-y-0.5 max-h-56 overflow-y-auto">
                {history.slice(0,15).map((h,i) => (
                  <button key={i} onClick={() => jumpBack(i)} className={`w-full text-left px-2 py-1.5 rounded group transition-colors ${histBtnHov}`}>
                    <div className={`text-[10px] transition-colors truncate ${histTitle}`}>{h.nodeTitle}</div>
                    {h.choiceText && <div className={`text-[9px] truncate mt-0.5 ${histSub}`}>↳ {h.choiceText}</div>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>

        <main className="flex-1 flex flex-col min-w-0">
          <div className={`relative h-52 sm:h-64 overflow-hidden transition-opacity duration-400 ${transitioning?"opacity-0":"opacity-100"} bg-zinc-800`}>
            <img src={node.image} alt={node.title} className="w-full h-full object-cover" onError={e => { e.target.style.display="none"; }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/60" />
            <div className="absolute bottom-4 left-5 right-5 flex items-center gap-2 flex-wrap">
              <CatPill catId={story.category} small />
              <span className="text-xs text-zinc-300">{node.location}</span>
              <span className="text-zinc-500">·</span>
              <span className="text-xs text-zinc-400">{node.time}</span>
            </div>
            {node.isEnding && <div className="absolute top-4 right-4 px-3 py-1 bg-amber-950/90 border border-amber-700/60 text-amber-300 text-[10px] font-black rounded-lg uppercase tracking-widest backdrop-blur-sm">Story Complete ✦</div>}
            {node.isClimax && !node.isEnding && <div className="absolute top-4 right-4 px-3 py-1 bg-red-950/90 border border-red-700/60 text-red-300 text-[10px] font-black rounded-lg uppercase tracking-widest backdrop-blur-sm animate-pulse">Final Choice</div>}
          </div>

          <div className={`flex-1 px-5 sm:px-8 py-6 space-y-5 transition-opacity duration-400 ${transitioning?"opacity-0":"opacity-100"}`}>
            <h2 className={`text-2xl sm:text-3xl font-black leading-tight ${titleColor}`} style={{fontFamily:"'Georgia',serif"}}>{node.title}</h2>
            <div
              className={`leading-relaxed text-sm sm:text-[15px] cursor-pointer whitespace-pre-line ${typing?"cursor-type":""} ${storyText}`}
              onClick={skipTyping}
              style={{minHeight:"8em"}}
            >
              {displayText}
            </div>
            {typing && <div className={`text-[10px] ${light ? "text-zinc-400" : "text-zinc-700"}`}>tap to skip</div>}

            {aiMode && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-950/30 border border-violet-800/30 text-xs text-violet-400">
                <span>✦</span><span>AI Mode on — Ai continues your story after each choice</span>
              </div>
            )}

            {!typing && !transitioning && !aiLoading && (
              <div className="space-y-2.5 pb-8 fade-up">
                {node.isEnding && (
                  <div className={`mb-4 p-4 rounded-xl border ${cat.ba} ${cat.bg} text-center`}>
                    <div className="text-2xl mb-1">✦</div>
                    <div className={`text-xs font-black uppercase tracking-[0.2em] ${cat.ta}`}>{node.endingLabel || "Ending"}</div>
                  </div>
                )}
                {(node.choices||[]).map((ch,i) => {
                  const ms = MOOD[ch.mood] || MOOD.neutral;
                  const btnClass = light ? `${ms.lborder} ${ms.lbg} border` : `${ms.border} ${ms.bg} border`;
                  const txtClass = light ? ms.ltext : ms.text;
                  return (
                    <button key={ch.id} onClick={() => handleChoice(ch)}
                      style={{animationDelay:`${i*60}ms`}}
                      className={`choice-btn fade-up w-full text-left p-4 rounded-xl transition-all duration-200 ${btnClass}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-base flex-shrink-0 mt-0.5">{ch.icon}</span>
                        <span className={`text-sm font-medium leading-snug ${txtClass}`}>{ch.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {aiLoading && (
              <div className="flex items-center gap-3 py-12 text-zinc-500">
                <div className="w-5 h-5 border-2 border-violet-800/30 border-t-violet-400 rounded-full animate-spin flex-shrink-0" />
                <span className="text-sm">Writing your story…</span>
              </div>
            )}
          </div>
        </main>
      </div>

      <div className={`lg:hidden sticky bottom-0 px-4 py-2.5 ${bottomBarBg}`}>
        <div className="flex gap-2 overflow-x-auto">
          {[
            {l:"Honor",    v:player.honor,    c:"text-amber-500"},
            {l:"Survival", v:player.survival, c:"text-green-500"},
            {l:"Magic",    v:player.magic,    c:"text-violet-400"},
            {l:"Gold",     v:`${player.gold}⬡`,c:"text-amber-400"},
          ].map(s => (
            <div key={s.l} className={`flex-shrink-0 flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg ${statChipBg}`}>
              <span className={light ? "text-zinc-400" : "text-zinc-600"}>{s.l}</span>
              <span className={`font-mono font-bold ${s.c}`}>{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}