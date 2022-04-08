import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
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
          flexGrow: 1,
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
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          padding: 6,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '6px 10px',
          marginBottom: 4,
          '&:last-child': {
            marginBottom: 0,
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});