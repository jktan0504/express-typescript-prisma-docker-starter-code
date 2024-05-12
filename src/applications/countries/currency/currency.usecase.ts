// CurrencyUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { ICurrency, ICurrencyRepository } from "../../../domains/countries/currency";
import { ICurrencyUseCase } from "../../../domains/countries/currency/currency-usecase.interface";
import { CurrencyRepository } from "../../../infrastructures/repositories/countries/currency/currency.repo";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class CurrencyUseCase extends BaseUseCase<ICurrency, CurrencyRepository> implements ICurrencyUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.CURRENCY_REPO)
        repository: CurrencyRepository,
    ) {
        super(repository);
    }
}

export { CurrencyUseCase } 
