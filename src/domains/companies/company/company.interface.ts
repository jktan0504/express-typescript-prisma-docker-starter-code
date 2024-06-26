import { IBaseInterface } from "../../../core/interfaces";
import { IMedia } from "../../medias";
import { ICompanyCategory } from "../company-category/company-category.interface";

interface ICompany extends IBaseInterface {
    id?: string // bigserial
    name?: string
    registration_number?: string
	official_contact_number?: string
	unofficial_contact_number?: string
	company_category_id?: bigint
	company_category?: ICompanyCategory
	logo_id?: string
	logo?: IMedia
}

export type { ICompany }

