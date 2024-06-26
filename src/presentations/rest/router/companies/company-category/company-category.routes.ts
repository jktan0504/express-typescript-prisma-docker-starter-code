import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { CompanyCategoryController } from '../../../controllers/companies';


export const companyCatergoryRoutes: Router = Router();

const controller = container.get<CompanyCategoryController>(
    INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_CONTROLLER,
);

companyCatergoryRoutes.get(
    '/company-category',
    controller.get.bind(controller),
);

companyCatergoryRoutes.get(
    '/company-category/:id',
    controller.getByID.bind(controller),
);

companyCatergoryRoutes.post(
    '/company-category',
    controller.create.bind(controller),
);

companyCatergoryRoutes.post(
    '/company-category/bulk',
    controller.bulkCreate.bind(controller),
);

companyCatergoryRoutes.patch(
    '/company-category/:id',
    controller.updateByID.bind(controller),
);

companyCatergoryRoutes.delete(
    '/company-category/:id',
    controller.deleteByID.bind(controller),
);

companyCatergoryRoutes.delete(
    '/company-category/bulk',
    controller.bulkDelete.bind(controller),
);



