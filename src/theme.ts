import { createTheme } from '@mui/material/styles';

export const COLORS = {
  white: '#ffffff',
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  },
  red: {
    700: '#be123c'
  },
  green: {
    700: '#047857'
  },
  blue: {
    700: '#0369a1'
  }
}

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
}

export const theme = createTheme({
  palette: {
    primary: {
      light: COLORS.gray[300],
      main: COLORS.gray[500],
      dark: COLORS.gray[700],
    },
    error: {
      main: COLORS.red[700],
    },
    success: {
      main: COLORS.green[700],
    },
    info: {
      main: COLORS.blue[700],
    },
    text: {
      primary: COLORS.gray[900],
    },
    background: {
      paper: COLORS.gray[50],
      default: COLORS.gray[50],
    }
  },
  typography: {
    fontFamily: ['"Lato"', '"Helvetica"', '"Arial"', 'sans-serif'].join(', '),
    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: COLORS.gray[600],
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: COLORS.gray[600],
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // see https://mui.com/components/icons/#font-awesome-2
          boxSizing: 'content-box',
          padding: 3,
          fontSize: '1.125rem',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      }
    }
  },
});