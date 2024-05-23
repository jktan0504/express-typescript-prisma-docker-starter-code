// CurrencyController.ts
import { injectable, inject } from "inversify";
import { CurrencyUseCase } from "../../../../../applications/countries/currency/currency.usecase";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { ICurrency } from "../../../../../domains/countries/currency/currency.interface"; // Check this import
import { CurrencyRepository } from "../../../../../infrastructures/repositories/countries/currency/currency.repo"; // Check this import

@injectable()
export class CurrencyController extends BaseController<ICurrency, CurrencyRepository> {
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.CURRENCY_USECASE) useCase: CurrencyUseCase) {
        super(useCase);
    }
}
