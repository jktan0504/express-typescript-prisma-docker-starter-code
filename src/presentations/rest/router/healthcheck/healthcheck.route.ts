import { Router } from 'express';
import { Container } from 'inversify';
import { INTERCEPTOR_TYPES } from '../../../../core/types/interceptors.types';
import { HealthCheckUsecase } from '../../../../applications/healthcheck';
import { HealthCheckController } from '../../controllers/healthcheck/healthcheck.controller';

const container = new Container();
container.bind(INTERCEPTOR_TYPES.HEALTHCHECK_USECASE).to(HealthCheckUsecase);
container
    .bind(INTERCEPTOR_TYPES.HEALTHCHECK_CONTROLLER)
    .to(HealthCheckController);

export const healthCheckRoutes: Router = Router();

const controller = container.get<HealthCheckController>(
    INTERCEPTOR_TYPES.HEALTHCHECK_CONTROLLER,
);

healthCheckRoutes.get(
    '/healthcheck',
    controller.GetHealthCheck.bind(controller),
);
