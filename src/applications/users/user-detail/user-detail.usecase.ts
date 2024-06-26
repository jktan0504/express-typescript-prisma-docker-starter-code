// UserDetailUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IUserDetail, IUserDetailUseCase } from "../../../domains/users";
import { UserDetailRepository } from "../../../infrastructures/repositories/users";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class UserDetailUseCase extends BaseUseCase<IUserDetail, UserDetailRepository> implements IUserDetailUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_REPO)
        repository: UserDetailRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IUserDetail[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				contact_country: true,
				avatar: true,
				address_country: true,
				currency: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IUserDetail[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				contact_country: true,
				avatar: true,
				address_country: true,
				currency: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IUserDetail> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				contact_country: true,
				avatar: true,
				address_country: true,
				currency: true,
			}
		});
    }

}

export { UserDetailUseCase } 
