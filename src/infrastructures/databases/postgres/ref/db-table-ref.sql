agram text [null, note: "connect to instagram"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
UID [null, ref: > users.id]
}Role ACESS - RBAC
**/
// Roles
Table roles {
  id bigserial [pk, increment]
  name varchar(100) [unique, not null, note: "role name"]
  description text [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
 [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
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
  url 
 updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Permissions
Table permissions {
  id bigserial [pk, increment]
  name varchar(255) [unique, not null, note: "permission / module name"]
  description text [null]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`text [null, note: "s3 link"]
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
  created_by_id uuid [rt timestamptz [not null, default: `now()`]
  created_by_id UUID 

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
  updated_aef: > users.id]
  updated_by_id uuid [ref: > users.id]
}

/**
*   updated_by_id UUID [null, ref: > users.id]
}

// Contact Books
Table contacts {
  id UUID [pk, unique]
  user_detail_id UUID [not null, unique, ref: - user_infos.id]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Users
Table users {
  id UUID [pk, unique]
  username varcht timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

/**
* User
**/
// User Information
enum Gender {
  "male"
  "female"
}

// User informations
Table user_infos {
  id UUID [pk, unique]
  nickname varchar(255) [null, note: "display purpose only"]
  email varchar(100) [null]
  first_name varchar(255) [null]
  last_name varchar(255) [null]
  contact_number varchar(150) [null, unique]
  age integer [default: 0, note: "age"]
  gender Gender [default: 'male']
  ic_number varchar(100) [null, unique]
  birthdate date [null]
  avatar_id UUID [null, ref: > medias.id]
  country_id bigserial [null, ref: > countries.id]
  social_telegram text [null, note: "connect to telegram"]
  social]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id U  description text [note: 'subscription plan description']
  fee double(10,2) [default: 0, note: 'subscription fee']
  duration integer [default: 0, note: 'duration by month, e.g. 1 = 1 month, 12 = 12 months']
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
  icon_id UUID [null, ref: > medias.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Companies
Table companies {
  id UUID [pk,  id bigserial [pk, increment]
  email varchar(255) [not null]
  token text [not null, note: "reset password token"]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

// Verify OTP
Table verify_otps {
  id bigserial [pk, increment]
  email varchar(255) [not null]
  otp text [not null, note: "otp number"]
  created_at timestamptz [not null, default: `now()`]
  updated_at timestamptz [not null, default: `now()`]
  created_by_id UUID [null, ref: > users.id]
  updated_by_id UUID [null, ref: > users.id]
}

/**
* SUBSCRIPTION PLANS
**/
// Subscription Plans
Table subscription_plans {
  id bigserial [pk, increment]
  ar(255) [not null, unique, note: "own unique username"]
  password text [not null]
  user_detail_id UUID [not null, unique, ref: - user_infos.id]
  role_id bigserial [null, ref: > roles.id]
  sso_auth_provider_id bigserial [null, ref: > sso_auth_providers.id]
  sso_token varchar(255) [null, unique]
  device_id varchar(255) [null, unique]
  is_email_verified boolean [default: false]
  email_verified_at varchar [null]
  is_pruned boolean [default: false]
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
 _facebook text [null, note: "connect to facebook"]
  social_inston varchar [null]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Merchant contact books
Table merchant_contact_books {
  id UUID [pk, unique]
  contact_id UUID [not null, unique, ref: > contacts.id]
  merchant_id uuid [null, ref: > merchants.id]
  merchant_contact_category_id bigserial [null, ref: > merchant_contact_categories.id]
  remark text [null, note: "add some remark note by merchant for this contact"]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

enum MerchantSubscriptionStatus {
  "pendunique]
  name varchar
  registration_number varchar
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
// Merchants
Table merchants {
  id UUID [pk, unique]
  company_id uuid [null, ref: > companies.id]
  user_id uuid [not null, unique, ref: - users.id]
  keywords jsonb [null, note: "keywords"]
  remark text [null, note: ""]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Merchant contact category
Table merchant_contact_categories {
  idname varchar [not null, unique, note: 'subscription plan name']
 secret_key varchar [null]
  hash_method varchar [null, default: "SHA1"]
  status varchar [default: "online"]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Server user sessions
Table server_user_sessions {
  id bigserial [pk, increment]
  name varchar [not null, note: "session name"]
  description varchar [null]
  user_id uuid [not null, unique, ref: > users.id]
  server_id uuid [not null, unique, ref: > servers.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}


/**
* CHATS
**/
//  User Bundle ing"
  "payment pending"
  "payment success"
  "payment failed"
  "running"
  "terminated"
}

// Merchant subscription
Table merchant_subscriptions {
  id bigseries [pk, increment]
  subscription_plan_id bigserial [null, ref: > subscription_plans.id]
  merchant_id uuid [not null, unique, ref: > merchants.id]
  remark text [null, note: ""]
  start_date date [not null, note: "merchant subscription plan start date"]
  end_date date [not null, note: "merchant subscription plan end date"]
  status MerchantSubscriptionStatus [not null, default: "pending"]
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
  id bigserial [pk, in bigserial [pk, increment]
  name varchar [not null]
  descripti timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

// Chatrooms
Table chatrooms {
  id UUID [pk, unique]
  user_id uuid [not null, unique, ref: - users.id]
  contact_id uuid [null, ref: > contacts.id]
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
  contact_id uuid [null, ref: > contacts.id]
  message text [null, note: ""]
Message Templates
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
  user_message_bundle_template_id UUID [null, ref: > user_message_bundle_templates.id]
  message_attachment_id UUID [null, ref: > medias.id]
  sort integer [default: 0, note: "sorting"]
  que_count integer [default: 0]
  sent_count integer [default: 0]
  cancel_count integer [default: 0]
  invalid_count integer [defcrement]
  host varchar [not null]
  access_key varchar [null]
 /**
*
* ERD of EzChat Platform
* 
* Developed & Designed by: jktan0504@hotmail.com
* Last Updated at: 30 April 2024
*
**/
Project project_name {
  database_type: 'PostgreSQL'
  Note: 'ERD of EzChat Platform'
}

/**
* Queue
**/
enum queue_statuses {
  "pending"
  "completed"
  "failed"
}
// Queue Jobs
Table queue_jobs {
  id bigserial [pk, increment]
  job_type varchar [not null, note: "type name"]
  job_data text [null, note: "queue name"]
  action varchar(150) [not null, note: "action name"]
  body jsonb [null, note: "queue message"]
  status queue_statuses [note: "queue status", default: "pending"]
  remark text [null, note: "just for some reminder"]
  activated boolean [default: true]
  created_at timestamptz [not null, default: `now()`]
  updated_  is_sentby_contact boolean [default: false]
  is_seen boolean [default: false]
  user_template_msg_id UUID [null, ref: > user_template_messages.id]
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
  user_template_msg_id UUID [null, ref: > user_template_messages.id]
  status varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id uuid [ref: > users.id]
  updated_by_id uuid [ref: > users.id]
}

aault: 0]
  activated boolean
  created_at timestamp
  updated_at
