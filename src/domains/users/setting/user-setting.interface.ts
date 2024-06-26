import { IBaseInterface } from "../../../core/interfaces";
import { IUser } from "../user";

interface IUserSetting extends IBaseInterface {
    id?: string // uuid
    name?: string
	value_type?: string
	value?: string
	user_id?: string
	user?: IUser
}

export type { IUserSetting }

