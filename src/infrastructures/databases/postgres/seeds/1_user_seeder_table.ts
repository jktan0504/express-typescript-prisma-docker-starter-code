import { Knex } from 'knex';
import { EnumDatabaseTables } from '../../../../core/enums';
import { genId } from '../../../../core/utils/generator';

type RowId = {
    id: any;
};

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex(EnumDatabaseTables.USERS_TABLE).del();
    // await knex(EnumDatabaseTables.ROLES_TABLE).del();
    // await knex(EnumDatabaseTables.COMPANIES_TABLE).del();

    // Insert role
    const superAdminRole: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'SuperAdmin',
        description: 'SuperAdmin Role',
        activated: true,
    });

	const adminRole: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'Admin',
        description: 'Admin Role',
        activated: true,
    });

	const merchantAdmin: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'Merchant Admin',
        description: 'Merchant Admin Role can access merchant portal',
        activated: true,
    });

	const merchant: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'Merchant',
        description: 'Merchant Role',
        activated: true,
    });

	const agentRole: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'Agent',
        description: 'Agent Role',
        activated: true,
    });

	const marketer: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'Marketer',
        description: 'Marketer Role',
        activated: true,
    });

	const guestRole: RowId[] = await knex(EnumDatabaseTables.ROLES_TABLE).returning('id').insert({
        name: 'guestRole',
        description: 'Guest Role',
        activated: true,
    });

	// Insert system user
    const adminUserDetail: RowId[] = await knex(EnumDatabaseTables.USER_DETAILS_TABLE)
        .returning('id')
        .insert([
            {
                id: '2322e309-cb50-4cf9-9cff-ee24dd20b63d',
                nickname: 'SuperAdmin',
				email: 'admin@ezchat.org',
				first_name: 'EzChat',
				last_name: 'SuperAdmin',
                contact_number: '01110590427',
                age: 32,
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
                role_id: superAdminRole ? superAdminRole[0].id : null,
				user_detail_id: adminUserDetail ? adminUserDetail[0].id : null,
				is_email_verified: true,
				email_verified_at: new Date(),
				is_phone_verified: true,
				phone_verified_at: new Date(),
				is_password_changed:true
            },
        ]);


    // update system user created_by
    await knex(EnumDatabaseTables.USERS_TABLE)
        .update({
            created_by_id: adminSystemUser ? adminSystemUser[0].id : null,
        })
        .where('id', adminSystemUser ? adminSystemUser[0].id : null);


	// Company
	const comp_category: RowId[] = await knex(EnumDatabaseTables.COMPANY_CATEGORIES_TABLE).returning('id').insert({
        name: 'IT',
        description: 'Information Technology (IT) refers to the use of computer systems to manage, process, protect, and exchange information. It encompasses a vast field of expertise, including various subfields and specializations. The common goal across these areas is to leverage technology systems to solve problems and handle information1.',
        activated: true,
    });

	// const company: RowId[] = await knex(EnumDatabaseTables.COMPANIES_TABLE).returning('id').insert({
	// 	id: 'd4e8a5f6-9b3c-4d2a-8e1b-7f0e9c8d0a2b',
    //     name: 'IDCI',
    //     registration_number: 'IDCI-1234',
	// 	official_contact_number: '60167488864',
	// 	unofficial_contact_number: '60167488864',
	// 	company_category_id: comp_category[0].id,
    //     activated: true,
    // });

	// // Server
	// const server: RowId[] = await knex(EnumDatabaseTables.SERVERS_TABLE).returning('id').insert({
    //     host: 'http://localhost:3000',
    //     access_key: 'abc',
	// 	secret_key: '345',
    //     activated: true,
    // });

	// // User Setting
	// const userGreetingSetting: RowId[] = await knex(EnumDatabaseTables.USER_SETTINGS_TABLE).returning('id').insert({
    //     id: genId(),
    //     name: 'greeting_message',
	// 	value_type: 'string',
	// 	value: 'Welcome to myEzchat',
	// 	user_id: adminSystemUser ? adminSystemUser[0].id : null,
    //     activated: true,
    // });

	// const userWaitingIntervalSetting: RowId[] = await knex(EnumDatabaseTables.USER_SETTINGS_TABLE).returning('id').insert({
    //     id: genId(),
    //     name: 'waiting_greeting_message_interval',
	// 	value_type: 'number',
	// 	value: 30,
	// 	user_id: adminSystemUser ? adminSystemUser[0].id : null,
    //     activated: true,
    // });

	// // Insert merchant
    // const merchantUser: RowId[] = await knex(EnumDatabaseTables.MERCHANTS_TABLE)
    //     .returning('id')
    //     .insert([
    //         {
	// 			id: '68f040ae-38da-4d3e-a6d8-251fee50ad75',
	// 			company_id: company && company[0] && company[0].id,
    //             user_id: adminSystemUser ? adminSystemUser[0].id : null,
	// 			credits: 10000
    //         },
    //     ]);
}
