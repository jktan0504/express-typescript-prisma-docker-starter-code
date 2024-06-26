import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { UserLoginTokenController } from '../../../controllers/authenticate';

export const userLoginTokenRoutes: Router = Router();

const controller = container.get<UserLoginTokenController>(
    INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_CONTROLLER,
);

userLoginTokenRoutes.get(
    '/login-token',
    controller.get.bind(controller),
);

userLoginTokenRoutes.get(
    '/login-token/:id',
    controller.getByID.bind(controller),
);

userLoginTokenRoutes.post(
    '/login-token',
    controller.create.bind(controller),
);

userLoginTokenRoutes.post(
    '/login-token/bulk',
    controller.bulkCreate.bind(controller),
);

userLoginTokenRoutes.patch(
    '/login-token/:id',
    controller.updateByID.bind(controller),
);
userLoginTokenRoutes.delete(
    '/login-token/:id',
    controller.deleteByID.bind(controller),
);

userLoginTokenRoutes.delete(
    '/login-token/bulk',
    controller.bulkDelete.bind(controller),
);



