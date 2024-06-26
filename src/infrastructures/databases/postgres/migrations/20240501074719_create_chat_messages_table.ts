import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.CHAT_MESSAGES_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('message id');
			table.text('message').nullable().comment('messaage');
			table
				.uuid('chatroom_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.CHATROOMS_TABLE);
			table
				.uuid('user_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USERS_TABLE);
			table
				.uuid('contact_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.CONTACTS_TABLE);
			table
				.uuid('user_template_message_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USER_TEMPLATE_MESSAGES_TABLE);
			table
				.uuid('message_attachment_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.MEDIAS_TABLE);
			table.boolean('is_sentby_contact').defaultTo(false);
			table.boolean('is_seen').defaultTo(false);

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
