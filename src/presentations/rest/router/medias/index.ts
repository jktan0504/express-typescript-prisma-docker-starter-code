import { Router } from "express";
import { mediaRoutes } from "./media/media.routes";
import { mediaFileRoutes } from "./media-file/media-file.routes";
import { fileUploadRoutes } from "./file-upload/file-upload.routes";

export const mediaModuleRoutes: Router = Router();

mediaModuleRoutes.use('/medias', mediaRoutes)
mediaModuleRoutes.use('/medias', mediaFileRoutes)
mediaModuleRoutes.use('/medias', fileUploadRoutes)