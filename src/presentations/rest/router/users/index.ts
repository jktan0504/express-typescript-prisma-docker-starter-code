import { Router } from "express";
import { referralCodeRoutes } from "./referral-code/referral-code.routes";
import { userDetailRoutes } from "./user-detail/user-detail.routes";
import { userRoutes } from "./user/user.routes";
import { userSettingRoutes } from "./setting/user-setting.routes";

export const usersModuleRoutes: Router = Router();

usersModuleRoutes.use('/users', referralCodeRoutes)
usersModuleRoutes.use('/users', userSettingRoutes)
usersModuleRoutes.use('/users', userDetailRoutes)
usersModuleRoutes.use('/users', userRoutes)