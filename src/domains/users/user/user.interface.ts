import { IBaseInterface } from "../../../core/interfaces";
import { ISSOProvider } from "../../authenticate";
import { ICompany, IMerchant } from "../../companies";
import { IRole } from "../../roles";
import { IReferralCode } from "../referral-code";
import { IUserDetail } from "../user-detail";

interface IUser extends IBaseInterface {
    id?: string // uuid
    username?: string
	password?: string
	user_detail_id?: string
	user_detail?: IUserDetail
	role_id?: bigint
	role?: IRole
	company_id?: bigint
	company?: ICompany
	merchant_id?: string
	merchant?: IMerchant
	referral_id?: string
	referral?: IUser
	referral_code_id?: string
	referral_code?: IReferralCode
	sso_auth_provider_id?: string
	sso_auth_provider?: ISSOProvider
	sso_token?: string
	device_id?: string
	is_email_verified?: boolean
	email_verified_at?: Date
	is_phone_verified?: boolean
	phone_verified_at?: Date
	is_changed_password?: boolean
	is_pruned?: boolean
	last_login_at?: Date
}

export type { IUser }

