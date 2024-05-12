// CurrencyController.ts
import { inject, injectable } from "inversify";
import { CurrencyUseCase } from "../../../../../applications/countries/currency/currency.usecase";

import { ICurrency } from "../../../../../domains/countries/currency";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { CurrencyRepository } from "../../../../../infrastructures/repositories/countries/currency/currency.repo";

@injectable()
export class CurrencyController extends BaseController<ICurrency, CurrencyRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.CURRENCY_USECASE) useCase: CurrencyUseCase) {
        super(useCase);
    }
}
