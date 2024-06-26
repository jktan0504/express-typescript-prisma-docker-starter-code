

import { BaseEntity } from '../../../core/domain/base.entity';
import { IPermission } from '../permission';
import { IRole } from '../role';
import { IRBAC } from './rbac.interface';

class RBACDomain extends BaseEntity implements IRBAC {
    readonly role_id: bigint;
	readonly role: IRole;
	readonly permission_id: bigint;
	readonly permission: IPermission
	
	constructor(role_id: bigint, role: IRole, permission_id: bigint, permission: IPermission) {
		super();
		this.role_id = role_id;
		this.role = role;
		this.permission_id = permission_id;
		this.permission = permission;
	}
}

export { RBACDomain };
