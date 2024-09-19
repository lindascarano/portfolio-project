import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./themes/theme.ts";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <CssBaseline /> {/* Reset del CSS di Material UI */}
        <App />
      </StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);
