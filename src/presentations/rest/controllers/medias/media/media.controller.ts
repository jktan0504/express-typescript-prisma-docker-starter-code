// MediaController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { MediaRepository } from '../../../../../infrastructures/repositories/medias';
import { IMedia } from '../../../../../domains/medias';
import { MediaUseCase } from '../../../../../applications/medias';

@injectable()
export class MediaController extends BaseController<IMedia, MediaRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.MEDIA_USECASE) useCase: MediaUseCase) {
        super(useCase);
    }
}
