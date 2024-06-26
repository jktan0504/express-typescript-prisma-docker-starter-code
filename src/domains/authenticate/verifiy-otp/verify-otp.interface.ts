import { IBaseInterface } from "../../../core/interfaces";

interface IVerifyOTP extends IBaseInterface {
    id?: bigint // bigserial
    contact_number?: string
	username?: string
	otp?: string
}

export type { IVerifyOTP }

