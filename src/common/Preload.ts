import { contextBridge, ipcRenderer } from "electron";
import {
  OpenDialogOptions,
  OpenDialogReturnValue,
  MessageBoxOptions,
  MessageBoxReturnValue,
} from "electron/main";
import { IPCKey } from "./Constants";

contextBridge.exposeInMainWorld("myAPI", {
  loadSnailyCADDirectory: async (options: OpenDialogOptions): Promise<OpenDialogReturnValue> =>
    ipcRenderer.invoke(IPCKey.LoadLocalDirectory, options),

  showMessageBox: async (options: MessageBoxOptions): Promise<MessageBoxReturnValue> =>
    ipcRenderer.invoke(IPCKey.ShowMessageBox, options),

  showURL: async (url: string): Promise<void> => ipcRenderer.invoke(IPCKey.ShowURL, url),
});
