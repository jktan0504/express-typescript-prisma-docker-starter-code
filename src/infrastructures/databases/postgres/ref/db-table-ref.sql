/**
*
* ERD of EzChat Platform
* 
* Developed & Designed by: jktan0504@hotmail.com
* Last Updated at: 20 June 2024
*
**/
Project EzChat {
  database_type: 'PostgreSQL'
  Note: 'ERD of EzChat Platform'
}

/**
* Media & Files
**/
// Medias
Table medias {
  id UUID [pk, unique]
  name varchar [null]
  description text [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Files
Table media_files {
  id UUID [pk, unique]
  media_id UUID [ref: > medias.id]
  resolution varchar [null, note: "resolution of this media file, 1920px"]
  file_key varchar [null, note: "file key for s3"]
  file_type varchar(150) [null, note: "image/png, ..."]
  url text [null, note: "s3 link"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

/**
* COUNTRY & CURRENCY
**/
// Countries
Table countries {
  id bigserial
  name varchar
  code varchar
  timezone varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
  currency_id bigserial [ref: > currencies.id]
}

// Currencies
Table currencies {
  id bigserial
  name varchar
  code varchar
  symbol varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* Role ACESS - RBAC
**/
// Roles
Table roles {
  id bigserial [pk, increment]
  name varchar(100) [unique, not null, note: "role name"]
  description text [null]
  company_id UUID [null, ref: > companies.id, note: "null for global roles, otherwise belongs to a company"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Permissions
Table permissions {
  id bigserial [pk, increment]
  name varchar(255) [unique, not null, note: "permission / module name"]
  description text [null]
  company_id UUID [null, ref: > companies.id, note: "null for global roles, otherwise belongs to a company"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// RBAC
Table rbac {
  role_id bigserial [ref: > roles.id]
  permission_id bigserial [ref: > permissions.id]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]

  Indexes {
    (role_id, permission_id) [unique]
  }
}

/**
* SSO
**/
Table sso_auth_providers {
  id bigserial [pk, increment]
  name varchar(100) [not null, unique]
  client_id text [not null]
  client_secret text [not null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

/**
* User
**/
// User Information (Details)
enum Gender {
  "male"
  "female"
  "non-binary"
  "prefer not to say"
  "other"
}

// Referral Code
Table referral_codes {
  id uuid [pk, unique]
  code text [not null, unique]
  user_id UUID [null, ref: > users.id]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// User Details
Table user_details {
  id UUID [pk, unique]
  nickname varchar(255) [null, note: "display purpose only"]
  email varchar(100) [null]
  secondary_email varchar(100) [null]
  first_name varchar(255) [null]
  last_name varchar(255) [null]
  contact_number varchar(150) [null, unique]
  contact_country_id bigserial [null, ref: > countries.id]
  age integer [default: 0, note: "age"]
  gender Gender [default: 'male']
  ic_number varchar(100) [null, unique]
  birthdate date [null]
  avatar_id UUID [null, ref: > medias.id]
  address_line1 varchar [null]
  address_line2 varchar [null]
  address_state varchar [null]
  address_city varchar [null]
  address_postcode varcharr [null]
  address_country_id bigserial [null, ref: > countries.id]
  currency_id bigserial [null, ref: > currencies.id]
  social_telegram text [null, note: "connect to telegram"]
  social_facebook text [null, note: "connect to facebook"]
  social_instagram text [null, note: "connect to instagram"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Users
Table users {
  id UUID [pk, unique]
  username varchar(255) [not null, unique, note: "own unique username"]
  password text [not null]
  user_detail_id UUID [not null, unique, ref: - user_details.id]
  role_id bigserial [null, ref: > roles.id]
  company_id UUID [null, ref: > companies.id, note: "null for superadmin or global users"]
  merchant_id UUID [null, ref: > merchants.id, note: "null for superadmin or global users"]
  referral_id uuid [ref: > users.id]
  referral_code_id UUID [null, ref: > referral_codes.id]
  sso_auth_provider_id bigserial [null, ref: > sso_auth_providers.id]
  sso_token varchar(255) [null, unique]
  device_id varchar(255) [null, unique]
  is_email_verified boolean [default: false]
  email_verified_at varchar [null]
  is_phone_verified boolean [default: false]
  phone_verified_at varchar [null]
  is_changed_password boolean [default: false]
  is_pruned boolean [default: false]
  last_login_at timestamptz [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// User Login Token
Table user_login_tokens {
  id UUID [pk, unique]
  token text [unique, not null]
  user_id UUID [not null, unique, ref: - users.id]
  access_token text [not null]
  refresh_token text [not null]
  expired_at datetime [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// User Settings
Table user_settings {
  id UUID [pk, unique]
  name varchar(255) [not null]
  value_type varchar(255) [null]
  value text [null]
  user_id UUID [null, ref: > users.id]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

/**
* AUTHENTICATION
**/
// Password Reset
Table password_reset_tokens {
  id bigserial [pk, increment]
  email varchar(255) [null]
  username varchar(255) [null]
  token text [not null, note: "reset password token"]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]

  Indexes {
    (email, username) [name:"email_username", unique]
  }
}

// Verify OTP
Table verify_otps {
  id bigserial [pk, increment]
  contact_number varchar(255) [null]
  username varchar(255) [null]
  otp text [not null, note: "otp number"]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

/**
* PRODUCTS
**/
// Products
Table products {
  id bigserial [pk, increment]
  name varchar [not null, unique, note: 'product name']
  description text [note: 'product description']
  icon_id UUID [null, ref: > medias.id]
  url text [null, note: "hyperlink"]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* SUBSCRIPTION PLANS
**/
// Subscription Plans
Table subscription_plans {
  id bigserial [pk, increment]
  name varchar [not null, unique, note: 'subscription plan name']
  description text [note: 'subscription plan description']
  // table.enu('type', ['free', 'paid']).defaultTo('paid').comment('plan type');
	// table.enu('status', ['draft', 'private', 'public', 'deactivated']).defaultTo('draft').comment('plan status');
  type varchar [null]
  status varchar [null]
  // fee double(10,2) [default: 0, note: 'subscription fee']
  // duration integer [default: 0, note: 'duration by month, e.g. 1 = 1 month, 12 = 12 months']
  // credits integer [default: 0, note: '1 credit == 1 message']
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Billing Cycle
Table subscription_billing_cycles {
  id bigserial [pk, increment]
  name varchar [not null, unique, note: 'cycle name']
  duration text [note: '1 month']
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Subscription Plan Pricing
Table subscription_plan_pricings {
  id bigserial [pk, increment]
  price double(10,2) [default: 0, note: 'plan price']
  subscription_plan_id bigserial [ref: - subscription_plans.id]
  billing_cycle_id bigserial [ref: - subscription_billing_cycles.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]

  Indexes {
    (subscription_plan_id, billing_cycle_id) [unique]
  }
}

// Inclusions
Table inclusions {
  id bigserial [pk, increment]
  name varchar [not null, unique, note: 'inclusion name']
  description text [null]
  remark text [null]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Subscription Plan Inclusions
Table subscription_plan_inclusions {
  id bigserial [pk, increment]
  subscription_plan_id bigserial [ref: - subscription_plans.id]
  inclusion_id bigserial [null, ref: > inclusions.id]
  product_id bigserial [null, ref: > products.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* COMPANY
**/
// Company categories
Table company_categories {
  id bigserial [pk, increment]
  name varchar
  description text
  icon_id UUID [null, ref: > medias.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Companies
Table companies {
  id UUID [pk, unique]
  name varchar
  registration_number varchar
  official_contact_number varchar [null]
  unofficial_contact_number varchar [null]
  company_category_id bigserial [null, ref: > company_categories.id]
  logo_id UUID [null, ref: > medias.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* MERCHANT
**/
// Merchants == Their Superadmin or Agent
Table merchants {
  id UUID [pk, unique]
  company_id uuid [null, ref: > companies.id]
  user_id uuid [not null, unique, ref: - users.id]
  credits integer [default: 0, note: '1 credit == 1 message']
  remark text [null, note: ""]
  server_superadmin_session_id uuid [not null, ref: > server_superadmin_sessions.id, note: "1 sessions can serve 20 "]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Company contact category
Table company_contact_categories {
  id bigserial [pk, increment]
  name varchar [not null]
  description varchar [null]
  icon_id UUID [null, ref: > medias.id]
  company_id UUID [not null, ref: > companies.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Company contact books
Table contacts {
  id UUID [pk, unique]
  user_detail_id UUID [not null, ref: > user_details.id]
  company_id uuid [null, ref: > companies.id]
  user_id uuid [null, ref: > users.id]
  company_contact_category_id bigserial [null, ref: > company_contact_categories.id]
  tags text [null, note: "add some tags by merchant for this contact"]
  remark text [null, note: "add some remark note by merchant for this contact"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

enum CompanySubscriptionStatus {
  "pending"
  "payment pending"
  "payment success"
  "payment failed"
  "running"
  "terminated"
}

// Company subscription
Table company_subscriptions {
  id UUID [pk, unique]
  subscription_plan_pricing_id bigserial [null, ref: > subscription_plan_pricings.id]
  company_id uuid [not null, unique, ref: > companies.id]
  remark text [null, note: ""]
  start_date date [not null, note: "merchant subscription plan start date"]
  end_date date [not null, note: "merchant subscription plan end date"]
  credits integer [default: 0, note: '1 credit == 1 message']
  status CompanySubscriptionStatus [not null, default: "pending"]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* SERVER
**/
// Server
Table servers {
  id bigserial [pk, increment]
  host varchar [not null]
  access_key varchar [null]
  secret_key varchar [null]
  hash_method varchar [null, default: "SHA1"]
  status varchar [default: "online"]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Server superadmin sessions
Table server_superadmin_sessions {
  id bigserial [pk, increment]
  name varchar [not null, unique, note: "session name"]
  channel_type varchar [not null, default: "whatsapp"]
  channel_id text [not null, note: "channel id"]
  channel_push_name text [not null, note: "channel push name"]
  channel_number text [not null, note: "channel number"]
  description varchar [null]
  server_id uuid [not null, unique, ref: > servers.id]
  superadmin_id uuid [not null, unique, ref: > users.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}


// Server company sessions
Table server_company_sessions {
  id bigserial [pk, increment]
  name varchar [not null, unique, note: "session name"]
  channel_type varchar [not null, default: "whatsapp"]
  channel_id text [not null, note: "channel id"]
  channel_push_name text [not null, note: "channel push name"]
  channel_number text [not null, note: "channel number"]
  description varchar [null]
  company_id uuid [not null, unique, ref: > companies.id]
  server_id uuid [not null, unique, ref: > servers.id]
  superadmin_session_id uuid [not null, unique, ref: > server_superadmin_sessions.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* CHATS
**/
//  User Bundle Message Templates
Table user_message_bundle_templates {
  id uuid [pk, unique]
  name varchar [not null]
  description varchar [null]
  user_id UUID [null, ref: > users.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// User Template Messages
Table user_template_messages {
  id uuid [pk, unique]
  name varchar [not null]
  message varchar [null]
  merchant_message_bundle_template_id UUID [null, ref: > user_message_bundle_templates.id]
  message_attachment_id UUID [null, ref: > medias.id]
  sort integer [default: 0, note: "sorting"]
  que_count integer [default: 0]
  sent_count integer [default: 0]
  cancel_count integer [default: 0]
  invalid_count integer [default: 0]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Chatrooms
Table chatrooms {
  id UUID [pk, unique]
  shortlink text [unique]
  company_id uuid [null, unique, ref: > companies.id]
  user_id uuid [not null, unique, ref: - users.id]
  contact_id uuid [null, ref: > contacts.id]
  server_company_session_id bigserial [null, ref: > server_company_sessions.id]
  server_superadmin_session_id bigserial [null, ref: > server_superadmin_sessions.id]
  remark text [null, note: ""]
  last_message_id UUID [null, ref: > chat_messages.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Chat Messages
Table chat_messages {
  id UUID [pk, unique]
  chatroom_id uuid [not null, ref: > chatrooms.id]
  user_id uuid [null, ref: > users.id]
  company_contact_id uuid [null, ref: > contacts.id]
  message text [null, note: ""]
  is_sentby_contact boolean [default: false]
  is_seen boolean [default: false]
  merchant_template_msg_id UUID [null, ref: > user_template_messages.id]
  message_attachment_id UUID [null, ref: > medias.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Chat Messages
Table chat_messages_log {
  id UUID [pk, unique]
  chat_message_id UUID [null, ref: > chat_messages.id]
  status varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// All Messages Log
Table all_messages_log {
  id UUID [pk, unique]
  session_name varchar [null, note: "this is session name"]
  message text [null]
  from varchar [null]
  to varchar [null]
  body jsonb [null]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* AUTO REPLY
**/
// Auto Reply Company Setting
Table auto_reply_company_settings {
  id UUID [pk, unique]
  title varchar(255) [not null]
  company_id UUID [null, ref: > companies.id]
  server_company_session_id bigserial [null, ref: > server_company_sessions.id]
  server_superadmin_session_id bigserial [null, ref: > server_superadmin_sessions.id]
  reply text [null]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Auto Reply Keywords
Table auto_reply_user_keywords {
  id UUID [pk, unique]
  keyword text [not null]
  auto_reply_company_setting_id UUID [not null, ref: > auto_reply_company_settings.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// AutoBot Company Flows
Table autobot_company_flows {
  id UUID [pk, unique]
  name varchar [not null, note: "flow title"]
  description text [null]
  company_id UUID [null, ref: > companies.id]
  server_company_session_id bigserial [null, ref: > server_company_sessions.id]
  server_superadmin_session_id bigserial [null, ref: > server_superadmin_sessions.id]
  user_id UUID [not null, ref: > users.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]

  Indexes {
    (company_id, server_company_session_id) [unique]
  }
}

// AutoBot Company Flow Nodes
Table autobot_company_flow_nodes {
  id UUID [pk, unique]
  type varchar [not null, note: "node type"]
  content text [null]
  flow_id UUID [not null, ref: > autobot_company_flows.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}


// AutoBot Company Flow Node Options
Table autobot_company_flow_node_options {
  id UUID [pk, unique]
  option_text varchar [not null, note: "node type"]
  option_value text [null]
  flow_node_id UUID [not null, ref: > autobot_company_flow_nodes.id]
  flow_node_next_id UUID [not null, ref: > autobot_company_flow_nodes.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// AutoBot Company Flow Edges
Table autobot_company_flow_edges {
  id UUID [pk, unique]
  flow_id UUID [not null, ref: > autobot_company_flows.id]
  source_node_id UUID [not null, ref: > autobot_company_flow_nodes.id]
  target_node_id UUID [not null, ref: > autobot_company_flow_nodes.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}


/**
* CUSTOMER SERVICES
**/
Enum TickerStatues {
  "Pending"
  "Open"
  "In Progress"
  "Resolved"
  "Follow Up"
}

Enum TickerPriority {
  "Low"
  "Medium"
  "High"
}

// Ticket Setting
Table customer_service_tickets {
  id UUID [pk, unique]
  ticket_no varchar(255) [unique]
  subject varchar(255) [null]
  description text [null]
  customer_id UUID [not null, ref: > contacts.id]
  admin_id UUID [not null, ref: > users.id]
  chatroom_id UUID [null, ref: > chatrooms.id]
  status TickerStatues [not null, default: "Open"]
  priority TickerPriority [not null, default: "Low"]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Customer Service Keywords
Table customer_service_keywords {
  id UUID [pk, unique]
  keyword text [not null]
  company_id UUID [not null, ref: > companies.id]
  user_id UUID [not null, ref: > users.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
* Queue
**/
enum QueueStatus {
  "pending"
  "proccessing"
  "completed"
  "failed"
}

// Queue Jobs
Table queue_jobs {
  id bigserial [pk, increment]
  job_type varchar [not null, note: "type name"]
  job_name text [null, note: "queue name"]
  model_id text [null]
  action varchar(150) [not null, note: "action name"]
  payload jsonb [null, note: "queue payload"]
  status QueueStatus [note: "queue status", default: "pending"]
  remark text [null, note: "just for some reminder"]
  scheduled_at timestamptz [null]
  executed_at timestamptz [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Queue Job Logs
Table queue_job_logs {
  id bigserial [pk, increment]
  job_id bigserial [not null, ref: - queue_jobs.id]
  message text [null, note: "some log message"]
  log_level varchar(255) [default: 'info']
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// User Message Logs
Table user_message_logs {
  id bigserial [pk, increment]
  job_id bigserial [not null, ref: - queue_jobs.id]
  company_id UUID [not null, ref: > companies.id]
  from_user_id UUID [not null, ref: > users.id]
  to_contact_id UUID [not null, ref: > contacts.id]
  message text [null, note: "some log message"]
  status QueueStatus [note: "queue status", default: "pending"]
  scheduled_at timestamptz [null]
  executed_at timestamptz [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

