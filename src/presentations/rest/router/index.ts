/**
 * src/presentations/rest/router/index.ts
 *
 * Main Rest API Router
 * Consists of all API Routes
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */

import express from 'express';

// ** Routes
import { healthCheckRoutes } from './healthcheck/healthcheck.route';
import { currencyRoutes } from './countries/currency/currency.routes';

export const routes = express.Router();

routes.use([
	healthCheckRoutes,
	currencyRoutes
]);
