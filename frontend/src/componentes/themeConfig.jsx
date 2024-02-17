import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import { brown } from "@mui/material/colors";
import { amber } from '@mui/material/colors';
import { lightBlue} from '@mui/material/colors';
import { green} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#bc6c25',
            light: '#dda15e',
            dark: deepOrange[900],
            contrastText: '#F5F4F5',
        },
        primary: {
            main: '#283618',
            light: '#7B6042',
            dark: '#606c38',
            contrastText: '#F5F4F5',
        },
        warning: {
            main: amber[300],
            light: amber[200],
            dark: amber[600],
        },
        info: {
            main: lightBlue[300],
            light: lightBlue[100],
            dark: lightBlue[700],
        },
        success: {
            main: green[400],
            light: green[200],
            dark: green[700],
        },

    },
    typography: {
        fontFamily: 'Libre Franklin',
        fontSize: 15,
        body2:{
            fontSize:10,
            fontStyle: 'italic',
        } ,
        '@media (max-width:600px)': {
            fontSize: 12,
        },
        '@media (min-width:601px) and (max-width:960px)': {
            fontSize: 15,
        },
        '@media (min-width:1440px)': {
            fontSize: 22,
        },
        h1: {
            fontFamily: 'Libre Franklin',
            fontWeight: '500',
            letterSpacing: "0.02em",
            fontSize: "2rem",
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },

            '@media (min-width:1280px)': {
                fontSize: '4rem',
            },
        },
        h2: {
            fontFamily: 'Libre Franklin',
            letterSpacing: "0.03em",
            lineHeight: 1.6,
            fontWeight: 500,
            fontSize: "2rem",
            '@media (max-width:600px)': {
                fontSize: '1.03rem',
            },
            '@media (min-width:601px) and (max-width:960px)': {
                fontSize: '1.8rem',
            },
            '@media (min-width:1440px)': {
                fontSize: '2.5rem',
            },

        },
        h3: {
            fontFamily: 'Libre Franklin',
            lineHeight: 1.5,
            fontSize: '1.7rem',
            '@media (max-width:600px)': {
                fontSize: '1.3rem',
            },
            '@media (min-width:1440px)': {
                fontSize: '2rem',
            },
        },
        h4: {
            fontFamily: 'Libre Franklin',
            letterSpacing: "0.02em",
            lineHeight: 1.3,
            fontWeight: 400,
            fontSize: "1.6rem",
            '@media (max-width:600px)': {
                fontSize: '1.03rem',
            },
            '@media (min-width:601px) and (max-width:960px)': {
                fontSize: '1.8rem',
            },
            '@media (min-width:1440px)': {
                fontSize: '2.5rem',
            },

        },
        h5: {
            fontFamily: 'Libre Franklin',
            lineHeight: 0.9,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            '@media (max-width:600px)': {
                fontSize: '0.8rem',
            },
            '@media (min-width:1440px)': {
                fontSize: '1.2rem',
            },
        }

    }
});

export default theme;