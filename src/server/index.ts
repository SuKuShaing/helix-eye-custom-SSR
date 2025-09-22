import express, { Express, Request, Response } from "express";
import { config } from "./config";
import { render } from "./render";
import { getGalaxiesJSON } from "../app/api";

const app: Express = express();

app.use(express.static('dist'));

app.get('/galaxias', async (req: Request, res: Response) => {
	const data = await getGalaxiesJSON();
	// console.log("🚀 ~ data:", data)
	const initialProps = {
		galaxies: data
	};
	res.send(render(req.url, initialProps));
});

app.get('/{*splat}', (req: Request, res: Response) => {
	res.send(render(req.url));
});

app.listen(config.PORT, () => {
	console.log(`Listening in http://localhost:${config.PORT}`);
});