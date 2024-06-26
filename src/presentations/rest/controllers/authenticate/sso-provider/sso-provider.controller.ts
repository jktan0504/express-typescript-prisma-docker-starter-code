// SSOProviderController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { SSOProviderRepository } from '../../../../../infrastructures/repositories/authenticate';
import { ISSOProvider } from '../../../../../domains/authenticate';
import { SSOProviderUseCase } from '../../../../../applications/authenticate';

@injectable()
export class SSOProviderController extends BaseController<ISSOProvider, SSOProviderRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.AUTH_SSO_PROVIDER_USECASE) useCase: SSOProviderUseCase) {
        super(useCase);
    }
}
