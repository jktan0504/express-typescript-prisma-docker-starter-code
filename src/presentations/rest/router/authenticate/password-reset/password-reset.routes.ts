import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { PasswordResetTokenController } from '../../../controllers/authenticate';

export const passwordResetTokenRoutes: Router = Router();

const controller = container.get<PasswordResetTokenController>(
    INTERCEPTOR_TOKENS_TYPES.AUTH_FORGET_PASSWORD_CONTROLLER,
);

passwordResetTokenRoutes.get(
    '/forget-passord',
    controller.get.bind(controller),
);

passwordResetTokenRoutes.get(
    '/forget-passord/:id',
    controller.getByID.bind(controller),
);

passwordResetTokenRoutes.post(
    '/forget-passord',
    controller.create.bind(controller),
);

passwordResetTokenRoutes.post(
    '/forget-passord/bulk',
    controller.bulkCreate.bind(controller),
);

passwordResetTokenRoutes.patch(
    '/forget-passord/:id',
    controller.updateByID.bind(controller),
);
passwordResetTokenRoutes.delete(
    '/forget-passord/:id',
    controller.deleteByID.bind(controller),
);

passwordResetTokenRoutes.delete(
    '/forget-passord/bulk',
    controller.bulkDelete.bind(controller),
);



