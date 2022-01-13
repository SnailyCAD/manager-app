import { app } from "electron";
import { initializeIpcEvents, releaseIpcEvents } from "./IPCEvents";
import { createMainWindow } from "./WindowManager";
import { createMainMenu } from "./MainMenu";

app.name = "Starter";

app.on("ready", () => {
  console.log("Initialize Application");

  createMainWindow();
  createMainMenu();
  initializeIpcEvents();
});

app.on("quit", () => {
  console.log("Application is quit");
});

app.on("window-all-closed", () => {
  console.log("All of the window was closed.");

  releaseIpcEvents();
  app.quit();
});
