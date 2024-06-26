import { IBaseInterface } from "../../../core/interfaces";
import { IUser } from "../user";

interface IReferralCode extends IBaseInterface {
    id?: string // bigserial
    code?: string
	user_id?: string
	user?: IUser
}

export type { IReferralCode }

