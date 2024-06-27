import { Router } from "express";
import { companyRoutes } from "./company/company.routes";
import { companyCatergoryRoutes } from "./company-category/company-category.routes";
import { authVerifyAccessTokenMiddleware } from "../../middlewares";
import { merchantRoutes } from "./merchant/merchant.routes";

export const companyModuleRoutes: Router = Router();

companyModuleRoutes.use('/companies', authVerifyAccessTokenMiddleware, companyRoutes)
companyModuleRoutes.use('/companies', authVerifyAccessTokenMiddleware, companyCatergoryRoutes)
companyModuleRoutes.use('/companies', authVerifyAccessTokenMiddleware, merchantRoutes)