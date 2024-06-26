// MediaFileController.ts
import { injectable, inject } from "inversify";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { MediaFileRepository } from "../../../../../infrastructures/repositories/medias";
import { IMediaFile } from "../../../../../domains/medias";
import { MediaFileUseCase } from "../../../../../applications/medias";

@injectable()
export class MediaFileController extends BaseController<IMediaFile, MediaFileRepository> {
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_USECASE) useCase: MediaFileUseCase) {
        super(useCase);
    }
}
