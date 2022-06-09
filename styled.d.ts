import styled from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;
        colors: {
            main: string,
            primary: string,
            secondary: string
        }
    }
}