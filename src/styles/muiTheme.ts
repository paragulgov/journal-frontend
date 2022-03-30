import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        body: {
          minWidth: 375,
          color: '#fff',
          background: '#373737',
          overflowX: 'hidden',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        main: {
          flexGrow: 1
        },
        '#__next': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  }
});