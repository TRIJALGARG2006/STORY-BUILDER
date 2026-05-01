import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IMGS, CATS, MOOD, ATM_BG, ATM_BG_LIGHT, ALL_ACHIEVEMENTS, STORIES, STORY_LIST } from '../data/index.js';
import { loadPersist, savePersist } from '../utils/persist.js';
import ThemeToggle from '../components/ThemeToggle.jsx';
import CatPill from '../components/CatPill.jsx';
import AchievementToast from '../components/AchievementToast.jsx';
import StatBar from '../components/StatBar.jsx';

