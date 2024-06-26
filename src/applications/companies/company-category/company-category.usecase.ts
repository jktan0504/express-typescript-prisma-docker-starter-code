// CompanyCategoryUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { CompanyCategoryRepository } from "../../../infrastructures/repositories/companies";
import { ICompanyCategory, ICompanyCategoryUseCase } from "../../../domains/companies";

@injectable()
class CompanyCategoryUseCase extends BaseUseCase<ICompanyCategory, CompanyCategoryRepository> implements ICompanyCategoryUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.COMPANY_CATEGORY_REPO)
        repository: CompanyCategoryRepository,
    ) {
        super(repository);
    }
}

export { CompanyCategoryUseCase } 
