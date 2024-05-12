import { Router } from 'express';
import { HealthCheckController } from '../../controllers/healthcheck/healthcheck.controller';
import { container } from '../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../core/types/interceptors.types';

export const healthCheckRoutes: Router = Router();

const controller = container.get<HealthCheckController>(
    INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_CONTROLLER,
);

healthCheckRoutes.get(
    '/healthcheck',
    controller.GetHealthCheck.bind(controller),
);
