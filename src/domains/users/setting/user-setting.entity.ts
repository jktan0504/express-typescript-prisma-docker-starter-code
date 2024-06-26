

import { BaseEntity } from '../../../core/domain/base.entity';
import { IUser } from '../user';
import { IUserSetting } from './user-setting.interface';

class UserSettingDomain extends BaseEntity implements IUserSetting {
	readonly name?: string
	readonly value_type?: string
	readonly value?: string
	readonly user_id?: string
	readonly user?: IUser
	
	constructor(name: string, value_type: string, value: string, user_id: string, 
		user: IUser
	) {
		super();
		this.name = name;
		this.value_type = value_type;
		this.value = value;
		this.user_id = user_id;
		this.user = user;
	}
}

export { UserSettingDomain };
