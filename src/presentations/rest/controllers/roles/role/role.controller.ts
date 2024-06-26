// RoleController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { RoleRepository } from '../../../../../infrastructures/repositories/roles';
import { IRole } from '../../../../../domains/roles';
import { RoleUseCase } from '../../../../../applications/roles';

@injectable()
export class RoleController extends BaseController<IRole, RoleRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.ROLE_USECASE) useCase: RoleUseCase) {
        super(useCase);
    }
}
