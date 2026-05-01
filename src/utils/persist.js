export function loadPersist(key, def) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(def)); }
  catch { return def; }
}
export function savePersist(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* noop */ }
}