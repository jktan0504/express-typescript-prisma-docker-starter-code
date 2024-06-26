import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { UserSettingController } from '../../../controllers/users';

export const userSettingRoutes: Router = Router();

const controller = container.get<UserSettingController>(
    INTERCEPTOR_TOKENS_TYPES.USER_SETTING_CONTROLLER,
);

userSettingRoutes.get(
    '/user-setting',
    controller.get.bind(controller),
);

userSettingRoutes.get(
    '/user-setting/:id',
    controller.getByID.bind(controller),
);

userSettingRoutes.post(
    '/user-setting',
    controller.create.bind(controller),
);

userSettingRoutes.post(
    '/user-setting/bulk',
    controller.bulkCreate.bind(controller),
);

userSettingRoutes.patch(
    '/user-setting/:id',
    controller.updateByID.bind(controller),
);
userSettingRoutes.delete(
    '/user-setting/:id',
    controller.deleteByID.bind(controller),
);

userSettingRoutes.delete(
    '/user-setting/bulk',
    controller.bulkDelete.bind(controller),
);



