import { IBaseInterface } from "../../../core/interfaces";
import { ICountry, ICurrency } from "../../countries";
import { IMedia } from "../../medias";
import { EnumGender } from "./gender.enum";

interface IUserDetail extends IBaseInterface {
    id?: string // uuid
    nickname?: string
	email?: string
	secondary_email?: string
	first_name?: string
	last_name?: string
	contact_number?: string
	contact_country_id?: bigint
	contact_country?: ICountry
	age?: number
	gender?: EnumGender
	ic_number?: string
	birthdate?: Date
	avatar_id?: string
	avatar?: IMedia
	address_line1?: string
	address_line2?: string
	address_state?: string
	address_city?: string
	address_postcode?: string
	address_country_id?: bigint
	address_country?: ICountry
	currency_id?: bigint
	currency?: ICurrency
	social_telegram?: string
	social_facebook?: string
	social_instagram?: string
}

export type { IUserDetail }

