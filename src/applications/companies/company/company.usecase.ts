// CompanyUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IPagination, IQueryOptions } from "../../../core/interfaces/common-interface";
import { ICompany, ICompanyUseCase } from "../../../domains/companies";
import { CompanyRepository } from "../../../infrastructures/repositories/companies";

@injectable()
class CompanyUseCase extends BaseUseCase<ICompany, CompanyRepository> implements ICompanyUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.COMPANY_REPO)
        repository: CompanyRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<ICompany[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				company_category: true
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: ICompany[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				company_category: true
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<ICompany> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				company_category: true
			}
		});
    }
}

export { CompanyUseCase } 
