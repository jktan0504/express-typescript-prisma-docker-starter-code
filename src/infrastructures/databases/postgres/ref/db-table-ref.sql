// MISC

Table autocomplete_countries {
  id bigserial
  label varchar
}

Table countries {
  id bigserial
  name varchar
  code varchar
  timezone varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  currency_id bigserial [ref: > currencies.id]
}

Table currencies {
  id bigserial
  name varchar
  code varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table roles {
  id bigserial
  activated boolean
  name varchar
  description varchar
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table system_users {
  id bigserial
  full_name varchar
  contact_number varchar
  email varchar
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  role_id bigserial [ref: > roles.id]
  company_id bigserial [ref: > companies.id]
}

Table companies {
  id bigserial
  name varchar
  registration_number float
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

// PRODUCT
Table products {
  id bigserial
  name varchar
  description varchar
  stock_quantity float
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  sku_id bigserial [ref: > products_skus.id]
  category_id bigserial [ref: > products_categories.id]
}

Table products_skus {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table products_categories {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table employee_position {
  id bigserial
  name varchar
  type varchar(50)
  description varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table employees_wages {
  id bigserial
  name varchar
  description varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table employees {
  id bigserial
  full_name varchar
  email varchar
  ic_number float
  contact_number float
  bank_name varchar
  bank_account_holder_name varchar
  account_number float
  wage_amount float
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  company_id bigserial [ref: > companies.id]
  country_id bigserial [ref: > countries.id]
  employee_position_id bigserial [ref: > employee_position.id]
  employee_wage_id bigserial [ref: > employees_wages.id]
}

Table part_timers_templates {
  id bigserial
  content varchar
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table part_timers_jobs_categories {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table part_timers_jobs {
  id bigserial
  name varchar
  description varchar
  expiry_date datetime
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  employee_id bigserial [ref: > employees.id]
  category_id bigserial [ref: > part_timers_jobs_categories.id]
}

Table part_timers_payouts {
  id bigserial
  name varchar
  job_date datetime
  job_started_at datetime
  job_ended_at datetime
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  employee_id bigserial [ref: > employees.id]
}

// Course Module

Table courses_categories {
  id bigserial
  name varchar
  description varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table courses {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  course_category_id bigserial [ref: > courses_categories.id]
}

Table programs {
  id bigserial
  name varchar
  code varchar
  fee double
  merchandise boolean
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  course_id bigserial [ref: > courses.id]
  company_id bigserial [ref: > companies.id]
  currency_id bigserial [ref: > currencies.id]
  country_id bigserial [ref: > countries.id]
  speaker_id bigserial [ref: > employees.id]
}

Table classes {
  id bigserial
  name varchar
  code varchar
  workshop_start_datetime timestamp
  workshop_end_datetime timestamp
  class_days_count float
  certificate_provided boolean
  sales_offer varchar
  split_commission float
  senangpay_transaction_fee float
  billplz_transaction_fee float
  paypal_transaction_fee float
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  program_id bigserial [ref: > programs.id]
  speaker_id bigserial [ref: > employees.id]
}

Table contacts {
  id bigserial
  full_name varchar
  prefer_name varchar
  contact_number varchar
  ref_number varchar
  personal_id varchar 
  email varchar
  payment_email varchar
  address varchar
  remark text
  status varchar
  source varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  company_id bigserial [ref: > companies.id]
  country_id bigserial [ref: > countries.id]
}

Table contact_settings {
  id bigserial
  setting_name varchar
  setting_value varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  contact_id bigserial [ref: > contacts.id]
}

enum call_status {
  "pickup"
  "not pickup"
}

enum call_outcome {
  "coming"
  "not coming"
}

enum invite_status {
  "coming"
  "not coming"
}


// Eligible List
Table class_contact_eligibles {
  id bigserial
  // below are the contact details, get them from the contact table
  // full_name varchar
  // ref_no varchar
  // email varchar
  // contact_no varchar
  
  invite_email_date date
  reminder_invite_email_date date
  call_status call_status
  call_outcome call_outcome
  invite_status invite_status
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id varchar
  updated_by_id varchar
  contact_id bigserial [ref: > contacts.id]
  class_id bigserial [ref: > classes.id]
  company_id bigserial [ref: > companies.id]
}

enum contact_class_status {
  POSTPONED
  COMPLETED
}

// Eligible List - from registration (web)
// Registstration List
Table class_contact_registrations {
  id bigserial
  remark text [note: "action / reminder"]
  is_nda boolean [note: "is signed nda"]
  is_merchandise boolean [note: "is merchandise ?"]
  is_paid boolean [note: "is paid"]
  is_deposit boolean [note: "is paid by deposit"]
  is_redeemed boolean [note: "is redeemed by free class"]
  redeem_datetime datetime
  status contact_class_status
  merchandise_payment double
  merchandise_status varchar
  merchandise_date date
  t_shirt_size varchar
  appeal_status varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  contact_id bigserial [ref: > contacts.id]
  class_id bigserial [ref: > classes.id]
}

Table contact_activities {
  id bigserial
  title varchar
  description varchar
  link varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  contact_id bigserial [ref: > contacts.id]
}

Table contacts_class_attendance {
  id bigserial
  contact_id bigserial [ref: > contacts.id]
  class_id bigserial [ref: > classes.id]
  class_date date
  attendanced boolean
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table contact_form_responses {
  id bigserial
  question varchar
  answer varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  contact_id bigserial [ref: > contacts.id]
  class_id bigserial [ref: > classes.id]
}

Table calls_status {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table contacts_upsell_interviews {
  id bigserial
  payment_status varchar
  amount_collected float
  amount_percentage integer
  latest_date_of_payment date
  post_event_email_date date
  type varchar
  remark text
  call_outcome varchar
  meeting_link varchar
  response text
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  call_status_id bigserial [ref: > calls_status.id]
  currency_id bigserial [ref: > currencies.id]
  lead_id bigserial [ref: > contacts.id]
  employee_id bigserial [ref: > employees.id]
  class_id bigserial [ref: > classes.id]
}

Table availability_closers {
  id bigserial
  date varchar
  from_time varchar
  to_time float
  is_allocated boolean
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  employee_id bigserial [ref: > employees.id]
  class_id bigserial [ref: > classes.id]
}

Table employees_time_allocations {
  id bigserial
  appointment_title varchar
  event_url varchar
  cash_to_invest float
  interest_level varchar [note: "purpose to be allocated first"]
  interview_date date
  interview_time time
  closer_status varchar
  company_status varchar
  availability_closer number
  remark text
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  payment_method_id bigserial [ref: > payment_methods.id]
  employee_id bigserial [ref: > employees.id]
  contact_id bigserial [ref: > contacts.id]
  class_id bigserial [ref: > classes.id]
  availability_closer_id bigserial [ref: > availability_closers.id]
}

// campaigns -> from webinar
Table campaigns {
  id bigserial
  name varchar
  code varchar
  workshop_date date
  workshop_time time
  merchandise boolean
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  country_id bigserial [ref: > countries.id]
  program_id bigserial [ref: > programs.id]
}

// Potential Eligible List - from campaign (webinar)
Table campaigns_contacts {
  id bigserial
  full_name varchar
  email varchar
  payment_email varchar
  contact_number float
  is_webinar_purchased boolean
  transaction_id bigserial
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  campaigns_id bigserial [ref: > campaigns.id]
  contact_id bigserial [ref: > contacts.id]
}

Table campaigns_results {
  id bigserial
  adv_spend float
  total_contacts float
  cost_per_lead float
  sales_unit float
  cost_per_sale float
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  webinar_id bigserial [ref: > campaigns.id]
}

Table hash_types {
  id bigserial
  name varchar
  code varchar
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

// FINANCIAL & PAYMENT & TRANSACTIONS

// Payment Gateway, Manual Transaction
Table payment_types {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table payment_methods {
  id bigserial
  name varchar
  description varchar
  merchant_id bigserial
  secret_key varchar
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  hash_type_id bigserial [ref: > hash_types.id]
}

// order types
Table order_types {
  id bigserial
  name varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table orders {
  id bigserial
  ref_number float
  title varchar
  type varchar
  item varchar
  amount float
  transaction_date datetime
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
  payment_method_id bigserial [ref: > payment_methods.id]
}

Table financials_collections {
  id bigserial
  full_name varchar
  payment_email varchar
  contact_number float
  code varchar
  transaction_date datetime
  invoice_number float
  bill_id float
  processor float
  amount_paid float
  transaction_fee float
  amount_received float
  payout float
  payment_method_id bigserial [ref: > payment_methods.id]
  order_id bigserial [ref: > orders.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table commissions {
  id bigserial
  name varchar
  description varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table financials_commissions {
  id bigserial
  full_name varchar
  email varchar
  payment_email varchar
  contact_number float
  code varchar
  signup_date datetime
  last_transaction_date datetime
  last_issue_date datetime
  payment_status varchar
  balance_bf float
  balance_cf float
  deduction float
  sst float
  transaction_fee float
  commission_issued boolean
  program_id bigserial [ref: > programs.id]
  payment_method_id bigserial [ref: > payment_methods.id]
  commission_id bigserial [ref: > commissions.id]
  employee_id bigserial [ref: > employees.id]
  course_id bigserial [ref: > courses.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table refund_types { 
  id bigserial
  name varchar
  description varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table financials_refunds {
  id bigserial
  full_name varchar
  email varchar
  payment_email varchar
  contact_number float
  code varchar
  request_date datetime
  marker_date datetime
  outstanding_amount_to_be_cn float
  request_status varchar
  amount_received float
  refunded_amount float
  bank_name varchar
  bank_account_holder_name varchar
  account_number float
  credit_notes varchar
  authorised boolean
  proceed boolean
  refund_type_id bigserial [ref: > refund_types.id]
  program_id bigserial [ref: > programs.id]
  payment_method_id bigserial [ref: > payment_methods.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

// Annoucements
Table announcemets {
  id bigserial
  title varchar
  content varchar
  system_user_id bigserial [ref: > system_users.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

// Notifications
Table notifications {
  id bigserial
  title varchar
  content varchar
  system_user_id bigserial [ref: > system_users.id]
  employee_id bigserial [ref: > employees.id]
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

// Arrears
Table arrears {
  id bigserial
  contacts_upsell_interview_id bigserial [ref: > contacts_upsell_interviews.id]
  reminder_date datetime
  due_payment_date datetime
  remarks longtext
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

// ADMIN TODO TASKS
enum admin_task_status {
  PENDING
  RUNNING
  DONE
  FAILURE
}

Table admin_task_categories {
  id bigserial
  name varchar
  description varchar
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}

Table admin_tasks {
  id bigserial
  name varchar
  description varchar
  admin_task_category_id bigserial [ref: > admin_task_categories.id]
  arrear_id bigserial [ref: > arrears.id]
  due_date datetime
  remarks longtext
  status admin_task_status
  activated boolean
  created_at timestamp
  updated_at timestamp
  created_by_id bigserial [ref: > system_users.id]
  updated_by_id bigserial [ref: > system_users.id]
}