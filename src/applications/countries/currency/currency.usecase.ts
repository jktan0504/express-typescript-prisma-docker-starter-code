// CurrencyUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { CurrencyRepository } from "../../../infrastructures/repositories/countries";
import { ICurrency, ICurrencyUseCase } from "../../../domains/countries";

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
