import { saveToLocalStorage } from "../utils/localStorage";

export async function loadSnailyCADDirectory() {
  const result = await window.myAPI.loadSnailyCADDirectory({
    title: "Open SnailyCAD's folder",
    message: "Open SnailyCAD's folder",
    properties: ["openDirectory"],
  });

  if (result instanceof Error) {
    return result as Error;
  }

  const [path] = result.filePaths;
  if (!path) return null;
  saveToLocalStorage(path);

  return path;
}
