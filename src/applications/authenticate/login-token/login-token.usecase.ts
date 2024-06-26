// UserLoginTokenUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IUserLoginToken, IUserLoginTokenUseCase } from "../../../domains/authenticate";
import { UserLoginTokenRepository } from "../../../infrastructures/repositories/authenticate";
import { IPagination, IQueryOptions } from "../../../core/interfaces";
import { genId, generateRandomBase64Token } from "../../../core/utils/generator";
import { generateJwtToken } from "../../../core/utils/jwt";
import { container } from "../../../core/locators/dependencies-injector";
import { IUser, IUserUseCase } from "../../../domains/users";

@injectable()
class UserLoginTokenUseCase extends BaseUseCase<IUserLoginToken, UserLoginTokenRepository> implements IUserLoginTokenUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.AUTH_USER_LOGIN_TOKEN_REPO)
        repository: UserLoginTokenRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IUserLoginToken[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				user: true
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IUserLoginToken[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				user: true
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IUserLoginToken> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				user: true
			}
		});
    }

	create = async (entity: IUserLoginToken): Promise<IUserLoginToken> => {
		// id
		entity.id = genId(); 

		// token
		entity.token = await generateRandomBase64Token();
		
		// User UseCase
		const userUseCase = container.get<IUserUseCase>(
			INTERCEPTOR_TOKENS_TYPES.USER_USECASE,
		);
		
		if (typeof entity.access_token === 'undefined' || typeof entity.access_token === null) {
			const user = await userUseCase.getByID(entity.user_id!, {})
			// Generate JWT
			const jwtToken = await generateJwtToken({
				user: user as IUser,
			})
			entity.access_token = jwtToken.access_token
			entity.refresh_token = jwtToken.refresh_token
		}
		return await this.repository.create(entity);
    }

	createOrUpdate = async (entity: IUserLoginToken): Promise<IUserLoginToken> => {

		// token
		entity.token = await generateRandomBase64Token();
		
		// User UseCase
		const userUseCase = container.get<IUserUseCase>(
			INTERCEPTOR_TOKENS_TYPES.USER_USECASE,
		);
		
		if (typeof entity.access_token === 'undefined' || typeof entity.access_token === null) {
			const user = await userUseCase.getByID(entity.user_id!, {})
			// Generate JWT
			const jwtToken = await generateJwtToken({
				user: user as IUser,
			})
			entity.access_token = jwtToken.access_token
			entity.refresh_token = jwtToken.refresh_token
		}

		// Checking is Record found
		const existedData = await this.repository.getBy({
			user_id: entity.user_id!
		});

		if (existedData && existedData.data.length > 0) {
			const id = existedData && existedData.data && existedData.data[0] && existedData.data[0].id
			// Update
			return await this.repository.updateByID(id, entity)
		} 

		// Create New Login Token for this user
		entity.id = genId(); 
		return await this.repository.create(entity);
    }
}

export { UserLoginTokenUseCase } 
