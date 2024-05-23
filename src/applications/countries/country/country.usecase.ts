// CountryUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { ICountry } from "../../../domains/countries/country";
import { ICountryUseCase } from "../../../domains/countries/country/country-usecase.interface";
import { CountryRepository } from "../../../infrastructures/repositories/countries/country/country.repo";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IQueryOptions } from "../../../core/interfaces/common-interface";

@injectable()
class CountryUseCase extends BaseUseCase<ICountry, CountryRepository> implements ICountryUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.COUNTRY_REPO)
        repository: CountryRepository,
    ) {
        super(repository);
    }

	/**
	 * JUST SOME EXAMPLES 
	 */
	getAllCountriesWithCurrency = async (query?: IQueryOptions) => {
        return await this.getAll({ ...query, include: { currency: true } });
    };

	getCountriesWithCurrency = async (query: IQueryOptions) => {
        return await this.getBy({ ...query, include: { currency: true } });
    };

	getCountryByIdWithCurrency = async (id: bigint) => {
        return await this.getByID(id, { include: { currency: true } });
    };
}

export { CountryUseCase } 
