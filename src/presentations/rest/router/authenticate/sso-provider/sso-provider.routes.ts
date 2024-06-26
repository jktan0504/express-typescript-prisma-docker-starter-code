import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { SSOProviderController } from '../../../controllers/authenticate';

export const ssoProviderRoutes: Router = Router();

const controller = container.get<SSOProviderController>(
    INTERCEPTOR_TOKENS_TYPES.AUTH_SSO_PROVIDER_CONTROLLER,
);

ssoProviderRoutes.get(
    '/sso-provider',
    controller.get.bind(controller),
);

ssoProviderRoutes.get(
    '/sso-provider/:id',
    controller.getByID.bind(controller),
);

ssoProviderRoutes.post(
    '/sso-provider',
    controller.create.bind(controller),
);

ssoProviderRoutes.post(
    '/sso-provider/bulk',
    controller.bulkCreate.bind(controller),
);

ssoProviderRoutes.patch(
    '/sso-provider/:id',
    controller.updateByID.bind(controller),
);
ssoProviderRoutes.delete(
    '/sso-provider/:id',
    controller.deleteByID.bind(controller),
);

ssoProviderRoutes.delete(
    '/sso-provider/bulk',
    controller.bulkDelete.bind(controller),
);



