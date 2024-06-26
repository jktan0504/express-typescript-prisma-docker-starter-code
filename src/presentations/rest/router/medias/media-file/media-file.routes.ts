import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { MediaFileController } from '../../../controllers/medias';

export const mediaFileRoutes: Router = Router();

const controller = container.get<MediaFileController>(
    INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_CONTROLLER,
);

mediaFileRoutes.get(
    '/media-file',
    controller.get.bind(controller),
);

mediaFileRoutes.get(
    '/media-file/:id',
    controller.getByID.bind(controller),
);

mediaFileRoutes.post(
    '/media-file',
    controller.create.bind(controller),
);

mediaFileRoutes.post(
    '/media-file/bulk',
    controller.bulkCreate.bind(controller),
);

mediaFileRoutes.patch(
    '/media-file/:id',
    controller.updateByID.bind(controller),
);

mediaFileRoutes.delete(
    '/media-file/:id',
    controller.deleteByID.bind(controller),
);

mediaFileRoutes.delete(
    '/media-file/bulk',
    controller.bulkDelete.bind(controller),
);



