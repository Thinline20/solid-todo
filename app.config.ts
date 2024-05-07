import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  middleware: "./src/middleware.ts",
  ssr: true,
  vite: {
    optimizeDeps: {
      include: ["@internationalized/date", "@internationalized/number"],
    },
  },
});
