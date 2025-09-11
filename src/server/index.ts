import express, { Express, Request, Response } from "express";
import { config } from "./config";

const app: Express = express();

app.get('/{*splat}', (req: Request, res: Response) => {
	res.send(`<h1>Hola Mundo desde la ruta: ${req.url}</h1>`);
});

app.listen(config.PORT, () => {
	console.log(`Listening in http://localhost:${config.PORT}`);
});