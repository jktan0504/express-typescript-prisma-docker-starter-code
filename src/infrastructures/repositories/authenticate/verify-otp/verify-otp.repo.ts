// VerifyOTPRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { IVerifyOTP, IVerifyOTPRepository } from "../../../../domains/authenticate";

@injectable()
class VerifyOTPRepository extends BaseRepository<IVerifyOTP> implements IVerifyOTPRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.VERIFY_OTPS_TABLE);
    }
}

export { VerifyOTPRepository }