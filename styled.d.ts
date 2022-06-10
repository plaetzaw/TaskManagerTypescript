import styled from 'styled-components'

import theme from './theme'
type Theme = typeof theme
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        padding: string,
        margin: string,
        test: string,
        fonts: {
            base: string,

        },
        colorsPrimary: {
            red: string,
            blue: string,
            CheckBackground: string
        },
        colorsLight: {
            VeryLightGray: string,
            VeryLightGrayishBlue: string,
            LightGrayishBlue: string,
            DarkGrayishBlue: string,
            VeryDarkGrayishBlue: string
        },
        colorsDark: {
            VeryDarkBlue: string,
            VeryDarkDesatBlue: string,
            LightGrayishBlue: string,
            DarkGrayishBlue: string,
            VeryDarkGrayishBlue: string,
            VeryVeryDarkGrayishBlue: string
        },

    }
}