// VerifyOTPUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IVerifyOTP, IVerifyOTPUseCase } from "../../../domains/authenticate";
import { VerifyOTPRepository } from "../../../infrastructures/repositories/authenticate";
import { generateRandomNumber } from "../../../core/utils/generator";

@injectable()
class VerifyOTPUseCase extends BaseUseCase<IVerifyOTP, VerifyOTPRepository> implements IVerifyOTPUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.AUTH_VERIFY_OTP_REPO)
        repository: VerifyOTPRepository,
    ) {
        super(repository, false);
    }

	// Override
	create = async (entity: IVerifyOTP): Promise<IVerifyOTP> => {
		if (typeof entity.otp === 'undefined' || typeof entity.otp === null) {
			entity.otp = generateRandomNumber(6)
		}
		entity.created_at = new Date();
		entity.updated_at = new Date();
		return await this.repository.create(entity);
    }
}

export { VerifyOTPUseCase } 
