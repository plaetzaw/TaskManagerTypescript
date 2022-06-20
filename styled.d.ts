import styled from "styled-components";

import theme from "./theme";
type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    theme: any;
    padding: string;
    margin: string;
    fonts: {
      base: string;
      size: string;
    };
    colorsPrimary: {
      blue: string;
      CheckBackground: string;
    };
    lightMode: {
      VeryLightGray: string;
      VeryLightGrayishBlue: string;
      LightGrayishBlue: string;
      DarkGrayishBlue: string;
      VeryDarkGrayishBlue: string;
    };
    darkMode: {
      VeryDarkBlue: string;
      VeryDarkDesatBlue: string;
      LightGrayishBlue: string;
      DarkGrayishBlue: string;
      VeryDarkGrayishBlue: string;
      VeryVeryDarkGrayishBlue: string;
    };
  }
}
