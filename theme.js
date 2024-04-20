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
      main: "#af0606",
      light: "#333",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f88b5",
      light: "#666",
      contrastText: "#777",
    },
    error: {
      main: "#0077b6",
      light: "#666",
      contrastText: "#777",
    },
    warning: {
      main: "#cfcfcf",
      light: "#666",
      contrastText: "#777",
    },
    info: {
      main: "#f5f5f5",
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
          borderRadius: "5px",
        },
        sizeMedium: {
          borderRadius: "5px",
        },
        sizeLarge: {
          borderRadius: "10px",
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
          fontSize: 18,
          fontFamily: "'Poppins-Light',sans-serif",
        },
        custom: {
          fontSize: 18,
          fontFamily: "'Poppins-Light',sans-serif",
        },
      },
    },
  },
});
