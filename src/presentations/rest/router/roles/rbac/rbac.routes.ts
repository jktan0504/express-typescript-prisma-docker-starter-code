import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { RBACController } from '../../../controllers/roles';

export const rbacRoutes: Router = Router();

const controller = container.get<RBACController>(
    INTERCEPTOR_TOKENS_TYPES.RBAC_CONTROLLER,
);

rbacRoutes.get(
    '/rbac',
    controller.get.bind(controller),
);

rbacRoutes.get(
    '/rbac/:id',
    controller.getByID.bind(controller),
);

rbacRoutes.post(
    '/rbac',
    controller.create.bind(controller),
);

rbacRoutes.post(
    '/rbac/bulk',
    controller.bulkCreate.bind(controller),
);

rbacRoutes.patch(
    '/rbac/:id',
    controller.updateByID.bind(controller),
);
rbacRoutes.delete(
    '/rbac/:id',
    controller.deleteByID.bind(controller),
);

rbacRoutes.delete(
    '/rbac/bulk',
    controller.bulkDelete.bind(controller),
);



