// UserController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { UserRepository } from '../../../../../infrastructures/repositories/users';
import { IUser } from '../../../../../domains/users';
import { UserUseCase } from '../../../../../applications/users';

@injectable()
export class UserController extends BaseController<IUser, UserRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.USER_USECASE) useCase: UserUseCase) {
        super(useCase);
    }
}
