import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

  palette: {
       mode: 'dark',
    primary: {
      main: 'rgb(41, 133, 223)',
    },
    secondary: {
      main: 'rgb(0, 87, 183)',
    },
    background: {
      default: '#0a1929',
      paper: '#0a1929',
    },
    text: {
      primary:'#ffff',
      secondary: 'white',
    },
    textField: {
        hintColor: "#ffff",
        floatingLabelColor: "#0a1929"
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
   },
  }
});
