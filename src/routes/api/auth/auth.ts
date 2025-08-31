import jwt from "@elysiajs/jwt";
import Elysia from "elysia";
import { configEnv } from "@/config/config";

export const elysiaAuthApi = new Elysia({
	prefix: "/auth",
}).use(
	jwt({
		name: "jwt",
		secret: configEnv.JWT_SECRET,
		iss: "Merpati-CBT",
		aud: "Authentication",
		exp: "8h",
	}),
);
