import { app } from "electron";
import { initializeIpcEvents, releaseIpcEvents } from "./IPCEvents";
import { createMainWindow } from "./WindowManager";
import { createMainMenu } from "./MainMenu";

app.name = "SnailyCADv4 Manager App";

app.on("ready", () => {
  console.log("Initialize Application");

  createMainWindow();
  createMainMenu();
  initializeIpcEvents();
});

app.on("window-all-closed", () => {
  releaseIpcEvents();
  app.quit();
});
