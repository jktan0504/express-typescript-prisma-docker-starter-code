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
 * @last_update: 21 June 2024
 */

export enum EnumDatabaseTables {
	COUNTRIES_TABLE = 'countries',
	CURRENCIES_TABLE = 'currencies',
	ROLES_TABLE = 'roles',
	PERMISSIONS_TABLE = 'permissions',
	RBAC_TABLE = 'rbac',
	SSO_AUTH_PROVIDERS_TABLE = 'sso_auth_providers',
	REFERRAL_CODES_TABLE = 'referral_codes',
	USER_DETAILS_TABLE = 'user_details',
    USERS_TABLE = 'users',
	USER_LOGIN_TOKENS_TABLE = 'user_login_tokens',
	USER_SETTINGS_TABLE = 'user_settings',
	PASSWORD_RESET_TOKENS_TABLE = 'password_reset_tokens',
	VERIFY_OTPS_TABLE = 'verify_otps',
	MEDIAS_TABLE = 'media',
	MEDIA_FILES_TABLE = 'media_files',
	PRODUCTS_TABLE = 'products',
	COMPANY_CATEGORIES_TABLE = 'company_categories',
    COMPANIES_TABLE = 'companies',
	MERCHANTS_TABLE = 'merchants',
	SUBSCRIPTION_PLANS_TABLE = 'subscription_plans',
	SUBSCRIPTION_BILLING_CYCLES_TABLE = 'subscription_billing_cycles',
	SUBSCRIPTION_PLAN_PRICINGS_TABLE = 'subscription_plan_pricings',
	INCLUSIONS_TABLE = 'inclusions',
	SUBSCRIPTION_PLAN_INCLUSIONS_TABLE = 'subscription_plan_inclusions',
	COMPANY_SUBSCRIPTIONS_TABLE = 'company_subscriptions',
	CONTACTS_TABLE = 'contacts', // customer
	COMPANY_CONTACT_CATEGORIES_TABLE = 'company_contact_categories',
	SERVERS_TABLE = 'servers',
	SERVER_COMPANY_SESSIONS_TABLE = 'server_company_sessions',
	SERVER_SUPERADMIN_SESSIONS_TABLE = 'server_superadmin_sessions',
	USER_MESSAGE_BUNDLE_TEMPLATES_TABLE = 'user_message_bundle_templates',
	USER_TEMPLATE_MESSAGES_TABLE = 'user_template_messages',
	CHATROOMS_TABLE = 'chatrooms',
	CHAT_MESSAGES_TABLE = 'chat_messages',
	CHAT_MESSAGES_LOG_TABLE = 'chat_messages_log',
	ALL_MESSAGES_LOG_TABLE = 'all_messages_log',
	QUEUE_JOBS_TABLE = 'queue_jobs',
	QUEUE_JOB_LOGS_TABLE = 'queue_job_logs',
	USER_MESSAGE_LOGS_TABLE = 'user_message_logs',
	AUTO_REPLY_COMPANY_SETTINGS_TABLE = 'auto_reply_company_settings',
	AUTO_REPLY_COMPANY_KEYWORDS_TABLE = 'auto_reply_company_keywords',
	AUTOBOT_COMPANY_FLOWS_TABLE = 'autobot_company_flows',
	AUTOBOT_COMPANY_FLOW_NODE_TABLE = 'autobot_company_flow_nodes',
	AUTOBOT_COMPANY_FLOW_NODE_OPTIONS_TABLE = 'autobot_company_flow_node_options',
	AUTOBOT_COMPANY_FLOW_EDGES_TABLE = 'autobot_company_flow_edges',
	CUSTOMER_SERVICE_TICKETS_TABLE = 'customer_service_tickets',
	CUSTOMER_SERVICE_KEYWORDS_TABLE = 'customer_service_keywords',
}
