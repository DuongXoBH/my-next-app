// app/providers.tsx
"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
const theme = createTheme({
    typography: {
      fontFamily: "var(--font-nunito-sans)",
    },
  });

export default function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
