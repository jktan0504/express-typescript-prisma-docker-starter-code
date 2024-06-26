import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { MediaController } from '../../../controllers/medias';

export const mediaRoutes: Router = Router();

const controller = container.get<MediaController>(
    INTERCEPTOR_TOKENS_TYPES.MEDIA_CONTROLLER,
);

mediaRoutes.get(
    '/media',
    controller.get.bind(controller),
);

mediaRoutes.get(
    '/media/:id',
    controller.getByID.bind(controller),
);

mediaRoutes.post(
    '/media',
    controller.create.bind(controller),
);

mediaRoutes.post(
    '/media/bulk',
    controller.bulkCreate.bind(controller),
);

mediaRoutes.patch(
    '/media/:id',
    controller.updateByID.bind(controller),
);
mediaRoutes.delete(
    '/media/:id',
    controller.deleteByID.bind(controller),
);

mediaRoutes.delete(
    '/media/bulk',
    controller.bulkDelete.bind(controller),
);



