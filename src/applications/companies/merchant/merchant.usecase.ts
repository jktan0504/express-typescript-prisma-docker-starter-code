// MerchantUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IPagination, IQueryOptions } from "../../../core/interfaces/common-interface";
import { IMerchant, IMerchantUseCase } from "../../../domains/companies";
import { MerchantRepository } from "../../../infrastructures/repositories/companies";

@injectable()
class MerchantUseCase extends BaseUseCase<IMerchant, MerchantRepository> implements IMerchantUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.MEDIA_REPO)
        repository: MerchantRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IMerchant[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				company: {
					company_category: true,
					logo: true
				},
				user: {
					user_details: true,
					role: true,
					company: true,
					merchant: true,
					referral: true,
					referral_code: true,
					sso_auth_provider: true,
				}
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IMerchant[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				company: {
					company_category: true,
					logo: true
				},
				user: {
					user_details: true,
					role: true,
					company: true,
					merchant: true,
					referral: true,
					referral_code: true,
					sso_auth_provider: true,
				}
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IMerchant> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				company: {
					company_category: true,
					logo: true
				},
				user: {
					user_details: true,
					role: true,
					company: true,
					merchant: true,
					referral: true,
					referral_code: true,
					sso_auth_provider: true,
				}
			}
		});
    }
}

export { MerchantUseCase } 
