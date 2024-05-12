/**
 * src/core/enums/interceptors.enum.ts
 *
 * Interceptors Enums
 * Included all interceptors thru this application
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */

export enum ENUM_INTERCEPTOR_TOKENS {
	// Prisma Client
	PRISMA_CLIENT_DB = 'PRISMA_CLIENT_DB',

    // Health Check
	HEALTHCHECK_USECASE = 'HEALTHCHECK_USECASE',
    HEALTHCHECK_CONTROLLER = 'HEALTHCHECK_CONTROLLER',

	// Currency
	CURRRENCY_LOCATOR = 'CURRRENCY_LOCATOR',
	CURRRENCY_USECASE = 'CURRRENCY_USECASE',
	CURRENCY_REPO = 'CURRENCY_REPO',
	CURRENCY_CONTROLLER = 'CURRENCY_CONTROLLER',
}
