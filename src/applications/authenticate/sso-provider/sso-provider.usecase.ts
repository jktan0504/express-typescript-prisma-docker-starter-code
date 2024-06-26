// SSOProviderUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { ISSOProvider, ISSOProviderUseCase } from "../../../domains/authenticate";
import { SSOProviderRepository } from "../../../infrastructures/repositories/authenticate";

@injectable()
class SSOProviderUseCase extends BaseUseCase<ISSOProvider, SSOProviderRepository> implements ISSOProviderUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.AUTH_SSO_PROVIDER_REPO)
        repository: SSOProviderRepository,
    ) {
        super(repository);
    }
}

export { SSOProviderUseCase } 
