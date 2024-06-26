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
import { countryModuleRoutes } from './countries';
import { mediaModuleRoutes } from './medias';
import { companyModuleRoutes } from './companies';
import { rbacModuleRoutes } from './roles';
import { authModuleRoutes } from './authenticate';
import { usersModuleRoutes } from './users';

export const routes = express.Router();

routes.use([
	healthCheckRoutes,
	countryModuleRoutes,
	mediaModuleRoutes,
	companyModuleRoutes,
	rbacModuleRoutes,
	authModuleRoutes,
	usersModuleRoutes,
]);
