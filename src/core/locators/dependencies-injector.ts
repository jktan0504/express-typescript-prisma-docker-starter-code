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

// Initial Container
const container = new Container();

container.bind<PrismaClient>(INTERCEPTOR_TOKENS_TYPES.PRISMA_CLIENT_DB).toConstantValue(db);

/**
 * Bind for All Repositories
 */
container.bind<ICurrencyRepository>(INTERCEPTOR_TOKENS_TYPES.CURRENCY_REPO).to(CurrencyRepository)

/**
 * Bind for All UseCases 
 */
// Healthcheck Usecase
container.bind(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_USECASE).to(HealthCheckUsecase);
container.bind<ICurrencyUseCase>(INTERCEPTOR_TOKENS_TYPES.CURRENCY_USECASE).to(CurrencyUseCase)

/**
 * Bind for All Controllers 
 */
container.bind(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_CONTROLLER).to(HealthCheckController);
container.bind(INTERCEPTOR_TOKENS_TYPES.CURRENCY_CONTROLLER).to(CurrencyController);

export { container };