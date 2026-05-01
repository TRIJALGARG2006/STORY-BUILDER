import { IMGS } from './images.js';
export { IMGS };
export { ALL_ACHIEVEMENTS } from './achievements.js';
export { CATS, MOOD, ATM_BG, ATM_BG_LIGHT } from './categories.js';

import { STORIES as witcherStories } from './stories/witcher.js';
import { STORIES as kingdomStories } from './stories/kingdomCome.js';
import { STORIES as crimsonStories } from './stories/crimsoncourt.js';
import { STORIES as tokyoStories } from './stories/tokyoFiles.js';
import { STORIES as ashwoodStories } from './stories/ashwoodManor.js';
import { STORIES as bloodStories } from './stories/bloodSenate.js';

export const STORIES = {
  ...witcherStories,
  ...kingdomStories,
  ...crimsonStories,
  ...tokyoStories,
  ...ashwoodStories,
  ...bloodStories,
};

export const STORY_LIST = Object.values(STORIES);
