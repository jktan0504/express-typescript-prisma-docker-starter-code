import * as dotenv from 'dotenv';
import * as redis from 'redis';

dotenv.config({});

export const redisCacheClient = redis.createClient({
    url: process.env.CACHE_REDIS_URL,
});

export const redisPubSubClient = redis.createClient({
    url: process.env.PUB_SUB_REDIS_URL,
});
