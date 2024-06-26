import { IBaseInterface } from "../../../core/interfaces";
import { IUser } from "../../users";

interface IUserLoginToken extends IBaseInterface {
    id?: string 
    user_id?: string
	user?: IUser
	token?: string
    access_token?: string
	refresh_token?: string
	expired_at?: Date
}

export type { IUserLoginToken }

