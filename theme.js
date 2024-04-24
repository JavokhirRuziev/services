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
      contrastText: "#fff",
    },
    error: {
      main: "#ff1e4c",
      light: "#ff456a",
      contrastText: "#fff",
    },
    warning: {
      main: "#ffeb56",
      light: "#666",
      contrastText: "#fff",
    },
    info: {
      main: "#989cdd",
      light: "#666",
      contrastText: "#fff",
    },
    success: {
      main: "#4bc95b",
      light: "#666",
      contrastText: "#fff",
    },
  },
  shadows: [
    "none",
    "0px 0px 16px rgba(0, 0, 0, 0.08)", // desired shadow
    "0px 0px 32px rgba(0, 0, 0, 0.12)", // Hover shadow
  ],
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.common.white,
          color: "rgba(0, 0, 0, 0.87)",
          boxShadow: theme.shadows[1],
          "&:hover": {
            boxShadow: theme.shadows[2],
          },
          fontSize: 11,
          ".MuiTooltip-arrow": {
            color: theme.palette.common.white,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.palette.common.black,
          position: "relative",
        },
        overline: {
          color: theme.palette.common.white,
        },
        underlineHover: {
          textDecoration: "none !important",
          "&::after": {
            content: `''`,
            position: "absolute",
            width: 48,
            transform: "scaleX(0)",
            height: 3,
            bottom: -6,
            left: 0,
            backgroundColor: theme.palette.common.white,
            transformOrigin: "bottom left",
            transition: "transform 0.25s ease-in-out",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "bottom left",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          "&:hover": {
            boxShadow: theme.shadows[2],
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
        root: {
          boxShadow: theme.shadows[1],
          "&:hover": {
            boxShadow: theme.shadows[2], // Hover shadow
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 46,
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 62,
          },
        },
        h2: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 32,
            lineHeight: "40px",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 48,
            lineHeight: "56px",
          },
        },
        h3: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 18,
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 20,
          },
        },
        h4: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 16,
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 18,
          },
        },
        body1: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 14,
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 16,
          },
        },
        body2: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 12,
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 14,
          },
        },
      },
    },
  },
});
