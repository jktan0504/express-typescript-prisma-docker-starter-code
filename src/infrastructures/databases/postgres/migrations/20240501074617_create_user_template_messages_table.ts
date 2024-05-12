import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.USER_TEMPLATE_MESSAGES_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('template mesage id');
			table.string('name').unique().notNullable().comment('title');
			table.text('message').nullable().comment('messages');
			table
				.uuid('user_message_bundle_template_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USER_MESSAGE_BUNDLE_TEMPLATES_TABLE);
			table
				.uuid('message_attachment_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.MEDIAS_TABLE);
			table.integer('sort').defaultTo(0).comment('sorting');
			table.integer('que_count').defaultTo(0).comment('queue count');
			table.integer('sent_count').defaultTo(0).comment('sent count');
			table.integer('cancel_count').defaultTo(0).comment('cancel count');
			table.integer('invalid_count').defaultTo(0).comment('invalid count');

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
