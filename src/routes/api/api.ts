import Elysia from "elysia";
import { elysiaAuthApi } from "./auth/auth";

export const elysiaApi = new Elysia({
	prefix: "/api",
});

elysiaApi.use(elysiaAuthApi);
elysiaApi.get("/", "Hello World");
