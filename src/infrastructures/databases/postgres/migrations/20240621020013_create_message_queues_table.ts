import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.USER_MESSAGE_LOGS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.bigIncrements('id').primary().comment('user message log id');
			table
				.uuid('company_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.COMPANIES_TABLE);
			table
				.uuid('from_user_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.USERS_TABLE);
			table
				.uuid('to_contact_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.CONTACTS_TABLE);
			table
				.bigInteger('job_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.QUEUE_JOBS_TABLE);
			
			// Additional Fields
            table.text('message').nullable().comment('Message content');
            table.enu('status', ['pending', 'processing', 'sent', 'failed']).defaultTo('pending').comment('Queue status');
            table.timestamp('scheduled_at').nullable().comment('Scheduled time for the message');
            table.timestamp('executed_at').nullable().comment('Execution time of the message');

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
