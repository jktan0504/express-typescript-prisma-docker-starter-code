// PasswordResetTokenUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IPasswordResetToken, IPasswordResetTokenUseCase } from "../../../domains/authenticate";
import { PasswordResetTokenRepository } from "../../../infrastructures/repositories/authenticate";
import { generateRandomCode } from "../../../core/utils/generator";

@injectable()
class PasswordResetTokenUseCase extends BaseUseCase<IPasswordResetToken, PasswordResetTokenRepository> implements IPasswordResetTokenUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.AUTH_FORGET_PASSWORD_REPO)
        repository: PasswordResetTokenRepository,
    ) {
        super(repository, false);
    }

	// Override
	create = async (entity: IPasswordResetToken): Promise<IPasswordResetToken> => {

		if (typeof entity.token === 'undefined' || typeof entity.token === null) {
			entity.token = generateRandomCode(12)
		}
		entity.created_at = new Date();
		entity.updated_at = new Date();
		return await this.repository.create(entity);
    }
}

export { PasswordResetTokenUseCase } 
