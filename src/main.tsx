import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { theme } from "themes";
import { ErrorBoundary } from "./ErrorBoundary";
import { Router } from "./router/Router";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={
        <Box>
          <Typography>Error rendering the app</Typography>
        </Box>
      }
    >
      <ThemeProvider theme={createTheme(theme)}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
