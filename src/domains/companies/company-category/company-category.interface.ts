import { IBaseInterface } from "../../../core/interfaces";
import { IMedia } from "../../medias";

interface ICompanyCategory extends IBaseInterface {
    id?: bigint // bigserial
    name?: string
    description?: string
	icon_id?: string
	icon?: IMedia
}

export type { ICompanyCategory }

