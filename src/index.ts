import { Elysia } from "elysia";
import { elysiaApi } from "./routes/api/api";
import { configEnv } from "./config/config";

const app = new Elysia();
app.use(elysiaApi);

app.listen({
	port: configEnv.PORT,
	hostname: configEnv.HOST,
}, (server) => {
	console.log(
		`🦊 Elysia is running at ${server.hostname}:${server.port}`,
	);
});