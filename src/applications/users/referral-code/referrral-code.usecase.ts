// ReferralCodeUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IReferralCode, IReferralCodeUseCase } from "../../../domains/users";
import { ReferralCodeRepository } from "../../../infrastructures/repositories/users";
import { genId, generateRandomCode } from "../../../core/utils/generator";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class ReferralCodeUseCase extends BaseUseCase<IReferralCode, ReferralCodeRepository> implements IReferralCodeUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.USER_REFERRAL_CODE_REPO)
        repository: ReferralCodeRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IReferralCode[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				user: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IReferralCode[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				user: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IReferralCode> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				user: true,
			}
		});
    }

	create = async (entity: IReferralCode): Promise<IReferralCode> => {
		entity.id = genId(); 
		if (typeof entity.code === 'undefined' || typeof entity.code === null) {
			entity.code = generateRandomCode(8)
		}
		return await this.repository.create(entity);
    }
}

export { ReferralCodeUseCase } 
