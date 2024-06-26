// RBACController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { RBACRepository } from '../../../../../infrastructures/repositories/roles';
import { IRBAC } from '../../../../../domains/roles';
import { RBACUseCase } from '../../../../../applications/roles';

@injectable()
export class RBACController extends BaseController<IRBAC, RBACRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.RBAC_USECASE) useCase: RBACUseCase) {
        super(useCase);
    }
}
