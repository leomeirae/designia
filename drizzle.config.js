import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:D1lmk8uMbOco@ep-autumn-snow-a5k53xbd.us-east-2.aws.neon.tech/ai-room-database?sslmode=require"
  },
});