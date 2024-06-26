import { IBaseInterface } from "../../../core/interfaces";
import { ICurrency } from "../currency";

interface ICountry extends IBaseInterface {
    id?: bigint // bigserial
    name?: string
    code?: string
	timezone?: string
	currency_id?: bigint
	currency?: ICurrency
}

export type { ICountry }

