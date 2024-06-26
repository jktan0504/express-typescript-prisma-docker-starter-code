// UserSettingUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IUserSetting, IUserSettingUseCase } from "../../../domains/users";
import { UserSettingRepository } from "../../../infrastructures/repositories/users";
import { genId, generateRandomCode } from "../../../core/utils/generator";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class UserSettingUseCase extends BaseUseCase<IUserSetting, UserSettingRepository> implements IUserSettingUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.USER_SETTING_REPO)
        repository: UserSettingRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IUserSetting[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				user: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IUserSetting[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				user: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IUserSetting> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				user: true,
			}
		});
    }
}

export { UserSettingUseCase } 
