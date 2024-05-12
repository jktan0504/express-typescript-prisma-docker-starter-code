import type { Knex } from 'knex';
import * as dotenv from 'dotenv';

dotenv.config({});
interface IKnexConfig {
    [key: string]: Knex.Config;
}

const {
    DATABASE_ENGINE,
    DATABASE_CLIENT,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_DB,  // Database Name
    DATABASE_PASSWORD,
} = process.env;

const configs: IKnexConfig = {
    test: {
        client: DATABASE_ENGINE,
        connection: {
            host: DATABASE_HOST,
            port: DATABASE_PORT as unknown as number,
            user: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_DB,
        },
		pool: {
            min: 5,
            max: 10,
        },
        migrations: {
            directory: '../../infrastructures/databases/postgres/migrations',
        },
    },
    development: {
        client: DATABASE_CLIENT,
        connection: {
            host: DATABASE_HOST,
            port: DATABASE_PORT as unknown as number,
            user: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_DB,
        },
        migrations: {
            extension: 'ts',
			directory: '../../infrastructures/databases/postgres/migrations',
        },
        seeds: {
			extension: 'ts',
            directory: '../../infrastructures/databases/postgres/seeds',
        },
    },
    staging: {
        client: DATABASE_ENGINE,
        connection: {
            host: DATABASE_HOST,
            port: DATABASE_PORT as unknown as number,
            user: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_DB,
        },
        pool: {
            min: 5,
            max: 10,
        },
		migrations: {
            directory: '../../infrastructures/databases/postgres/migrations',
        },
        seeds: {
            directory: '../../infrastructures/databases/postgres/seeds',
        },
    },
    production: {
        client: DATABASE_ENGINE,
        connection: {
            host: DATABASE_HOST,
            port: DATABASE_PORT as unknown as number,
            user: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_DB,
        },
        pool: {
            min: 5,
            max: 10,
        },
        migrations: {
            directory: '../../infrastructures/databases/postgres/migrations',
        },
        seeds: {
            directory: '../../infrastructures/databases/postgres/seeds',
        },
    },
};

export default configs;
