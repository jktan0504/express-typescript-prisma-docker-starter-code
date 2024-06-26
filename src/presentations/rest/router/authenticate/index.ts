import { Router } from "express";
import { ssoProviderRoutes } from "./sso-provider/sso-provider.routes";
import { userLoginTokenRoutes } from "./login-token/login-token.routes";
import { passwordResetTokenRoutes } from "./password-reset/password-reset.routes";
import { verifyOTPRoutes } from "./verify-otp/verify-otp.routes";
import { authRoutes } from "./auth/auth.routes";

export const authModuleRoutes: Router = Router();

authModuleRoutes.use('/auth', authRoutes)
// authModuleRoutes.use('/auth', ssoProviderRoutes)
authModuleRoutes.use('/auth', userLoginTokenRoutes)
authModuleRoutes.use('/auth', passwordResetTokenRoutes)
authModuleRoutes.use('/auth', verifyOTPRoutes)