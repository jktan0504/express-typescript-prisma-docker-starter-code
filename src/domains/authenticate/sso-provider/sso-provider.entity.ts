

import { BaseEntity } from '../../../core/domain/base.entity';
import { ISSOProvider } from './sso-provider.interface';

class SSOProviderDomain extends BaseEntity implements ISSOProvider {
	readonly name?: string
    readonly client_id?: string
	readonly client_secret?: string
	
	constructor(name: string, client_id: string, client_secret: string) {
		super();

		this.name = name;
		this.client_id = client_id;
		this.client_secret = client_secret;
	}
}

export { SSOProviderDomain };
