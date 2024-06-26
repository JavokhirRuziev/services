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
			monitor: 1340
		}
	},
	palette: {
		mode: "light",
		primary: {
			main: "#44CF9D",
			light: "#3de39e",
			contrastText: "#fff"
		},
		secondary: {
			main: "#00B2FF",
			light: "#A0DAFB",
			contrastText: "#fff"
		},
		error: {
			main: "#ff1e4c",
			light: "#ff456a",
			contrastText: "#fff"
		},
		warning: {
			main: "#FFBD70",
			light: "#666",
			contrastText: "#fff"
		},
		info: {
			main: "#fff",
			light: "#1B191810",
			contrastText: "#000"
		},
		success: {
			main: "#4bc95b",
			light: "#666",
			contrastText: "#fff"
		},
		grey: {
			100: "#1B191810",
			200: "#D9D9D9",
			300: "#F7F7F7",
			// 400: "6E7072",
			500: "#64748B",
			600: "#717171",
			700: "#2D2E2F"
		},
		common: {
			white: "#fff",
			black: "#2D2E2F"
		}
	},
	typography: {
		fontFamily: `"PoppinsRegular", sans-serif`,
		color: "#2D2E2F"
	},
	fontFamily: {
		Bold: `"QuickBold", sans-serif`,
		SemiBold: `"QuickSemiBold", sans-serif`,
		Medium: `"QuickMedium", sans-serif`,
		Regular: `"QuickRegular", sans-serif`,
		Light: `"QuickLight", sans-serif`
	},
	shadows: [
		"none",
		"0 3px 7px 0 rgba(0, 0, 0, .13), 0 1px 2px 0 rgba(0, 0, 0, .11)", // desired shadow
		"0px 9px 20px rgba(13, 38, 76, 0.19)" // Hover shadow
	],
	components: {
		MuiContainer: {
			defaultProps: {
				disableGutters: true,
				fixed: true,
				maxWidth: "xl"
			}
		},
		MuiButton: {
			defaultProps: {
				// disableElevation: true,
				// disableFocusRipple: true,
				// disableRipple: true,
				variant: "contained",
				color: "secondary"
			},
			styleOverrides: {
				root: {
					textTransform: "none"
				}
			}
		}
	}
});

theme = createTheme(theme, {
	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthXl: {
					[theme.breakpoints.down("desktop")]: {
						padding: "0 16px",
						maxWidth: "100%"
					},
					[theme.breakpoints.up("desktop")]: {
						maxWidth: "1140px"
					}
				}
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					backgroundColor: theme.palette.common.white,
					color: "rgba(0, 0, 0, 0.87)",
					boxShadow: theme.shadows[1],
					borderRadius: "8px",
					"&:hover": {
						boxShadow: theme.shadows[2]
					},
					fontSize: 11,
					".MuiTooltip-arrow": {
						color: theme.palette.common.white
					},
					padding: "10px"
				}
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: theme.palette.common.black,
					position: "relative"
				},
				overline: {
					color: theme.palette.common.white
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
						transition: "transform 0.25s ease-in-out"
					},
					"&:hover::after": {
						transform: "scaleX(1)",
						transformOrigin: "bottom left"
					}
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: theme.shadows[1],
					borderRadius: "8px",
					"&:hover": {
						boxShadow: theme.shadows[2]
					}
				}
			}
		},
		MuiButton: {
			styleOverrides: {
				sizeSmall: {
					borderRadius: "8px",
					paddingRight: "10px",
					paddingLeft: "10px",
					paddingTop: "3px",
					paddingBottom: "3px",
					minWidth: "auto",
					[theme.breakpoints.down("desktop")]: {
						fontSize: 10,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 12,
						fontFamily: `"PoppinsRegular", sans-serif`
					}
				},
				sizeMedium: {
					borderRadius: "8px",
					paddingRight: "16px",
					paddingLeft: "16px",
					paddingTop: "8px",
					paddingBottom: "8px",
					[theme.breakpoints.down("desktop")]: {
						fontSize: 14,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 16,
						fontFamily: `"PoppinsRegular", sans-serif`
					}
				},
				sizeLarge: {
					borderRadius: "8px",
					paddingRight: "32px",
					paddingLeft: "32px",
					paddingTop: "15px",
					paddingBottom: "15px",
					[theme.breakpoints.down("desktop")]: {
						fontSize: 14,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 16,
						fontFamily: `"PoppinsRegular", sans-serif`
					}
				},
				root: {
					boxShadow: theme.shadows[1],
					"&:hover": {
						boxShadow: theme.shadows[2] // Hover shadow
					}
				}
			}
		},
		MuiTypography: {
			styleOverrides: {
				h1: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 32,
						fontFamily: `"PoppinsBold", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 48,
						fontFamily: `"PoppinsBold", sans-serif`
					},
					color: theme.palette.common.black
				},
				h2: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 24,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 32,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					color: theme.palette.common.black
				},
				h3: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 22,
						fontFamily: `"QuickMedium", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 34,
						fontFamily: `"QuickMedium", sans-serif`
					},
					color: theme.palette.common.black
				},

				h4: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 18,
						fontFamily: `"PoppinsMedium", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 25,
						fontFamily: `"PoppinsMedium", sans-serif`
					},
					color: theme.palette.common.black
				},
				h5: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 16,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 18,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					color: theme.palette.common.black
				},
				h6: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 14,
						fontFamily: `"PoppinsMedium", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 16,
						fontFamily: `"PoppinsMedium", sans-serif`
					},
					color: theme.palette.common.black
				},
				body1: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 14,
						fontFamily: `"OpenSansRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 16,
						fontFamily: `"OpenSansRegular", sans-serif`
					},
					color: theme.palette.common.black
				},
				body2: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 12,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 14,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					color: theme.palette.common.black
				},
				subtitle1: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 12,
						fontFamily: `"PoppinsMedium", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 14,
						fontFamily: `"PoppinsMedium", sans-serif`
					},
					color: theme.palette.common.black
				},
				subtitle2: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 8,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 10,
						fontFamily: `"PoppinsRegular", sans-serif`
					},
					color: theme.palette.common.black
				},
				paragraph: {
					[theme.breakpoints.down("desktop")]: {
						fontSize: 10,
						fontFamily: `"PoppinsThin", sans-serif`
					},
					[theme.breakpoints.up("desktop")]: {
						fontSize: 12,
						fontFamily: `"PoppinsThin", sans-serif`
					},
					color: theme.palette.common.black
				}
			}
		}
	}
});
