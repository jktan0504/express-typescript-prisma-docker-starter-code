// CountryController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { CountryRepository } from '../../../../../infrastructures/repositories/countries';
import { ICountry } from '../../../../../domains/countries';
import { CountryUseCase } from '../../../../../applications/countries';

@injectable()
export class CountryController extends BaseController<ICountry, CountryRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.COUNTRY_USECASE) useCase: CountryUseCase) {
        super(useCase);
    }
}
