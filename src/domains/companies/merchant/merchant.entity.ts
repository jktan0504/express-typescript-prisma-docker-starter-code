

import { BaseEntity } from '../../../core/domain/base.entity';
import { IMedia } from '../../medias';
import { ICompanyCategory } from '../company-category/company-category.interface';
import { ICompany } from './company.interface';

class CompanyDomain extends BaseEntity implements ICompany {
    readonly name: string;
	readonly registration_number: string;
	readonly official_contact_number: string;
	readonly unofficial_contact_number: string;
	readonly company_category_id: bigint;
	readonly company_category: ICompanyCategory;
	readonly logo_id: string;
	readonly logo: IMedia;
	
	constructor(name: string, registration_number: string, official_contact_number: string, unofficial_contact_number: string, company_category_id: bigint, company_category: ICompanyCategory, logo_id: string, logo: IMedia) {
		super();
		this.name = name;
		this.registration_number = registration_number;
		this.official_contact_number = official_contact_number;
		this.unofficial_contact_number = unofficial_contact_number;
		this.company_category_id = company_category_id;
		this.company_category = company_category;
		this.logo_id = logo_id;
		this.logo = logo;
	}
}

export { CompanyDomain };
