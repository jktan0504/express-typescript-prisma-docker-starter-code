import { Router } from "express";
import { companyRoutes } from "./company/company.routes";
import { companyCatergoryRoutes } from "./company-category/company-category.routes";
import { authVerifyAccessTokenMiddleware } from "../../middlewares";

export const companyModuleRoutes: Router = Router();

companyModuleRoutes.use('/companies', authVerifyAccessTokenMiddleware, companyRoutes)
companyModuleRoutes.use('/companies', authVerifyAccessTokenMiddleware, companyCatergoryRoutes)