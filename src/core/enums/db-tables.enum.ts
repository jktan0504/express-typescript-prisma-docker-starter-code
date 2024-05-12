/**
 * src/core/enums/db-tables.enum.ts
 *
 * Database Tables Enums
 * Included all database table for this application
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */

export enum EnumDatabaseTables {
	COUNTRIES_TABLE = 'countries',
	CURRENCIES_TABLE = 'currencies',
	ROLES_TABLE = 'roles',
	PERMISSIONS_TABLE = 'permissions',
	RBAC_TABLE = 'rbac',
	SSO_AUTH_PROVIDERS_TABLE = 'sso_auth_providers',
	USER_INFO_TABLE = 'user_infos',
    USERS_TABLE = 'users',
	MEDIAS_TABLE = 'media',
	MEDIA_FILES_TABLE = 'media_files',
	COMPANY_CATEGORIES_TABLE = 'company_categories',
    COMPANIES_TABLE = 'companies',
	MERCHANTS_TABLE = 'merchants',
	CONTACTS_TABLE = 'contacts',
	SERVERS_TABLE = 'servers',
	SERVER_USER_SESSIONS_TABLE = 'server_user_sessions',
	USER_MESSAGE_BUNDLE_TEMPLATES_TABLE = 'user_message_bundle_templates',
	USER_TEMPLATE_MESSAGES_TABLE = 'user_template_messages',
	CHATROOMS_TABLE = 'chatrooms',
	CHAT_MESSAGES_TABLE = 'chat_messages',
	CHAT_MESSAGES_LOG_TABLE = 'chat_messages_log',
	QUEUE_JOBS_TABLE = 'queue_jobs'
}
