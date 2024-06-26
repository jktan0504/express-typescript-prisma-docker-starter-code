

import { BaseEntity } from '../../../core/domain/base.entity';
import { IUser } from '../user';
import { IReferralCode } from './referral-code.interface';


class ReferralCodeDomain extends BaseEntity implements IReferralCode {
    readonly code?: string;
	readonly user_id?: string;
	readonly user?: IUser;
	
	constructor(code: string, user_id: string, 
		user: IUser
	) {
		super();
		this.code = code;
		this.user_id = user_id;
		this.user = user;
	}
}

export { ReferralCodeDomain };
