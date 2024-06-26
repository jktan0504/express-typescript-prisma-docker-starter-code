import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.QUEUE_JOBS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.bigIncrements('id').primary().comment('queue job id');
			table.string('job_type').defaultTo('common').comment('type');
			table.text('job_name').nullable().comment('queue name');
			table.text('model_id').nullable().comment('ref id from any model');
			table.string('action').nullable().comment('action name');
			table.jsonb('payload').nullable().comment('payload');
			table.enu('status', ['pending', 'processing', 'completed', 'failed']).defaultTo('pending').comment('status');
			table.text('remark').nullable().comment('remark');
			table.timestamp('scheduled_at').nullable();
			table.timestamp('executed_at').nullable();

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
