import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// import type { AppProps } from "next/app";

import theme from "../theme";
// import theme from '../styled'

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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
