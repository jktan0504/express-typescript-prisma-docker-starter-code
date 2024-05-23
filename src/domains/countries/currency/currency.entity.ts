import { BaseEntity } from '../../../core/domain/base.entity';
import { ICurrency } from './currency.interface';

class CurrencyDomain extends BaseEntity implements ICurrency {
    readonly code: string;
	readonly name: string;
	readonly symbol: string;
	
	constructor(code: string, name: string, symbol: string) {
		super();
		this.code = code;
		this.name = name;
		this.symbol = symbol;
	}
}

export { CurrencyDomain };
