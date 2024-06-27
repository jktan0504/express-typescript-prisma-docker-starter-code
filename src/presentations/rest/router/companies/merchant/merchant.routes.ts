import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { MerchantController } from '../../../controllers/companies';

export const merchantRoutes: Router = Router();

const controller = container.get<MerchantController>(
    INTERCEPTOR_TOKENS_TYPES.MERCHANT_CONTROLLER,
);

merchantRoutes.get(
    '/merchant',
    controller.get.bind(controller),
);

merchantRoutes.get(
    '/merchant/:id',
    controller.getByID.bind(controller),
);

merchantRoutes.post(
    '/merchant',
    controller.create.bind(controller),
);

merchantRoutes.post(
    '/merchant/bulk',
    controller.bulkCreate.bind(controller),
);

merchantRoutes.patch(
    '/merchant/:id',
    controller.updateByID.bind(controller),
);
merchantRoutes.delete(
    '/merchant/:id',
    controller.deleteByID.bind(controller),
);

merchantRoutes.delete(
    '/merchant/bulk',
    controller.bulkDelete.bind(controller),
);



