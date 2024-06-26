import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { RoleController } from '../../../controllers/roles';

export const roleRoutes: Router = Router();

const controller = container.get<RoleController>(
    INTERCEPTOR_TOKENS_TYPES.ROLE_CONTROLLER,
);

roleRoutes.get(
    '/role',
    controller.get.bind(controller),
);

roleRoutes.get(
    '/role/:id',
    controller.getByID.bind(controller),
);

roleRoutes.post(
    '/role',
    controller.create.bind(controller),
);

roleRoutes.post(
    '/role/bulk',
    controller.bulkCreate.bind(controller),
);

roleRoutes.patch(
    '/role/:id',
    controller.updateByID.bind(controller),
);
roleRoutes.delete(
    '/role/:id',
    controller.deleteByID.bind(controller),
);

roleRoutes.delete(
    '/role/bulk',
    controller.bulkDelete.bind(controller),
);



