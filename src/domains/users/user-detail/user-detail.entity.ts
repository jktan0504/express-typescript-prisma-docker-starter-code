

import { BaseEntity } from '../../../core/domain/base.entity';
import { ICountry, ICurrency } from '../../countries';
import { IMedia } from '../../medias';
import { EnumGender } from './gender.enum';
import { IUserDetail } from './user-detail.interface';

class UserDetailDomain extends BaseEntity implements IUserDetail {
    readonly id?: string;
	readonly nickname?: string;
	readonly email?: string;
	readonly secondary_email?: string;
	readonly first_name?: string;
	readonly last_name?: string;
	readonly contact_number?: string;
	readonly contact_country_id?: bigint;
	readonly contact_country?: ICountry;
	readonly age?: number;
	readonly gender?: EnumGender;
	readonly ic_number?: string;
	readonly birthdate?: Date;
	readonly avatar_id?: string;
	readonly avatar?: IMedia;
	readonly address_line1?: string;
	readonly address_line2?: string;
	readonly address_state?: string;
	readonly address_city?: string;
	readonly address_postcode?: string;
	readonly address_country_id?: bigint;
	readonly address_country?: ICountry;
	readonly currency_id?: bigint;
	readonly currency?: ICurrency;
	readonly social_telegram?: string;
	readonly social_facebook?: string;
	readonly social_instagram?: string;
	
	constructor({
		id,
		nickname,
		email,
		secondary_email,
		first_name,
		last_name,
		contact_number,
		contact_country_id,
		contact_country,
		age,
		gender,
		ic_number,
		birthdate,
		avatar_id,
		avatar,
		address_line1,
		address_line2,
		address_state,
		address_city,
		address_postcode,
		address_country_id,
		address_country,
		currency_id,
		currency,
		social_telegram,
		social_facebook,
		social_instagram,
	  }: Partial<UserDetailDomain>) {
		super();
		this.id = id;
		this.nickname = nickname;
		this.email = email;
		this.secondary_email = secondary_email;
		this.first_name = first_name;
		this.last_name = last_name;
		this.contact_number = contact_number;
		this.contact_country_id = contact_country_id;
		this.contact_country = contact_country;
		this.age = age;
		this.gender = gender;
		this.ic_number = ic_number;
		this.birthdate = birthdate;
		this.avatar_id = avatar_id;
		this.avatar = avatar;
		this.address_line1 = address_line1;
		this.address_line2 = address_line2;
		this.address_state = address_state;
		this.address_city = address_city;
		this.address_postcode = address_postcode;
		this.address_country_id = address_country_id;
		this.address_country = address_country;
		this.currency_id = currency_id;
		this.currency = currency;
		this.social_telegram = social_telegram;
		this.social_facebook = social_facebook;
		this.social_instagram = social_instagram;
	}
}

export { UserDetailDomain };
