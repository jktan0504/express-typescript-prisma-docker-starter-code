// CompanyCategoryRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { ICompanyCategory, ICompanyCategoryRepository } from "../../../../domains/companies";

@injectable()
class CompanyCategoryRepository extends BaseRepository<ICompanyCategory> implements ICompanyCategoryRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.COMPANY_CATEGORIES_TABLE);
    }
}

export { CompanyCategoryRepository }