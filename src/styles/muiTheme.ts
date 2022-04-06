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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px'
        }
      }
    }
  },
  palette: {
    mode: 'dark'
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});