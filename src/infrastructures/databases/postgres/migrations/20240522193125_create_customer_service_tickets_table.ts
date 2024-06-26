import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.CUSTOMER_SERVICE_TICKETS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('ticket id');
			table.string('ticket_no').unique().comment('ticket no');
			table.string('subject').nullable().comment('subject');
			table.text('description').nullable().comment('description');
			table
				.uuid('customer_id')
				.unsigned()
				.references('id')
				.inTable(EnumDatabaseTables.CONTACTS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.uuid('admin_id')
				.unsigned()
				.references('id')
				.inTable(EnumDatabaseTables.USERS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.uuid('chatroom_id')
				.unsigned()
				.references('id')
				.inTable(EnumDatabaseTables.CHATROOMS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table.enu('status', ['pending', 'open', 'in progress', 'resolved', 'follow up'])
				.defaultTo('pending')
				.notNullable();
			table.enu('priority', ['low', 'medium', 'high'])
				.defaultTo('pending')
				.notNullable();

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
	// await knex.schema.dropTableIfExists(SELECTED_TABLE);
	// Be Careful when using CASCADE
    await knex.raw(`DROP TABLE ${SELECTED_TABLE} CASCADE`);
}
