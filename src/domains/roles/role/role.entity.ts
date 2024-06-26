

import { BaseEntity } from '../../../core/domain/base.entity';
import { ICompany } from '../../companies';
import { IRBAC } from '../rbac';
import { IRole } from './role.interface';

class RoleDomain extends BaseEntity implements IRole {
    readonly name: string;
	readonly description?: string;
	readonly company_id?: string;
	readonly company?: ICompany
	readonly rbac?: IRBAC[]
	
	constructor(name: string, description: string, company_id: string, company: ICompany, rbac: IRBAC[]) {
		super();
		this.name = name;
		this.description = description;
		this.company_id = company_id;
		this.company = company;
		this.rbac = rbac;
	}
}

export { RoleDomain };
