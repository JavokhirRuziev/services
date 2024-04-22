import { createTheme } from "@mui/material/styles";

// x|s, extra-small: 0px
// s|m, small: 600px
// m|d, medium: 900px
// l|g, large: 1200px
// x|l, extra-large: 1536px

export let theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      desktop: 1140,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#144e80",
      light: "#2482d4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#89d67e",
      light: "#a5ff99",
      contrastText: "#777",
    },
    error: {
      main: "#ff1e4c",
      light: "#ff456a",
      contrastText: "#777",
    },
    warning: {
      main: "#ffeb56",
      light: "#666",
      contrastText: "#777",
    },
    info: {
      main: "#989cdd",
      light: "#666",
      contrastText: "#777",
    },
    success: {
      main: "#4bc95b",
      light: "#666",
      contrastText: "#777",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)", // Your desired shadow
          "&:hover": {
            boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.12)", // Hover shadow
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        fixed: true,
        maxWidth: "xl",
      },
    },
    MuiButton: {
      defaultProps: {
        // disableElevation: true,
        // disableFocusRipple: true,
        // disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedInfo: {
          boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.08)",
          "&:hover": {
            boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.12)",
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          [theme.breakpoints.down("desktop")]: {
            padding: "0 16px",
            maxWidth: "100%",
          },
          [theme.breakpoints.up("desktop")]: {
            maxWidth: "1120px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: "4px",
        },
        sizeMedium: {
          borderRadius: "4px",
        },
        sizeLarge: {
          borderRadius: "4px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 50,
          fontFamily: "'Poppins-Regular',sans-serif",
        },
        h2: {
          fontSize: 40,
          fontFamily: "'Poppins-Medium',sans-serif",
        },
        h3: {
          fontSize: 30,
          fontFamily: "'Poppins-Regular',sans-serif",
        },
        h4: {
          fontSize: 20,
          fontFamily: "'Poppins-SemiBold',sans-serif",
        },
        p: {
          fontSize: 16,
          fontFamily: "'Poppins-Light',sans-serif",
        },
        custom: {
          fontSize: 14,
          fontFamily: "'Poppins-Light',sans-serif",
        },
      },
    },
  },
});
