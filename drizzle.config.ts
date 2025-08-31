import {defineConfig} from 'drizzle-kit';
import { configEnv } from './src/config/config';

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schemas/index.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: configEnv.DATABASE_URL,
    },
});
