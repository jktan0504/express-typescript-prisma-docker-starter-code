// UserDetailController.ts
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { UserDetailRepository } from '../../../../../infrastructures/repositories/users';
import { IUserDetail } from '../../../../../domains/users';
import { UserDetailUseCase } from '../../../../../applications/users';

@injectable()
export class UserDetailController extends BaseController<IUserDetail, UserDetailRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.USER_DETAIL_USECASE) useCase: UserDetailUseCase) {
        super(useCase);
    }
}
