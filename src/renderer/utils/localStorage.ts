const LOCAL_STORAGE_KEY = "snailycad_app_cad_dir";

export function saveToLocalStorage(dir: string) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, dir);
  return dir;
}

export function loadFromLocalStorage() {
  return window.localStorage.getItem(LOCAL_STORAGE_KEY);
}
