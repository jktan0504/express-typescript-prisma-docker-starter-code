import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { ICompany } from "./company.interface";

// ICompanyRepository.ts
interface ICompanyUseCase extends IBaseUseCase<ICompany> {
	getAll(query: IQueryOptions): Promise<ICompany[]>;
	getBy(query: IQueryOptions): Promise<{ data: ICompany[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<ICompany>;
    create(entity: ICompany): Promise<ICompany>;
    bulkCreate(entities: ICompany[]): Promise<ICompany[]>;
    updateByID(id: string, entity: ICompany): Promise<ICompany>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { ICompanyUseCase }
