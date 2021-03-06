import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import typographyTheme from './typographyTheme'

const theme = createTheme({
    ...typographyTheme,
    breakpoints: {
        values: {
            xs: 0,
            b500: 500,
            sm: 600,
            md: 900,
            mdlg1: 960,
            mdlg2: 990,
            lg: 1200,
            lgf: 1230,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
        heart: {
            main: 'rgb(239, 71, 111)'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollbarColor: "#6b6b6b #2b2b2b",
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "rgba(0, 0, 0, 0.849)",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "#6b6b6b",
                        minHeight: 24,
                        border: "3px solid #2b2b2b",
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#959595",
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#2b2b2b",
                    },
                },
            },
        },
    },
});

export default theme;