import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { ICompanyCategory } from "./company-category.interface";

// ICompanyCategoryRepository.ts
interface ICompanyCategoryUseCase extends IBaseUseCase<ICompanyCategory> {
	getAll(query: IQueryOptions): Promise<ICompanyCategory[]>;
	getBy(query: IQueryOptions): Promise<{ data: ICompanyCategory[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<ICompanyCategory>;
    create(entity: ICompanyCategory): Promise<ICompanyCategory>;
    bulkCreate(entities: ICompanyCategory[]): Promise<ICompanyCategory[]>;
    updateByID(id: bigint, entity: ICompanyCategory): Promise<ICompanyCategory>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { ICompanyCategoryUseCase }
