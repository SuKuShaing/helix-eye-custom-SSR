import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { template } from "./render/template";

const app: Express = express();

app.get('/{*splat}', (req: Request, res: Response) => {
	res.send(template(req.url, `<p>Hola Mundo desde la ruta: ${req.url}</p>`));
});

app.listen(config.PORT, () => {
	console.log(`Listening in http://localhost:${config.PORT}`);
});