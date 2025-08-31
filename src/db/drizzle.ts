import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { configEnv } from "../config/config";

const pool = new Pool({
	connectionString: configEnv.DATABASE_URL,
});

export const drizzleDatabase = drizzle({
	client: pool,
});
