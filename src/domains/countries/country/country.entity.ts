

import { BaseEntity } from '../../../core/domain/base.entity';
import { ICountry } from './country.interface';

class CountryDomain extends BaseEntity implements ICountry {
    readonly code: string;
	readonly name: string;
	readonly timezone: string;
	
	constructor(code: string, name: string, timezone: string) {
		super();
		this.code = code;
		this.name = name;
		this.timezone = timezone;
	}
}

export { CountryDomain };
