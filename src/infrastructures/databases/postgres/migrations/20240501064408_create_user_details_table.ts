import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

// Tables
const SELECTED_TABLE = EnumDatabaseTables.USER_DETAILS_TABLE;

export async function up(knex: Knex): Promise<void> {
	
    const tableExists = await knex.schema.hasTable(SELECTED_TABLE);
    if (!tableExists) {
        await knex.schema.createTable(SELECTED_TABLE, function (table) {

			// Custom Fields
            table.uuid('id').primary().unique().comment('user info id');
            table.string('nickname').comment('nickname for display purpose only');
			table.string('email').unique().comment('unique email address');
			table.string('first_name').nullable().comment('first name of user info');
			table.string('last_name').nullable().comment('last name of user info');
			table.string('contact_number').unique().comment('last name of user info');
            table.integer('age').defaultTo(0).comment('user age');
			table.enu('gender', ['male', 'female']).defaultTo('male').comment('user gender');
			table.string('ic_number').unique().nullable().comment('user identificastion number for kyc');
			table.date('birthdate').nullable().comment('user date of birth');
			table
				.uuid('avatar_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.MEDIAS_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table
				.bigInteger('country_id')
				.unsigned()
				.nullable()
				.references('id')
				.inTable(EnumDatabaseTables.COUNTRIES_TABLE)
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			table.string('social_telegram').nullable().comment('telegram integration');
			table.string('social_facebook').nullable().comment('telegram integration');
			table.string('social_instagram').nullable().comment('telegram integration');

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
