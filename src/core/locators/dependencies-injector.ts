/**
 * src/core/di/dependcies-injector.ts
 *
 * Dependencies Injection uses Inversity
 * Interacts with Repositories & Usecases layers
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */
import { Container } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../types/interceptors.types";
import { HealthCheckUsecase } from "../../applications/healthcheck";
import { HealthCheckController } from "../../presentations/rest/controllers/healthcheck/healthcheck.controller";
import { ICurrencyRepository } from "../../domains/countries/currency/currency-repo.interface";
import { CurrencyRepository } from "../../infrastructures/repositories/countries/currency/currency.repo";
import { ICurrencyUseCase } from "../../domains/countries/currency/currency-usecase.interface";
import { CurrencyUseCase } from "../../applications/countries/currency/currency.usecase";
import { CurrencyController } from "../../presentations/rest/controllers/countries/currency/currency.controller";
import { PrismaClient } from "@prisma/client";
import db from "../../infrastructures/databases/models/prisma.model";
import { ICountryRepository, ICountryUseCase } from "../../domains/countries/country";
import { CountryRepository } from "../../infrastructures/repositories/countries/country/country.repo";
import { CountryUseCase } from "../../applications/countries/country/country.usecase";
import { CountryController } from "../../presentations/rest/controllers/countries/country/country.controller";

/**
 * Initial Container
 */
const container = new Container();

/**
 * Prisma Client
 */
container.bind<PrismaClient>(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB).toConstantValue(db);

/**
 * Bind for All Repositories
 */
// Currency
container.bind<ICurrencyRepository>(INTERCEPTOR_TOKENS_TYPES.CURRENCY_REPO).to(CurrencyRepository)
// Country
container.bind<ICountryRepository>(INTERCEPTOR_TOKENS_TYPES.COUNTRY_REPO).to(CountryRepository)

/**
 * Bind for All UseCases 
 */
// Healthcheck Usecase
container.bind(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_USECASE).to(HealthCheckUsecase);
// Currency Usecase
container.bind<ICurrencyUseCase>(INTERCEPTOR_TOKENS_TYPES.CURRENCY_USECASE).to(CurrencyUseCase)
// Country Usecase
container.bind<ICountryUseCase>(INTERCEPTOR_TOKENS_TYPES.COUNTRY_USECASE).to(CountryUseCase)

/**
 * Bind for All Controllers 
 */
// HealthCheck Controller
container.bind(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_CONTROLLER).to(HealthCheckController);
// Currency Controller
container.bind(INTERCEPTOR_TOKENS_TYPES.CURRENCY_CONTROLLER).to(CurrencyController);
// Country Controller
container.bind(INTERCEPTOR_TOKENS_TYPES.COUNTRY_CONTROLLER).to(CountryController);

export { container };