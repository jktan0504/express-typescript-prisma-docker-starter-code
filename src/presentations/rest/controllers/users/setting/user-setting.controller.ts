// UserSettingController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { UserSettingRepository } from '../../../../../infrastructures/repositories/users';
import { IUserSetting } from '../../../../../domains/users';
import { UserSettingUseCase } from '../../../../../applications/users';

@injectable()
export class UserSettingController extends BaseController<IUserSetting, UserSettingRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.USER_SETTING_USECASE) useCase: UserSettingUseCase) {
        super(useCase);
    }
}
