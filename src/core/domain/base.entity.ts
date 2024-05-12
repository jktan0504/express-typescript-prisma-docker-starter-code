import { deepEqual } from 'fast-equals';
import { IBaseInterface } from '../interfaces';

abstract class BaseEntity implements IBaseInterface {
	activated?: boolean;
	created_at?: Date;
	updated_at?: Date;
	created_by_id?: string; 
	updated_by_id?: string;
	[key: string]: any;

	constructor() {
		this.activated = true;
		this.created_at = new Date();
		this.updated_at = new Date();
		this.created_by_id = ''; 
		this.updated_by_id = ''; 
	}

    public equalsTo(other: BaseEntity): boolean {
        return deepEqual(this, other);
    }

	// Data to Obj 
	public toDTO(): any {
		let dto: { [key: string]: any } = {};
		for (let key of Object.keys(this)) {
			dto[key] = this[key];
		}
		return dto;
	}
}

export { BaseEntity };
