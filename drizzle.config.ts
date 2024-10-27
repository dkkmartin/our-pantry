import '@/lib/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './db/migrations',
  schema: './db/schemas/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL!,
  },
})
