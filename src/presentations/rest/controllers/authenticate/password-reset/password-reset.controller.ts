// PasswordResetTokenController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { PasswordResetTokenRepository } from '../../../../../infrastructures/repositories/authenticate';
import { IPasswordResetToken } from '../../../../../domains/authenticate';
import { PasswordResetTokenUseCase } from '../../../../../applications/authenticate';

@injectable()
export class PasswordResetTokenController extends BaseController<IPasswordResetToken, PasswordResetTokenRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.AUTH_FORGET_PASSWORD_USECASE) useCase: PasswordResetTokenUseCase) {
        super(useCase);
    }
}
