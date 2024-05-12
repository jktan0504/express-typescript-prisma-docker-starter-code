import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.CONTACTS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('contact id');
			table
				.uuid('user_info_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USER_INFO_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.uuid('user_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USERS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

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
