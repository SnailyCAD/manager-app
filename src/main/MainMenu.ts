import { app, Menu, MenuItemConstructorOptions } from "electron";

/**
 * create a template for the menu.
 * @returns Template.
 */
const createTemplate = (): MenuItemConstructorOptions[] => {
  const isMac = process.platform === "darwin";
  return [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about" },
              { type: "separator" },
              { role: "services" },
              { type: "separator" },
              { role: "hide" },
              { role: "hideothers" },
              { role: "unhide" },
              { type: "separator" },
              { role: "quit" },
            ],
          },
        ]
      : []),
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "pasteandmatchstyle" },
        { role: "delete" },
        { role: "selectall" },
      ],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forcereload" },
        { role: "toggledevtools" },
        { type: "separator" },
        { role: "resetzoom" },
        { role: "zoomin" },
        { role: "zoomout" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      role: "window",
      submenu: [
        ...(isMac
          ? [
              { role: "close" },
              { role: "minimize" },
              { role: "zoom" },
              { type: "separator" },
              { role: "front" },
            ]
          : [{ role: "minimize" }, { role: "close" }]),
      ],
    },
    {
      role: "help",
      submenu: [
        {
          label: "SnailyCADv4 documentation",
          click() {
            require("electron").shell.openExternal("https://cad-docs.netlify.app");
          },
        },
        {
          label: "SnailyCADv4 GitHub",
          click() {
            require("electron").shell.openExternal("https://github.com/SnailyCAD/snaily-cadv4");
          },
        },
      ],
    },
  ] as MenuItemConstructorOptions[];
};

/**
 * create and set main menu.
 */
export const createMainMenu = () => {
  const template = Menu.buildFromTemplate(createTemplate());
  Menu.setApplicationMenu(template);
};
