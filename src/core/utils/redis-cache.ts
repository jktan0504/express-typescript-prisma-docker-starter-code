'use strict';

import { RedisClientType } from '@redis/client';
import * as dotenv from 'dotenv';
import { RedisClient } from 'redis-mock';

dotenv.config({});

let redis: RedisClientType | RedisClient;

(async () => {
    if (process.env.NODE_ENV === 'test') {
        const redisMock = await import('redis-mock');

        redis = redisMock.createClient();
        return;
    }

    const { redisCacheClient } = await import('../../configs/redis');

    redis = redisCacheClient as RedisClientType;

    redis.on('error', (error) =>
        console.error(`redis connection error: ${error}`),
    );

    await redisCacheClient.connect();
})();

const refreshTokensPrefixName = 'refresh_token';

export const cacheRefreshToken = async (
    u_id: string,
    token: string,
): Promise<void> => {
    const key = `${u_id}..${refreshTokensPrefixName}`;

    // set new token
    await redis.set(key, token);
    await redis.expire(
        key,
        (process.env.REFRESH_TOKEN_EXPIRATION as unknown as number) / 1000,
    );
};

export const getCachedRefreshToken = async (u_id: string): Promise<string> => {
    const key = `${u_id}..${refreshTokensPrefixName}`;

    return (await redis.get(key)) as string;
};

const emailLinkTokensPrefixName = 'email_link_token';

export const cacheEmailLinkToken = async (
    key: string,
    data: string,
): Promise<void> => {
    key = `${key}..${emailLinkTokensPrefixName}`;

    // set new key
    await redis.set(key, data);
    await redis.expire(
        key,
        process.env.EMAIL_LINK_TOKEN_EXPIRATION as unknown as number,
    );
};

export const getCachedEmailLinkToken = async (
    token: string,
): Promise<string> => {
    const key = `${token}..${emailLinkTokensPrefixName}`;

    return (await redis.get(key)) as string;
};

export const removeCachedEmailLinkToken = async (token: string) => {
    const key = `${token}..${emailLinkTokensPrefixName}`;

    return await redis.del(key);
};

const AIRWALLEX_KEY = 'airwallex_auth_token';

export const cacheAirwallexToken = async (token: string) => {
    await redis.set(AIRWALLEX_KEY, token);

    // Airwallex token would be expired after 30 mins
    await redis.expire(AIRWALLEX_KEY, 1800);
};

export const getCachedAirwallexToken = async () => {
    return (await redis.get(AIRWALLEX_KEY)) as string;
};

const PAYEX_KEY = 'payex_auth_token';

export const cachePayexToken = async (token: string) => {
    await redis.set(AIRWALLEX_KEY, token);

    // payex token would be expired after 2 days
    await redis.expire(AIRWALLEX_KEY, 172800);
};

export const getCachedPayexToken = async () => {
    return (await redis.get(PAYEX_KEY)) as string;
};

export const cacheSalesOfferMedia = async (s3Key: string, s3Url: string) => {
    await redis.set(s3Key, s3Url);

    // expired after 7 days
    await redis.expire(s3Key, 604800);
};

export const getCacheSalesOfferMedia = async (s3Key: string) => {
    return redis.get(s3Key);
};
