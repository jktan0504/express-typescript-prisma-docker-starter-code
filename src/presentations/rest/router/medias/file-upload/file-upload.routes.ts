import { Router } from 'express';
import { container } from '../../../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { FileUploadController, MediaFileController } from '../../../controllers/medias';

export const fileUploadRoutes: Router = Router();

const controller = container.get<FileUploadController>(
    INTERCEPTOR_TOKENS_TYPES.FILE_UPLOAD_CONTROLLER,
);

fileUploadRoutes.post(
    '/request/file-upload-secure-url',
    controller.mediaGenerateSecureSignedUrl.bind(controller),
);


