import "styled-components";

/** theme for ThemeProvider (styled-components). */
export const Theme = {
  colors: {
    white: "#fff",
    black: "#000",
    grayLightness: "#f8f8f8",
    grayLight: "#ecf0f1",
    gray: "#bdc3c7",
    grayDark: "#95a5a6",
    grayDarkness: "#7f8c8d",
    indigo: "#34495e",
    indigoDark: "#2c3e50",
    red: "#e74c3c",
    redDark: "#e74c3c",
    blueLight: "#9fd6fe",
    blue: "#3498db",
    blueDark: "#2980b9",
    green: "#2ecc71",
    greenDark: "#27ae60",
    viridian: "#1abc9c",
    viridianDark: "#16a085",
    yellow: "#f1c40f",
    yellowDark: "#f39c12",
    orange: "#e67e22",
    orangeDark: "#d35400",
    purple: "#9b59b6",
    purpleDark: "#8e44ad",
    text: "#262626",
  },
  layout: {},
} as const;

type AppTheme = typeof Theme;

declare module "styled-components" {
  // @ts-expect-error ignore
  type DefaultTheme = AppTheme;
}
