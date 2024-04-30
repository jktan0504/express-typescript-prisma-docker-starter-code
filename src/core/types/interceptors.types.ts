import { EnumInterceptors } from '../enums/interceptors.enum';

export const INTERCEPTOR_TYPES = {
    HEALTHCHECK_USECASE: Symbol.for(EnumInterceptors.HEALTHCHECK_USECASE),
    HEALTHCHECK_CONTROLLER: Symbol.for(EnumInterceptors.HEALTHCHECK_CONTROLLER),
};
