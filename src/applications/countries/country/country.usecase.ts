// CountryUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IPagination, IQueryOptions } from "../../../core/interfaces/common-interface";
import { ICountry, ICountryUseCase } from "../../../domains/countries";
import { CountryRepository } from "../../../infrastructures/repositories/countries";

@injectable()
class CountryUseCase extends BaseUseCase<ICountry, CountryRepository> implements ICountryUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.COUNTRY_REPO)
        repository: CountryRepository,
    ) {
        super(repository);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<ICountry[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				currency: true
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: ICountry[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				currency: true
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<ICountry> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				currency: true
			}
		});
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
