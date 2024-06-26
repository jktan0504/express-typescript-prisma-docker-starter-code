

import { BaseEntity } from '../../../core/domain/base.entity';
import { ISSOProvider } from '../../authenticate';
import { ICompany, IMerchant } from '../../companies';
import { IRole } from '../../roles';
import { IReferralCode } from '../referral-code';
import { IUserDetail } from '../user-detail';
import { IUser } from './user.interface';

class UserDomain extends BaseEntity implements IUser {
	readonly username?: string;
	readonly password?: string;
	readonly user_detail_id?: string;
	readonly user_detail?: IUserDetail;
	readonly role_id?: bigint;
	readonly role?: IRole;
	readonly company_id?: bigint;
	readonly company?: ICompany;
	readonly merchant_id?: string;
	readonly merchant?: IMerchant;
	readonly referral_id?: string;
	readonly referral?: IUser;
	readonly referral_code_id?: string;
	readonly referral_code?: IReferralCode;
	readonly sso_auth_provider_id?: string;
	readonly sso_auth_provider?: ISSOProvider;
	readonly sso_token?: string;
	readonly device_id?: string;
	readonly is_email_verified?: boolean;
	readonly email_verified_at?: Date;
	readonly is_phone_verified?: boolean;
	readonly phone_verified_at?: Date;
	readonly is_changed_password?: boolean;
	readonly is_pruned?: boolean;
	readonly last_login_at?: Date;
  
	constructor({
	  username,
	  password,
	  user_detail_id,
	  user_detail,
	  role_id,
	  role,
	  company_id,
	  company,
	  merchant_id,
	  merchant,
	  referral_id,
	  referral,
	  referral_code_id,
	  referral_code,
	  sso_auth_provider_id,
	  sso_auth_provider,
	  sso_token,
	  device_id,
	  is_email_verified,
	  email_verified_at,
	  is_phone_verified,
	  phone_verified_at,
	  is_changed_password,
	  is_pruned,
	  last_login_at,
	}: Partial<UserDomain>) {
	  super();
	  this.username = username;
	  this.password = password;
	  this.user_detail_id = user_detail_id;
	  this.user_detail = user_detail;
	  this.role_id = role_id;
	  this.role = role;
	  this.company_id = company_id;
	  this.company = company;
	  this.merchant_id = merchant_id;
	  this.merchant = merchant;
	  this.referral_id = referral_id;
	  this.referral = referral;
	  this.referral_code_id = referral_code_id;
	  this.referral_code = referral_code;
	  this.sso_auth_provider_id = sso_auth_provider_id;
	  this.sso_auth_provider = sso_auth_provider;
	  this.sso_token = sso_token;
	  this.device_id = device_id;
	  this.is_email_verified = is_email_verified;
	  this.email_verified_at = email_verified_at;
	  this.is_phone_verified = is_phone_verified;
	  this.phone_verified_at = phone_verified_at;
	  this.is_changed_password = is_changed_password;
	  this.is_pruned = is_pruned;
	  this.last_login_at = last_login_at;
	}
  }
  
  export { UserDomain };