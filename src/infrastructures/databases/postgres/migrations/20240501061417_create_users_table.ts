import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';


const SELECTED_TABLE = EnumDatabaseTables.USERS_TABLE;

export async function up(knex: Knex): Promise<void> {
	const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('user info id');
            table.string('username').unique().comment('username for authentication');
			table.string('password').nullable().comment('encrypted hash password');
			table.string('device_id').nullable().comment('user device id');
			table.boolean('is_email_verified').defaultTo(false).comment('email verification');
			table.date('email_verified_at').nullable().comment('email verification at');
			// NOTE: Will add when user table is created
			// table
			// 	.bigInteger('user_detail_id')
			// 	.unsigned()
			// 	.references('id')
			// 	.inTable(EnumDatabaseTables.USER_DETAILS_TABLE)
			// 	.onDelete('CASCADE')
			// 	.onUpdate('CASCADE');
			// table
			// 	.bigInteger('role_id')
			// 	.unsigned()
			// 	.references('id')
			// 	.inTable(EnumDatabaseTables.ROLES_TABLE)
			// 	.onDelete('CASCADE')
			// 	.onUpdate('CASCADE');
			// table
			// 	.bigInteger('sso_auth_provider_id')
			// 	.nullable()
			// 	.unsigned()
			// 	.references('id')
			// 	.inTable(EnumDatabaseTables.SSO_AUTH_PROVIDERS)
			// 	.onDelete('CASCADE')
			// 	.onUpdate('CASCADE');
			// table.string('sso_token').nullable().comment('user sso access token');
			// table.boolean('is_pruned').defaultTo(false).comment('user account pruned check');

			// NOTE: Will add when user table is created
			// Standard Base DB Fields
            // table.boolean('activated').defaultTo(true);
            // table.timestamp('created_at').defaultTo(knex.fn.now());
            // table.timestamp('updated_at').defaultTo(knex.fn.now());
            // table
            //     .uuid('created_by_id')
            //     .unsigned()
            //     .references('id')
            //     .inTable(EnumDatabaseTables.USERS_TABLE);
            // table
            //     .uuid('updated_by_id')
            //     .unsigned()
            //     .references('id')
            //     .inTable(EnumDatabaseTables.USERS_TABLE);
        });
    }
}

export async function down(knex: Knex): Promise<void> {
	// await knex.schema.dropTableIfExists(SELECTED_TABLE);
	// Be Careful when using CASCADE
    await knex.raw(`DROP TABLE ${SELECTED_TABLE} CASCADE`);
}
