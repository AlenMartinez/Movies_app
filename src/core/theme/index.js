import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#9f6d00',
    },
    background: {
      default: '#192231',
      paper: '#24344d',
    },
    analogous:{
      main: '#00829f',
    },
  },
});
