import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none !important;
  }
  li {
    cursor: pointer;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
