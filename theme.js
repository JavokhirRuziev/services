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
      desktop: 1300,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#af0606",
      light: "#fff",
      contrastText: "#333",
    },
    secondary: {
      main: "#ffcf00",
      light: "#666",
      contrastText: "#777",
    },
    error: {
      main: "#0077b6",
      light: "#666",
      contrastText: "#777",
    },
    warning: {
      main: "#f5f5f5",
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
  typography: {
    fontFamily: `'Outfit-Regular',sans-serif`,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        disableGutters: true,
        fixed: true,
        maxWidth: "xl",
      },
    },
    MuiStack: {
      defaultProps: {
        direction: "row",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
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
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiAccordion: {
      defaultProps: {
        square: true,
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:before": {
            borderRadius: 0,
            opacity: "1 !important",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: 0,
        },
        expandIconWrapper: {
          transform: "none !important",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "Mont-SemiBold",
          fontSize: 16,
          lineHeight: "20px",
          padding: 16,
          borderRadius: 0,
          textAlign: "center",
        },
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 14,
            lineHeight: "16px",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 16,
            lineHeight: "20px",
          },
        },
      },
    },
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
        startIcon: {
          marginLeft: 0,
          [theme.breakpoints.down("desktop")]: {
            marginRight: 8,
          },
          [theme.breakpoints.up("desktop")]: {
            marginRight: 12,
          },
        },
        endIcon: {
          marginRight: 0,
          [theme.breakpoints.down("desktop")]: {
            marginLeft: 8,
          },
          [theme.breakpoints.up("desktop")]: {
            marginLeft: 12,
          },
        },
        sizeSmall: {
          fontSize: 14,
          lineHeight: "16px",
          padding: "12px",
          borderRadius: 0,
        },
        sizeMedium: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 14,
            lineHeight: "16px",
            padding: "12px",
            borderRadius: 0,
            fontFamily: "Mont-SemiBold",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 18,
            fontFamily: "Mont-SemiBold",
            lineHeight: "24px",
            padding: "10px 24px",
            borderRadius: 0,
          },
        },
        sizeLarge: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 16,
            lineHeight: "20px",
            padding: "20px 27px",
            borderRadius: 0,
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 24,
            lineHeight: "32px",
            padding: "28px 32px",
            borderRadius: 0,
          },
        },
        containedPrimary: {
          backgroundColor: theme.palette.secondary.main,

          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
        containedSecondary: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },

        containedInfo: {
          color: theme.palette.common.black,
          backgroundColor: theme.palette.common.white,
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white,
          },
        },
        outlinedSecondary: {
          color: theme.palette.primary.main,
          border: "2px solid",
          borderColor: theme.palette.primary.main,

          "&:hover": {
            border: "2px solid",
            borderColor: theme.palette.primary.main,
            background: theme.palette.primary.main + 10,
          },
        },
        outlinedPrimary: {
          color: theme.palette.secondary.main,
          border: "2px solid",
          borderColor: theme.palette.secondary.main,

          ":hover": {
            border: "2px solid",
            borderColor: theme.palette.secondary.main,
            background: theme.palette.secondary.main + 10,
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
            backgroundColor: theme.palette.secondary.main,
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
    MuiTypography: {
      styleOverrides: {
        h1: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 46,
            lineHeight: "56px",
            fontFamily: "RedHat-Bold",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 72,
            lineHeight: "72px",
            fontFamily: "RedHat-Bold",
          },
        },
        h2: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 32,
            lineHeight: "40px",
            fontFamily: "Mont-Medium",
          },
          [theme.breakpoints.up("desktop")]: {
            fontSize: 48,
            lineHeight: "56px",
            fontFamily: "Mont-Medium",
          },
        },
        h3: {
          [theme.breakpoints.down("desktop")]: {
            fontSize: 18,
            fontFamily: "Mont-Bold",
          },
          [theme.breakpoints.up("desktop")]: {
            fontFamily: "Mont-Bold",
            fontSize: 20,
          },
        },
        h4: {
          fontFamily: "Mont-SemiBold",
          fontSize: 16,
          lineHeight: "18px",
        },
        p: {
          fontFamily: "Mont-Regular",
          lineHeight: "22px",
          fontSize: 18,
          [theme.breakpoints.down("desktop")]: {
            fontSize: 16,
          },
        },
      },
    },
  },
});
