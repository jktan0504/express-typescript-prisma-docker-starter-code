import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { UserDetailController } from '../../../controllers/users';

export const userDetailRoutes: Router = Router();

const controller = container.get<UserDetailController>(
    INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_CONTROLLER,
);

userDetailRoutes.get(
    '/user-detail',
    controller.get.bind(controller),
);

userDetailRoutes.get(
    '/user-detail/:id',
    controller.getByID.bind(controller),
);

userDetailRoutes.post(
    '/user-detail',
    controller.create.bind(controller),
);

userDetailRoutes.post(
    '/user-detail/bulk',
    controller.bulkCreate.bind(controller),
);

userDetailRoutes.patch(
    '/user-detail/:id',
    controller.updateByID.bind(controller),
);
userDetailRoutes.delete(
    '/user-detail/:id',
    controller.deleteByID.bind(controller),
);

userDetailRoutes.delete(
    '/user-detail/bulk',
    controller.bulkDelete.bind(controller),
);



