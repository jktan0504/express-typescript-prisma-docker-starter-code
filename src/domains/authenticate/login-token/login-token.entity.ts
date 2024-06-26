

import { BaseEntity } from '../../../core/domain/base.entity';
import { IUser } from '../../users';
import { IUserLoginToken } from './login-token.interface';

class UserLoginTokenDomain extends BaseEntity implements IUserLoginToken {
	readonly user_id?: string
    readonly user?: IUser
	readonly token?: string
	readonly access_token?: string
	readonly refresh_token?: string
	
	constructor(user_id: string, user: IUser, token: string, access_token: string, refresh_token: string, expired_at: Date ) {
		super();

		this.user_id = user_id;
		this.user = user;
		this.token = token;
		this.access_token = access_token;
		this.refresh_token = refresh_token;
		this.expired_at = expired_at;
	}
}

export { UserLoginTokenDomain };
