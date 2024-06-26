// UserSettingRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { IUserSetting, IUserSettingRepository } from "../../../../domains/users";

@injectable()
class UserSettingRepository extends BaseRepository<IUserSetting> implements IUserSettingRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.USER_SETTINGS_TABLE);
    }
}

export { UserSettingRepository }