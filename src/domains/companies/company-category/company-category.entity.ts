

import { BaseEntity } from '../../../core/domain/base.entity';
import { IMedia } from '../../medias';
import { ICompanyCategory } from './company-category.interface';

class CompanyCategoryDomain extends BaseEntity implements ICompanyCategory {
    readonly name: string;
	readonly description: string;
	readonly icon_id: string;
	readonly icon: IMedia;
	
	
	constructor(name: string, description: string, icon_id: string, icon: IMedia) {
		super();
		this.name = name;
		this.description = description;
		this.icon_id = icon_id;
		this.icon = icon
	}
}

export { CompanyCategoryDomain };
