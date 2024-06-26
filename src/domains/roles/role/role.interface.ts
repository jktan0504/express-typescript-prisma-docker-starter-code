import { IBaseInterface } from "../../../core/interfaces";
import { ICompany } from "../../companies";
import { IRBAC } from "../rbac";

interface IRole extends IBaseInterface {
    id?: bigint // bigserial
    name?: string
    description?: string
	company_id?: string
	company?: ICompany
	rbac?: IRBAC[]
}

export type { IRole }

