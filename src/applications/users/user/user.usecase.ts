// UserUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IUser, IUserUseCase } from "../../../domains/users";
import { UserRepository } from "../../../infrastructures/repositories/users";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class UserUseCase extends BaseUseCase<IUser, UserRepository> implements IUserUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.USER_REPO)
        repository: UserRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IUser[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				user_details: true,
				role: true,
				company: true,
				merchant: true,
				referral: true,
				referral_code: true,
				sso_auth_provider: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IUser[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				user_details: true,
				role: true,
				company: true,
				merchant: true,
				referral: true,
				referral_code: true,
				sso_auth_provider: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IUser> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				user_details: true,
				role: true,
				company: true,
				merchant: true,
				referral: true,
				referral_code: true,
				sso_auth_provider: true,
			}
		});
    }

}

export { UserUseCase } 
