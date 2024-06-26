// SSOProviderRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { ISSOProvider, ISSOProviderRepository } from "../../../../domains/authenticate";

@injectable()
class SSOProviderRepository extends BaseRepository<ISSOProvider> implements ISSOProviderRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.SSO_AUTH_PROVIDERS_TABLE);
    }
}

export { SSOProviderRepository }