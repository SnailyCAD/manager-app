import {
  BrowserWindow,
  dialog,
  shell,
  ipcMain,
  OpenDialogOptions,
  MessageBoxOptions,
  IpcMainInvokeEvent,
  OpenDialogReturnValue,
} from "electron";
import { IPCKey } from "../common/Constants";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * occurs when show of a file open dialog is requested.
 * @param ev Event data.
 * @param options Options of `dialog.showOpenDialog`.
 */
const onShowOpenDialog = async (ev: IpcMainInvokeEvent, options: OpenDialogOptions) => {
  const win = BrowserWindow.fromWebContents(ev.sender);

  if (!win) {
    throw new Error("Message sender window does not exist");
  }

  const result = await dialog.showOpenDialog(win, options);
  return _validateLocalDir(result);
};

/**
 * occurs when show of a message box is requested.
 * @param ev Event data.
 * @param options Options of `dialog.showMessageBox`.
 */
const onShowMessageBox = async (ev: IpcMainInvokeEvent, options: MessageBoxOptions) => {
  const win = BrowserWindow.fromWebContents(ev.sender);
  if (win) {
    return dialog.showMessageBox(win, options);
  }
  throw new Error("Message sender window does not exist");
};

/**
 * occurs in a request to open URL in a shell
 * @param ev Event data.
 * @param itemPath Path of the target folder.
 */
const onShowURL = async (ev: IpcMainInvokeEvent, url: string): Promise<void> => {
  return shell.openExternal(url);
};

/** a value indicating that an IPC events has been initialized. */
let initialized = false;

/**
 * initialize IPC events.
 */
export const initializeIpcEvents = () => {
  if (initialized) {
    return;
  }
  initialized = true;

  ipcMain.handle(IPCKey.LoadLocalDirectory, onShowOpenDialog);
  ipcMain.handle(IPCKey.ShowMessageBox, onShowMessageBox);
  ipcMain.handle(IPCKey.ShowURL, onShowURL);
};

/**
 * release IPC events.
 */
export const releaseIpcEvents = () => {
  if (initialized) {
    ipcMain.removeAllListeners(IPCKey.LoadLocalDirectory);
    ipcMain.removeAllListeners(IPCKey.ShowMessageBox);
    ipcMain.removeAllListeners(IPCKey.ShowURL);
  }

  initialized = false;
};

async function _validateLocalDir(data: OpenDialogReturnValue) {
  const [path] = data.filePaths;

  if (data.canceled) {
    return data;
  }

  let packageJson;
  try {
    packageJson = JSON.parse(readFileSync(join(path, "package.json"), "utf8"));
  } catch {
    return new Error("Could not read this folder. Are you sure this is the correct location?");
  }

  if (packageJson.name !== "snailycad") {
    return new Error(
      "This folder does not include the source code to SnailyCADv4. Make sure the folder is the root directory of SnailyCADv4.",
    );
  }

  return data;
}
