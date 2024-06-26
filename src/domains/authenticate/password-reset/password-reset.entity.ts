

import { BaseEntity } from '../../../core/domain/base.entity';
import { IPasswordResetToken } from './password-reset.interface';

class PasswordResetTokenDomain extends BaseEntity implements IPasswordResetToken {
    readonly email?: string;
	readonly username?: string;
	readonly token?: string;

	constructor(email: string, username: string, 
		token: string
	) {
		super();
		this.email = email;
		this.username = username;
		this.token = token;
	}
}

export { PasswordResetTokenDomain };
