import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.SUBSCRIPTION_PLAN_INCLUSIONS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.bigIncrements('id').primary().unique().comment('subscription plan inclusion id');
			table
				.bigInteger('subscription_plan_id')
				.nullable()
				.unsigned()
				.references('id')
				.inTable(EnumDatabaseTables.SUBSCRIPTION_PLANS_TABLE);
			table
				.bigInteger('inclusion_id')
				.nullable()
				.unsigned()
				.references('id')
				.inTable(EnumDatabaseTables.INCLUSIONS_TABLE);
			table
				.bigInteger('product_id')
				.nullable()
				.unsigned()
				.references('id')
				.inTable(EnumDatabaseTables.PRODUCTS_TABLE);
			table.unique(['subscription_plan_id', 'inclusion_id', 'product_id']); // Create unique index
			
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
