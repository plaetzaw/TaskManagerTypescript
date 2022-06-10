import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
    padding: '5em',
    margin: '0px',
    test: 'red',
    fonts: {
        base: 'Josefin Sans'
    },
    colorsPrimary: {
        red: 'red',
        blue: 'hsl(220, 98%, 61%)',
        CheckBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)'
    },
    colorsLight: {
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)'
    },
    colorsDark: {
        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesatBlue: 'hsl(235, 24%, 19%)',
        LightGrayishBlue: 'hsl(234, 39%, 85%)',
        DarkGrayishBlue: 'hsl(234, 11%, 52%)',
        VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        VeryVeryDarkGrayishBlue: 'hsl(237, 14%, 26%)'

    }
};

export default { myTheme };