import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { PermissionController } from '../../../controllers/roles';


export const permisisonRoutes: Router = Router();

const controller = container.get<PermissionController>(
    INTERCEPTOR_TOKENS_TYPES.PERMISSION_CONTROLLER,
);

permisisonRoutes.get(
    '/permission',
    controller.get.bind(controller),
);

permisisonRoutes.get(
    '/permission/:id',
    controller.getByID.bind(controller),
);

permisisonRoutes.post(
    '/permission',
    controller.create.bind(controller),
);

permisisonRoutes.post(
    '/permission/bulk',
    controller.bulkCreate.bind(controller),
);

permisisonRoutes.patch(
    '/permission/:id',
    controller.updateByID.bind(controller),
);

permisisonRoutes.delete(
    '/permission/:id',
    controller.deleteByID.bind(controller),
);

permisisonRoutes.delete(
    '/permission/bulk',
    controller.bulkDelete.bind(controller),
);



