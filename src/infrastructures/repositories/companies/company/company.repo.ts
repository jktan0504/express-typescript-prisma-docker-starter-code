// CompanyRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { ICompany, ICompanyRepository } from "../../../../domains/companies";

@injectable()
class CompanyRepository extends BaseRepository<ICompany> implements ICompanyRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.COMPANIES_TABLE);
    }
}

export { CompanyRepository }