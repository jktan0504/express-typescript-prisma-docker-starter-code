import { Router } from "express";
import { roleRoutes } from "./role/role.routes";
import { permisisonRoutes } from "./permission/permission.routes";
import { rbacRoutes } from "./rbac/rbac.routes";

export const rbacModuleRoutes: Router = Router();

rbacModuleRoutes.use('/roles', roleRoutes)
rbacModuleRoutes.use('/roles', permisisonRoutes)
rbacModuleRoutes.use('/roles', rbacRoutes)