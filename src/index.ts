import jwt from "@elysiajs/jwt";
import { Elysia } from "elysia";
import { configEnv } from "./config/config";

const app = new Elysia()
	.use(
		jwt({
			name: 'jwt',
			secret: configEnv.JWT_SECRET,
			iss: 'Merpati-CBT',
			aud: 'Authentication',
			exp: '8h',
		}),
	);


console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
