// UserLoginTokenController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { UserLoginTokenRepository } from '../../../../../infrastructures/repositories/authenticate';
import { IUserLoginToken } from '../../../../../domains/authenticate';
import { UserLoginTokenUseCase } from '../../../../../applications/authenticate';

@injectable()
export class UserLoginTokenController extends BaseController<IUserLoginToken, UserLoginTokenRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_USECASE) useCase: UserLoginTokenUseCase) {
        super(useCase);
    }
}
