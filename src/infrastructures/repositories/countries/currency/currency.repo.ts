// CurrencyRepository.ts
import { Prisma, PrismaClient, currencies } from "@prisma/client";
import { BaseRepository } from "../../../../core/repository/base.repo";
import { ICurrencyRepository } from "../../../../domains/countries/currency/currency-repo.interface";
import { ICurrency } from "../../../../domains/countries/currency";
import { inject, injectable } from "inversify";
import { EnumDatabaseTables } from "../../../../core/enums";
import db from "../../../databases/models/prisma.model";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../core/types/interceptors.types";
import { IQueryOptions } from "../../../../core/interfaces";

@injectable()
class CurrencyRepository extends BaseRepository<ICurrency> implements ICurrencyRepository {

    constructor(
		@inject(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB) prisma: PrismaClient) {
        super(prisma, EnumDatabaseTables.CURRENCIES_TABLE);
    }
}

export { CurrencyRepository }