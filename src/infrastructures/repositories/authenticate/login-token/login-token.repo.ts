// UserLoginTokenRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { IUserLoginToken, IUserLoginTokenRepository } from "../../../../domains/authenticate";

@injectable()
class UserLoginTokenRepository extends BaseRepository<IUserLoginToken> implements IUserLoginTokenRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.USER_LOGIN_TOKENS_TABLE);
    }
}

export { UserLoginTokenRepository }