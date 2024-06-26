import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { CountryController } from '../../../controllers/countries';

export const countryRoutes: Router = Router();

const controller = container.get<CountryController>(
    INTERCEPTOR_TOKENS_TYPES.COUNTRY_CONTROLLER,
);

countryRoutes.get(
    '/country',
    controller.get.bind(controller),
);

countryRoutes.get(
    '/country/:id',
    controller.getByID.bind(controller),
);

countryRoutes.post(
    '/country',
    controller.create.bind(controller),
);

countryRoutes.post(
    '/country/bulk',
    controller.bulkCreate.bind(controller),
);

countryRoutes.patch(
    '/country/:id',
    controller.updateByID.bind(controller),
);

countryRoutes.delete(
    '/country/:id',
    controller.deleteByID.bind(controller),
);

countryRoutes.delete(
    '/country/bulk',
    controller.bulkDelete.bind(controller),
);



