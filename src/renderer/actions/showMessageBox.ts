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
