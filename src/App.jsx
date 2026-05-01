import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import GameScreen from './screens/GameScreen.jsx';
import AchievementsScreen from './screens/AchievementsScreen.jsx';
import UpcomingScreen from './screens/UpcomingScreen.jsx';
import { loadPersist, savePersist } from './utils/persist.js';

function AppContent() {
  const navigate = useNavigate();
  const [light, setLight] = useState(() => loadPersist("sf_light", false));
  const [unlocked, setUnlocked] = useState(() => loadPersist("sf_achievements", []));

  useEffect(() => {
    if (light) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [light]);

  const handleUnlock = useCallback((ids) => {
    setUnlocked(prev => {
      const next = [...new Set([...prev, ...ids])];
      if (next.length !== prev.length) { savePersist("sf_achievements", next); return next; }
      return prev;
    });
  }, []);

  const toggleLight = () => {
    setLight(v => { savePersist("sf_light", !v); return !v; });
  };

  const totalChoices = loadPersist("sf_totalChoices", 0);

  return (
    <Routes>
      <Route path="/" element={
        <HomeScreen 
          onPlay={id => navigate(`/game/${id}`)}
          onAchievements={() => navigate("/achievements")}
          onUpcoming={() => navigate("/upcoming")}
          unlockedCount={unlocked.length}
          light={light}
          onToggleLight={toggleLight}
        />
      } />
      <Route path="/achievements" element={
        <AchievementsScreen 
          unlocked={unlocked} 
          totalChoices={totalChoices} 
          onBack={() => navigate("/")} 
          light={light} 
        />
      } />
      <Route path="/upcoming" element={
        <UpcomingScreen 
          onBack={() => navigate("/")} 
          light={light} 
        />
      } />
      <Route path="/game/:storyId" element={
        <GameScreenWrapper 
          onBack={() => navigate("/")} 
          onUnlock={handleUnlock} 
          light={light} 
        />
      } />
    </Routes>
  );
}

function GameScreenWrapper({ onBack, onUnlock, light }) {
  const { storyId } = useParams();
  return <GameScreen storyId={storyId} onBack={onBack} onUnlock={onUnlock} light={light} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
