import express from 'express';
// ** Routes
import { healthCheckRoutes } from './healthcheck/healthcheck.route';

export const routes = express.Router();

routes.use([
    healthCheckRoutes, 
])