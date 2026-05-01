import React from 'react';
import { CATS } from '../data/index.js';

export default function CatPill({ catId, small }) {
  const c = CATS[catId];
  if (!c) return null;
  return (
    <span className={`inline-flex items-center gap-1 font-semibold rounded ${c.ta} ${c.bg} border ${c.ba} ${small ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-0.5"}`}>
      {c.icon} {c.label}
    </span>
  );
}
