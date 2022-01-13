import { ActionType } from "../Types";
import { saveToLocalStorage } from "../utils/localStorage";

export const requestShowOpenDialog = () => ({
  type: ActionType.RequestShowOpenDialog as ActionType.RequestShowOpenDialog,
});

export const finishShowOpenDialog = (paths: string[]) => ({
  type: ActionType.FinishShowOpenDialog as ActionType.FinishShowOpenDialog,
  payload: {
    paths,
  },
});

export const loadSnailyCADDirectory = async () => {
  const result = await window.myAPI.loadSnailyCADDirectory({
    title: "Open SnailyCAD's folder",
    message: "Open SnailyCAD's folder",
    properties: ["openDirectory"],
  });

  const [path] = result.filePaths;
  if (!path) return null;
  saveToLocalStorage(path);

  return path;
};
