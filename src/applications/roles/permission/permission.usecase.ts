// PermissionUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { PermissionRepository } from "../../../infrastructures/repositories/roles";
import { IPermission, IPermissionUseCase } from "../../../domains/roles";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class PermissionUseCase extends BaseUseCase<IPermission, PermissionRepository> implements IPermissionUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.PERMISSION_REPO)
        repository: PermissionRepository,
    ) {
        super(repository);
    }

	// Override
}

export { PermissionUseCase } 
