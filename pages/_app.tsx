import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...{ theme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}