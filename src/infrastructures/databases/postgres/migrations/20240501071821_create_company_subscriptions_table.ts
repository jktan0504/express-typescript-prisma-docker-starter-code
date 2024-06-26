import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.COMPANY_SUBSCRIPTIONS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('company subscription id');
			table
				.uuid('company_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.COMPANIES_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.bigInteger('subscription_plan_pricing_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable(EnumDatabaseTables.SUBSCRIPTION_PLAN_PRICINGS_TABLE)
				.comment('Subscription Plan Pricing ID');
			table.text('remark').nullable().comment('some remark for this contact');
			table.integer('credits').defaultTo(0).comment('total remaining credits');
			table.dateTime('start_date').nullable().comment('start date for this subscription');
			table.dateTime('end_date').nullable().comment('expire date for this subscription');
			table.enu('status', ['pending', 'payment pending', 'payment success', 'payment failed', 'running', 'terminated'])
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
	await knex.schema.dropTableIfExists(SELECTED_TABLE);
	// Be Careful when using CASCADE
    // await knex.raw(`DROP TABLE ${SELECTED_TABLE} CASCADE`);
}
