import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  driver: "better-sqlite",
  schema: "./src/server/db/schema.ts",
});
