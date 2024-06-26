/**
 * src/presentations/rest/middlewares/permission.middlewares.ts
 *
 * Permission Middlewares
 * RBAC
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 26	 June 2024
 */
import { NextFunction, Request, Response } from 'express';

import { IErrorResponse } from '../../../core/interfaces';
import { AuthException } from '../../../core/domain/exceptions/auth.exception';
import { container } from '../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../core/types/interceptors.types';
import { getCachedRefreshToken } from '../../../core/utils';
import { AuthenticatedRequest } from '../../../core/types/request';
import { IPermissionUseCase, IRBACUseCase } from '../../../domains/roles';

export const authCheckPermissionMiddleware = (permissionName: string) => {
	return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {

		// Permission UseCase
		const permissionUseCase = container.get<IPermissionUseCase>(
			INTERCEPTOR_TOKENS_TYPES.PERMISSION_USECASE,
		);

		// RBAC UseCase
		const rbacUseCase = container.get<IRBACUseCase>(
			INTERCEPTOR_TOKENS_TYPES.RBAC_USECASE,
		);
		
		// FORBIDDEN_RESOURCE
		const errExp: IErrorResponse = {
			statusCode: 401,
			errorCode: 'FORBIDDEN_RESOURCE',
			message: 'Unauthorized access',
		} 

	  const user = req.user;
  
	  if (!user || !user.role_id) {
		throw new AuthException(errExp)
	  }
  
	  try {

		const permissions = await permissionUseCase.getBy({
			name: permissionName
		})

		if (!permissions || !permissions.data || permissions.data.length < 1) {
			throw new Error(`invalid permission name: ${permissionName}`)
		}

		const hasPermission = await rbacUseCase.getBy({
			role_id: user.role_id,
			permission_id: permissions.data[0].id!
		});
		if (!hasPermission || !hasPermission.data || hasPermission.data.length < 1) {
			throw new Error(`Insufficient permissions`)
		}
  
		next();
	  } catch (error) {
		throw error
	  }
	};
  };