

import { BaseEntity } from '../../../core/domain/base.entity';
import { IVerifyOTP } from './verify-otp.interface';

class VerifyOTPDomain extends BaseEntity implements IVerifyOTP {
    readonly contact_number?: string;
	readonly username?: string;
	readonly otp?: string;

	constructor(contact_number: string, username: string, 
		otp: string
	) {
		super();
		this.contact_number = contact_number;
		this.username = username;
		this.otp = otp;
	}
}

export { VerifyOTPDomain };
