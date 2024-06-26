import { IBaseInterface } from "../../../core/interfaces";

interface ICurrency extends IBaseInterface {
    id?: bigint // UUID
    name?: string
    code?: string
	symbol?: string
}

export type { ICurrency }