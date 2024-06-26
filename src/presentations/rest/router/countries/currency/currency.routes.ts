import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { CurrencyController } from '../../../controllers/countries';

export const currencyRoutes: Router = Router();

const controller = container.get<CurrencyController>(
    INTERCEPTOR_TOKENS_TYPES.CURRENCY_CONTROLLER,
);

currencyRoutes.get(
    '/currency',
    controller.get.bind(controller),
);

currencyRoutes.get(
    '/currency/:id',
    controller.getByID.bind(controller),
);

currencyRoutes.post(
    '/currency',
    controller.create.bind(controller),
);

currencyRoutes.post(
    '/currency/bulk',
    controller.bulkCreate.bind(controller),
);

currencyRoutes.patch(
    '/currency/:id',
    controller.updateByID.bind(controller),
);

currencyRoutes.delete(
    '/currency/:id',
    controller.deleteByID.bind(controller),
);

currencyRoutes.delete(
    '/currency/bulk',
    controller.bulkDelete.bind(controller),
);



