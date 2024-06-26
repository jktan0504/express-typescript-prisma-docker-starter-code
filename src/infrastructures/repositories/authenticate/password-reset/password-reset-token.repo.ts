// PasswordResetTokenRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { IPasswordResetToken, IPasswordResetTokenRepository } from "../../../../domains/authenticate";

@injectable()
class PasswordResetTokenRepository extends BaseRepository<IPasswordResetToken> implements IPasswordResetTokenRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.PASSWORD_RESET_TOKENS_TABLE);
    }
}

export { PasswordResetTokenRepository }