// CompanyCategoryController.ts
import { injectable, inject } from "inversify";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { CompanyCategoryRepository } from "../../../../../infrastructures/repositories/companies";
import { ICompanyCategory } from "../../../../../domains/companies";
import { CompanyCategoryUseCase } from "../../../../../applications/companies";

@injectable()
export class CompanyCategoryController extends BaseController<ICompanyCategory, CompanyCategoryRepository> {
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.COMPANY_CATEGORY_USECASE) useCase: CompanyCategoryUseCase) {
        super(useCase);
    }
}
