import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...{ theme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
