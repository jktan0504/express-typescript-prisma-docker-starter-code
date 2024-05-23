// CountryRepository.ts
import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { ICountryRepository } from "../../../../domains/countries/country/country-repo.interface";
import { ICountry } from "../../../../domains/countries/country";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";

@injectable()
class CountryRepository extends BaseRepository<ICountry> implements ICountryRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.COUNTRIES_TABLE);
    }
}

export { CountryRepository }