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
	USER_DETAILS_TABLE = 'user_details',
    USERS_TABLE = 'users',
	USER_SETTINGS_TABLE = 'user_settings',
	PASSWORD_RESET_TOKENS_TABLE = 'password_reset_tokens',
	VERIFY_OTPS_TABLE = 'verify_otps',
	MEDIAS_TABLE = 'media',
	MEDIA_FILES_TABLE = 'media_files',
	COMPANY_CATEGORIES_TABLE = 'company_categories',
    COMPANIES_TABLE = 'companies',
	MERCHANTS_TABLE = 'merchants',
	SUBSCRIPTION_PLANS_TABLE = 'subscription_plans',
	COMPANY_SUBSCRIPTIONS_TABLE = 'company_subscriptions',
	CONTACTS_TABLE = 'contacts',
	COMPANY_CONTACT_CATEGORIES_TABLE = 'company_contact_categories',
	COMPANY_CONTACTS_TABLE = 'company_contacts',
	SERVERS_TABLE = 'servers',
	SERVER_MERCHANT_SESSIONS_TABLE = 'server_merchant_sessions',
	MERCHANT_MESSAGE_BUNDLE_TEMPLATES_TABLE = 'merchant_message_bundle_templates',
	MERCHANT_TEMPLATE_MESSAGES_TABLE = 'merchant_template_messages',
	CHATROOMS_TABLE = 'chatrooms',
	CHAT_MESSAGES_TABLE = 'chat_messages',
	CHAT_MESSAGES_LOG_TABLE = 'chat_messages_log',
	QUEUE_JOBS_TABLE = 'queue_jobs',
	AUTO_REPLY_COMPANY_SETTINGS_TABLE = 'auto_reply_company_settings',
	AUTO_REPLY_COMPANY_KEYWORDS_TABLE = 'auto_reply_company_keywords',
	CUSTOMER_SERVICE_TICKETS_TABLE = 'customer_service_tickets',
	CUSTOMER_SERVICE_KEYWORDS_TABLE = 'customer_service_keywords',
}
