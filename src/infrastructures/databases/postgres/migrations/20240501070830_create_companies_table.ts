import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.COMPANIES_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('company id');
            table.string('name').unique().comment('company name');
			table.text('description').nullable().comment('company description');
			table.string('registration_number').nullable().comment('company registration number');
			table.string('official_contact_number').nullable().comment('company official contact number');
			table.string('unofficial_contact_number').nullable().comment('company unofficial contact number');
			table
				.bigInteger('company_category_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.COMPANY_CATEGORIES_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.uuid('logo_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.MEDIAS_TABLE)
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
	// await knex.schema.dropTableIfExists(SELECTED_TABLE);
	// Be Careful when using CASCADE
    await knex.raw(`DROP TABLE ${SELECTED_TABLE} CASCADE`);
}
