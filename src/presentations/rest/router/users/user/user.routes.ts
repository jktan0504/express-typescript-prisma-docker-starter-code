import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { UserController } from '../../../controllers/users';

export const userRoutes: Router = Router();

const controller = container.get<UserController>(
    INTERCEPTOR_TOKENS_TYPES.USER_CONTROLLER,
);

userRoutes.get(
    '/user',
    controller.get.bind(controller),
);

userRoutes.get(
    '/user/:id',
    controller.getByID.bind(controller),
);

userRoutes.post(
    '/user',
    controller.create.bind(controller),
);

userRoutes.post(
    '/user/bulk',
    controller.bulkCreate.bind(controller),
);

userRoutes.patch(
    '/user/:id',
    controller.updateByID.bind(controller),
);
userRoutes.delete(
    '/user/:id',
    controller.deleteByID.bind(controller),
);

userRoutes.delete(
    '/user/bulk',
    controller.bulkDelete.bind(controller),
);



