import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { ReferralCodeController } from '../../../controllers/users';

export const referralCodeRoutes: Router = Router();

const controller = container.get<ReferralCodeController>(
    INTERCEPTOR_TOKENS_TYPES.USER_REFERRAL_CODE_CONTROLLER,
);

referralCodeRoutes.get(
    '/referral-code',
    controller.get.bind(controller),
);

referralCodeRoutes.get(
    '/referral-code/:id',
    controller.getByID.bind(controller),
);

referralCodeRoutes.post(
    '/referral-code',
    controller.create.bind(controller),
);

referralCodeRoutes.post(
    '/referral-code/bulk',
    controller.bulkCreate.bind(controller),
);

referralCodeRoutes.patch(
    '/referral-code/:id',
    controller.updateByID.bind(controller),
);
referralCodeRoutes.delete(
    '/referral-code/:id',
    controller.deleteByID.bind(controller),
);

referralCodeRoutes.delete(
    '/referral-code/bulk',
    controller.bulkDelete.bind(controller),
);



