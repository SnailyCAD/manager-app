import { ActionType } from "../Types";

export const requestShowMessageBox = () => ({
  type: ActionType.RequestShowMessageBox as ActionType.RequestShowMessageBox,
});

export const finishShowMessageBox = (button: number) => ({
  type: ActionType.FinishShowMessageBox as ActionType.FinishShowMessageBox,
  payload: {
    button,
  },
});

/**
 * show the message box.
 */
export const showMessageBox = () => async () => {
  const result = await window.myAPI.showMessageBox({
    type: "info",
    title: "Information",
    message: "Message",
    detail: "The quick brown fox jumps over the lazy dog.",
  });

  return result;
};
