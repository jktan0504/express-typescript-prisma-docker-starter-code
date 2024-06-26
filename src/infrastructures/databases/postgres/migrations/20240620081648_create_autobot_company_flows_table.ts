import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.AUTOBOT_COMPANY_FLOWS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('autobot flow id');
			table.string('name').notNullable().comment('autobot flow title name');
			table.text('description').nullable().comment('autobot flow description');
			table
				.uuid('company_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.COMPANIES_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.bigInteger('server_company_session_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.SERVER_COMPANY_SESSIONS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.bigInteger('server_superadmin_session_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.SERVER_SUPERADMIN_SESSIONS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.uuid('user_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USERS_TABLE);

			// Standard Base DB Fields
            table.boolean('activated').defaultTo(true);
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table
                .uuid('created_by_id')
				.nullable()
                .unsigned()
                .references('id')
                .inTable(EnumDatabaseTables.USERS_TABLE);
            table
                .uuid('updated_by_id')
				.nullable()
                .unsigned()
                .references('id')
                .inTable(EnumDatabaseTables.USERS_TABLE);
        });
    }
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists(SELECTED_TABLE);
	// Be Careful when using CASCADE
    // await knex.raw(`DROP TABLE ${SELECTED_TABLE} CASCADE`);
}
