import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './containers/App';
import './assets/favicon.ico'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('app');
// const root = createRoot(container)

hydrateRoot( container,
	<BrowserRouter>
		<App />
	</BrowserRouter>
);