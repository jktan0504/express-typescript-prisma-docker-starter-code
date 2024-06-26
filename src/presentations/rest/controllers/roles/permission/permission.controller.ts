// PermissionController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { PermissionRepository } from '../../../../../infrastructures/repositories/roles';
import { IPermission } from '../../../../../domains/roles';
import { PermissionUseCase } from '../../../../../applications/roles';

@injectable()
export class PermissionController extends BaseController<IPermission, PermissionRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.PERMISSION_USECASE) useCase: PermissionUseCase) {
        super(useCase);
    }
}
