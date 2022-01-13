import { ActionType } from "../Types";

export const requestShowURL = () => ({
  type: ActionType.RequestShowURL as ActionType.RequestShowURL,
});

export const showURL = (url: string) => async () => {
  try {
    await window.myAPI.showURL(url);
  } catch (err) {
    console.error(err);
  }
};
