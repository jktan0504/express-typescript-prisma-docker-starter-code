import { Router } from "express";
import { currencyRoutes } from "./currency/currency.routes";
import { countryRoutes } from "./country/country.routes";

export const countryModuleRoutes: Router = Router();

countryModuleRoutes.use('/countries', currencyRoutes)
countryModuleRoutes.use('/countries', countryRoutes)