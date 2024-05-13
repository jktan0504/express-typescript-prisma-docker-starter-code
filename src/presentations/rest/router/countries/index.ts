import { Router } from "express";
import { currencyRoutes } from "./currency/currency.routes";

export const countryModuleRoutes: Router = Router();

countryModuleRoutes.use('/countries', currencyRoutes)