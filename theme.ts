import { DefaultTheme } from 'styled-components';

const primaryTheme: DefaultTheme = {
    padding: '0px',
    margin: '0px',
    fonts: {
        base: 'Josefin Sans',
        size: '18px'
    },
    colorsPrimary: {
        blue: 'hsl(220, 98%, 61%)',
        CheckBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)'
    },
    lightMode: {
        VeryLightGray: 'hsl(0, 0%, 98%)',
        VeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        LightGrayishBlue: 'hsl(233, 11%, 84%)',
        DarkGrayishBlue: 'hsl(236, 9%, 61%)',
        VeryDarkGrayishBlue: 'hsl(235, 19%, 35%)'
    },
    darkMode: {
        VeryDarkBlue: 'hsl(235, 21%, 11%)',
        VeryDarkDesatBlue: 'hsl(235, 24%, 19%)',
        LightGrayishBlue: 'hsl(234, 39%, 85%)',
        DarkGrayishBlue: 'hsl(234, 11%, 52%)',
        VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
        VeryVeryDarkGrayishBlue: 'hsl(237, 14%, 26%)'

    }
};

export default { primaryTheme };