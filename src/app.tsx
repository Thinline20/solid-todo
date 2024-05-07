import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";

import "./app.css";
import { ColorModeProvider, ColorModeScript } from "@kobalte/core/color-mode";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Suspense>
            <ColorModeScript />
            <ColorModeProvider>{props.children}</ColorModeProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
