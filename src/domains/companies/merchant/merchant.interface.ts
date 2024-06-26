import { IBaseInterface } from "../../../core/interfaces";
import { IUser } from "../../users";
import { ICompany } from "../company";

interface IMerchant extends IBaseInterface {
    id?: string // bigserial
    company_id?: string
    company?: ICompany
	user_id?: string
	user?: IUser
	credits?: number
	remark?: string
	server_superadmin_session_id?: string
}

export type { IMerchant }

