import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { CompanyController } from '../../../controllers/companies';
import { authCheckPermissionMiddleware } from '../../../middlewares';

export const companyRoutes: Router = Router();

const controller = container.get<CompanyController>(
    INTERCEPTOR_TOKENS_TYPES.COMPANY_CONTROLLER,
);

companyRoutes.get(
    '/company',
	authCheckPermissionMiddleware('view_company'),
    controller.get.bind(controller),
);

companyRoutes.get(
    '/company/:id',
    controller.getByID.bind(controller),
);

companyRoutes.post(
    '/company',
    controller.create.bind(controller),
);

companyRoutes.post(
    '/company/bulk',
    controller.bulkCreate.bind(controller),
);

companyRoutes.patch(
    '/company/:id',
    controller.updateByID.bind(controller),
);
companyRoutes.delete(
    '/company/:id',
    controller.deleteByID.bind(controller),
);

companyRoutes.delete(
    '/company/bulk',
    controller.bulkDelete.bind(controller),
);



