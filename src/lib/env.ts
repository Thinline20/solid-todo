import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  runtimeEnv: process.env,
  server: {
    DATABASE_URL: z.string().min(1),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  },
});