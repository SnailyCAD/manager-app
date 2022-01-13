import {
  OpenDialogOptions,
  OpenDialogReturnValue,
  MessageBoxOptions,
  MessageBoxReturnValue,
} from "electron/main";

/**
 * declare a type that depends on the renderer process of Electron.
 */
declare global {
  interface Window {
    myAPI: MyAPI;
  }
}

/**
 * provides an application-specific API.
 */
export type MyAPI = {
  /**
   * shows the file open dialog.
   * @param options Options of the showOpenDialog API on Electron.
   * @returns Result of the dialog operation.
   */
  loadSnailyCADDirectory: (options: OpenDialogOptions) => Promise<OpenDialogReturnValue>;

  /**
   * shows the message box.
   * @param options Options of the showMessageBox API on Electron.
   * @returns Result of the message box operation.
   */
  showMessageBox: (options: MessageBoxOptions) => Promise<MessageBoxReturnValue>;

  /**
   * show URL.
   * @param url URL.
   */
  showURL: (url: string) => Promise<void>;
};
