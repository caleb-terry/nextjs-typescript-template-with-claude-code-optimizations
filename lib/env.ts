import { z } from "zod/v4";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  // Add project-specific env vars here:
  // DATABASE_URL: z.url(),
  // NEXT_PUBLIC_API_URL: z.url(),
});

export const env = envSchema.parse(process.env);
