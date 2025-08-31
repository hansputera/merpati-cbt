import { cleanEnv, url } from "envalid";

export const configEnv = cleanEnv(process.env, {
	DATABASE_URL: url(),
});
