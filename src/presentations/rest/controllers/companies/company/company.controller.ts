// CompanyController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { CompanyRepository } from '../../../../../infrastructures/repositories/companies';
import { ICompany } from '../../../../../domains/companies';
import { CompanyUseCase } from '../../../../../applications/companies';

@injectable()
export class CompanyController extends BaseController<ICompany, CompanyRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.COMPANY_USECASE) useCase: CompanyUseCase) {
        super(useCase);
    }
}
