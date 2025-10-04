import React from "react";
import { App } from "../../app/containers/App";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { template } from "./template";
import { ServerStyleSheet } from "styled-components";

export const render = (url: string, initialProps = {}) => {
	try {
		const sheet = new ServerStyleSheet();

		const stream = renderToString(
			// es un string de todo el html de la fc de react
			sheet.collectStyles(
				<StaticRouter location={url}>
					<App />
				</StaticRouter>
			)
		);

		const styleTags = sheet.getStyleTags(); // obtenemos los estilos de styled-components aplicados en la app

		const html = template(url, stream, initialProps, styleTags); // pasamos los estilos al template

		return html;

	} catch (error) {
		console.log(error);
	}
};
