import { cleanEnv, host, port, str, url } from "envalid";

export const configEnv = cleanEnv(process.env, {
	DATABASE_URL: url(),
	JWT_SECRET: str(),
	PORT: port(),
	HOST: host(),
});
