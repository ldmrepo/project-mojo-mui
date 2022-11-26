import React from "react";
import { CacheProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { createRoot } from "react-dom/client";
import createCache from "@emotion/cache";
import App from "./App";

const cache = createCache({
  key: "css",
  prepend: true,
});

window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </StyledEngineProvider>
  );
});
