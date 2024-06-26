// ReferralCodeController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { ReferralCodeRepository } from '../../../../../infrastructures/repositories/users';
import { IReferralCode } from '../../../../../domains/users';
import { ReferralCodeUseCase } from '../../../../../applications/users';

@injectable()
export class ReferralCodeController extends BaseController<IReferralCode, ReferralCodeRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.USER_REFERRAL_CODE_USECASE) useCase: ReferralCodeUseCase) {
        super(useCase);
    }
}
