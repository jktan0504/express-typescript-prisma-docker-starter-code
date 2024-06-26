import { IBaseInterface } from "../../../core/interfaces";


interface IPasswordResetToken extends IBaseInterface {
    id?: bigint // bigserial
    email?: string
	username?: string
	token?: string 
}

export type { IPasswordResetToken }

