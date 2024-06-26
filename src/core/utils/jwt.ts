
import * as jwt from 'jsonwebtoken';
import { IUser } from '../../domains/users';
import { cacheRefreshToken } from './redis-cache';
import { IJWTPayload } from '../interfaces';

const generateJwtToken = async (payload: IJWTPayload) => {
    const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_KEY as string,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
        },
    );
    const refreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_KEY as string,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
        },
    );

	// cache refresh token
	await cacheRefreshToken(payload.user.id! as string, refreshToken);
	
    return {
        access_token: `${accessToken}`,
        refresh_token: `${refreshToken}`,
    };
};

export { generateJwtToken }