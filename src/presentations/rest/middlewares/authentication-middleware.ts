/**
 * src/presentations/rest/middlewares/auth.middlewares.ts
 *
 * Auth Middlewares
 * Authenticate Protected for every Private API Routes
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 26	 June 2024
 */
import { NextFunction, Request, Response } from 'express';

import * as jwt from 'jsonwebtoken';
import { IErrorResponse, IJWTPayload } from '../../../core/interfaces';
import { IUser, IUserUseCase } from '../../../domains/users';
import { AuthException } from '../../../core/domain/exceptions/auth.exception';
import { container } from '../../../core/locators/dependencies-injector';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../core/types/interceptors.types';
import { getCachedRefreshToken } from '../../../core/utils';

export const authVerifyAccessTokenMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
	

	// User UseCase
	const userUseCase = container.get<IUserUseCase>(
		INTERCEPTOR_TOKENS_TYPES.USER_USECASE,
	);

	const authHeader = request.headers['authorization'];
	const accessToken = authHeader && authHeader.split(' ')[1];

	// FORBIDDEN_RESOURCE
	const errExp: IErrorResponse = {
		statusCode: 401,
		errorCode: 'FORBIDDEN_RESOURCE',
		message: 'Unauthorized access',
	} 

	if (!accessToken) {
		throw new AuthException(errExp);
	}


    try {	
        const decoded = jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_KEY as string || 'secret',
        ) as IJWTPayload;
		const user: IUser = decoded.user as IUser

		if (!user || !user.id) {
			throw new AuthException(errExp);
        }

		const resUser = await userUseCase.getByID(user && user.id && user.id, {})

        if (!resUser) {
            throw new AuthException(errExp);
        }

		// assign auth user to request
        request.user = user;
        request.user_id = user.id!;

       next()
    } catch (error: any) {
        if (error.message === 'jwt expired') {
            return response.status(401).json({
                error: 'Forbidden resource',
                message: 'Token has expired',
            });
        }
		throw error;
    }
};

export const authVerifyRefreshTokenMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {

	// User UseCase
	const userUseCase = container.get<IUserUseCase>(
		INTERCEPTOR_TOKENS_TYPES.USER_USECASE,
	);
    const authHeader = request.headers['authorization'];
    const refreshToken = authHeader && authHeader.split(' ')[1];

	// FORBIDDEN_RESOURCE
	const errExp: IErrorResponse = {
		statusCode: 401,
		errorCode: 'FORBIDDEN_RESOURCE',
		message: 'Unauthorized access',
	}

    if (!refreshToken) {
        throw new AuthException(errExp);
    }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_KEY as string,
        ) as IUser;
        const user: IUser = decoded;

        if (!user) {
            throw new AuthException(errExp);
        }

        const cachedRefreshToken = await getCachedRefreshToken(user.id!);
        if (!cachedRefreshToken || cachedRefreshToken !== refreshToken) {
			throw new AuthException(errExp);
        }

		const resUser = await userUseCase.getByID(user.id!, {})

        if (!resUser) {
            throw new AuthException(errExp);
        }

		// assign auth user to request
        request.user = user;
        request.user_id = user.id!;

        next();
    } catch (error: any) {
        if (error.message === 'jwt expired') {
            return response.status(401).json({
                error: 'Forbidden resource',
                message: 'Token has expired',
            });
        }
    }
};
