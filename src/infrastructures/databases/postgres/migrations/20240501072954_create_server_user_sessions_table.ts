import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.SERVER_USER_SESSIONS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.bigIncrements('id').primary().unique().comment('session id');
			table.string('name').unique().notNullable().comment('sever session name');
			table.text('description').nullable().comment('sever session description');
			table
				.uuid('user_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USERS_TABLE);
			table
				.bigInteger('server_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.SERVERS_TABLE);

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
