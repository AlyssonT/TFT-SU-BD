import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import theme from "./styles/theme.ts";
import { ThemeProvider } from "@mui/material";
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <App />
    <Analytics />
  </ThemeProvider>
);
