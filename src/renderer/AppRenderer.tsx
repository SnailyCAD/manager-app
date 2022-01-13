import React from "react";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme } from "./Theme";
import { MainContainer } from "./containers/MainContainer";

const GlobalStyle = createGlobalStyle`

  html,
  body {
    margin: 0;
    padding: 0;
    color: ${Theme.colors.text};
    font-family: system-ui, sans-serif;
    background-color: ${Theme.colors.white};
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  #app {
    min-height: 100vh;
  }
`;

window.addEventListener("load", () => {
  render(
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <MainContainer />
    </ThemeProvider>,
    document.getElementById("app"),
  );
});
