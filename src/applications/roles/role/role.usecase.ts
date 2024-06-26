// RoleUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IRole, IRoleUseCase } from "../../../domains/roles";
import { RoleRepository } from "../../../infrastructures/repositories/roles";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class RoleUseCase extends BaseUseCase<IRole, RoleRepository> implements IRoleUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.ROLE_REPO)
        repository: RoleRepository,
    ) {
        super(repository);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IRole[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				company: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IRole[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				company: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IRole> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				company: true,
			}
		});
    }
}

export { RoleUseCase } 
