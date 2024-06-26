import { IBaseInterface } from "../../../core/interfaces";

interface ISSOProvider extends IBaseInterface {
    id?: bigint // bigserial
    name?: string
    client_id?: string
	client_secret?: string
}

export type { ISSOProvider }

