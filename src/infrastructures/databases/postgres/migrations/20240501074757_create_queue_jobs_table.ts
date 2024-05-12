import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.QUEUE_JOBS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.bigIncrements('id').primary().unique().comment('queue job id');
			table.string('job_type').defaultTo('common').comment('type');
			table.text('job_data').nullable().comment('data');
			table.string('action').nullable().comment('action name');
			table.jsonb('body').nullable().comment('body');
			table.string('status').defaultTo('pending').comment('status');
			table.text('remark').nullable().comment('remark');

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
