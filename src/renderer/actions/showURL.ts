export const showURL = (url: string) => async () => {
  try {
    await window.myAPI.showURL(url);
  } catch (err) {
    console.error(err);
  }
};
