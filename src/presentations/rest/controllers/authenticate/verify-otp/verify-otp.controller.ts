// VerifyOTPController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { VerifyOTPRepository } from '../../../../../infrastructures/repositories/authenticate';
import { IVerifyOTP } from '../../../../../domains/authenticate';
import { VerifyOTPUseCase } from '../../../../../applications/authenticate';

@injectable()
export class VerifyOTPController extends BaseController<IVerifyOTP, VerifyOTPRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_USECASE) useCase: VerifyOTPUseCase) {
        super(useCase);
    }
}
