import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { CurrencyRepository } from "../../../infrastructures/repositories/countries/currency/currency.repo";
import { CurrencyUseCase } from "./currency.usecase";


@injectable()
class CurrencyLocator {
	constructor(@inject(INTERCEPTOR_TOKENS_TYPES.CURRENCY_REPO)
                private readRepository: CurrencyRepository) { }

    public GetCurrencyUseCase() {
        return new CurrencyUseCase(this.readRepository);
    }
}

export default CurrencyLocator