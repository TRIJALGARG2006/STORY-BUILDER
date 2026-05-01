import React from 'react';

export default function ThemeToggle({ light, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={light ? "Switch to Dark Mode" : "Switch to Light Mode"}
      className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all text-base ${
        light
          ? "bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200"
          : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500"
      }`}
    >
      {light ? "🌙" : "☀️"}
    </button>
  );
}