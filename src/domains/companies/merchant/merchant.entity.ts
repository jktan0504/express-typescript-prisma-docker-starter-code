

import { BaseEntity } from '../../../core/domain/base.entity';
import { IUser } from '../../users';
import { ICompany } from '../company';
import { IMerchant } from './merchant.interface';

class MerchantDomain extends BaseEntity implements IMerchant {
    readonly company_id: string;
	readonly company: ICompany;
	readonly user_id: string;
	readonly user: IUser;
	readonly credits: number;
	readonly remark: string;
	readonly server_superadmin_session_id: string;
	
	constructor(company_id: string, company: ICompany, user_id: string, unofficial_contact_number: string, user: IUser, credits: number, remark: string, server_superadmin_session_id: string) {
		super();
		this.company_id = company_id;
		this.company = company;
		this.user_id = user_id;
		this.unofficial_contact_number = unofficial_contact_number;
		this.user = user;
		this.credits = credits;
		this.remark = remark;
		this.server_superadmin_session_id = server_superadmin_session_id;
	}
}

export { MerchantDomain };
