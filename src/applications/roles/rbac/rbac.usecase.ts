// RBACUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { RBACRepository } from "../../../infrastructures/repositories/roles";
import { IRBAC, IRBACUseCase } from "../../../domains/roles";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class RBACUseCase extends BaseUseCase<IRBAC, RBACRepository> implements IRBACUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.RBAC_REPO)
        repository: RBACRepository,
    ) {
        super(repository);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IRBAC[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				role: true,
				permission: true
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IRBAC[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				role: true,
				permission: true
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IRBAC> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				role: true,
				permission: true
			}
		});
    }
}

export { RBACUseCase } 
