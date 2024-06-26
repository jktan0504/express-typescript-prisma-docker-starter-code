import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { VerifyOTPController } from '../../../controllers/authenticate';

export const verifyOTPRoutes: Router = Router();

const controller = container.get<VerifyOTPController>(
    INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_CONTROLLER,
);

verifyOTPRoutes.get(
    '/verify-otp',
    controller.get.bind(controller),
);

verifyOTPRoutes.get(
    '/verify-otp/:id',
    controller.getByID.bind(controller),
);

verifyOTPRoutes.post(
    '/verify-otp',
    controller.create.bind(controller),
);

verifyOTPRoutes.post(
    '/verify-otp/bulk',
    controller.bulkCreate.bind(controller),
);

verifyOTPRoutes.patch(
    '/verify-otp/:id',
    controller.updateByID.bind(controller),
);
verifyOTPRoutes.delete(
    '/verify-otp/:id',
    controller.deleteByID.bind(controller),
);

verifyOTPRoutes.delete(
    '/verify-otp/bulk',
    controller.bulkDelete.bind(controller),
);



