import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { AuthController } from '../../../controllers/authenticate';

export const authRoutes: Router = Router();

const controller = container.get<AuthController>(
    INTERCEPTOR_TOKENS_TYPES.AUTH_CONTROLLER,
);

authRoutes.post(
    '/login',
    controller.authLogin.bind(controller),
);

authRoutes.post(
    '/request/otp',
    controller.authRequestOTP.bind(controller),
);

authRoutes.post(
    '/verify/otp',
    controller.authVerifyOTP.bind(controller),
);





