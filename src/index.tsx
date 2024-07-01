import { createRoot } from "react-dom/client";

import { App } from "./app/App";

import "./app/styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import { StoreProvider } from "./app/providers/StoreProvider";
import { ErrorBoundary } from "./app/providers/ErrorBoundary";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container root not found");
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
