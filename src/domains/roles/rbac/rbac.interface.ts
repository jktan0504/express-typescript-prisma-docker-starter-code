import { IBaseInterface } from "../../../core/interfaces";
import { IPermission } from "../permission";
import { IRole } from "../role";

interface IRBAC extends IBaseInterface {
    id?: bigint // bigserial
    role_id?: bigint
    role?: IRole
	permission_id?: bigint
	permission?: IPermission
}

export type { IRBAC }

