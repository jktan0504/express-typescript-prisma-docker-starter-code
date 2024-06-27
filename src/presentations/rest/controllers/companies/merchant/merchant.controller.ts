// MerchantController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { MerchantRepository } from '../../../../../infrastructures/repositories/companies';
import { IMerchant } from '../../../../../domains/companies';
import { MerchantUseCase } from '../../../../../applications/companies';

@injectable()
export class MerchantController extends BaseController<IMerchant, MerchantRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.MERCHANT_USECASE) useCase: MerchantUseCase) {
        super(useCase);
    }
}
