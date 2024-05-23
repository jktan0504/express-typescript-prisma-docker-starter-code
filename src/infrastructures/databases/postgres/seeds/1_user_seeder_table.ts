import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';

type RowId = {
    id: any;
};

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex(EnumDatabaseTables.USERS_TABLE).del();
    await knex(EnumDatabaseTables.ROLES_TABLE).del();
    await knex(EnumDatabaseTables.COMPANIES_TABLE).del();

    // Insert role
    const adminRole: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'SuperAdmin',
        description: 'SuperAdmin Role',
        activated: true,
    });

	// Insert system user
    const adminUserInfo: RowId[] = await knex(EnumDatabaseTables.USER_DETAILS_TABLE)
        .returning('id')
        .insert([
            {
                id: '73edee95-50e9-4693-8060-6cdceacd359e',
                nickname: 'SuperAdmin',
				email: 'admin@ezchat.org',
				first_name: 'Admin',
				last_name: 'Super',
                contact_number: '01110590427',
                age: 30,
				gender: 'male',
            },
        ]);

	// Insert system user
    const adminSystemUser: RowId[] = await knex(EnumDatabaseTables.USERS_TABLE)
        .returning('id')
        .insert([
            {
				id: '2322e309-cb50-4cf9-9cff-ee24dd20b63d',
				username: 'superadmin',
                password:
                    '$2a$12$Uaky5aN5ZKXAtjrLTxiWeOIqTfMGg95kEZsrdPfSVu54eFKLMhpaK',
                role_id: adminRole ? adminRole[0].id : null,
				user_detail_id: adminUserInfo ? adminUserInfo[0].id : null
            },
        ]);


    // update system user created_by
    await knex(EnumDatabaseTables.USERS_TABLE)
        .update({
            created_by_id: adminSystemUser ? adminSystemUser[0].id : null,
        })
        .where('id', adminSystemUser ? adminSystemUser[0].id : null);
}
