const PROJECT_KEY = "template-printing-mvp-project";

export function saveProject(project) {
  localStorage.setItem(PROJECT_KEY, JSON.stringify(project));
}

export function loadProject() {
  const raw = localStorage.getItem(PROJECT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
