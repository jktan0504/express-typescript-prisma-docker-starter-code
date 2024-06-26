import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { ISSOProvider } from "./sso-provider.interface";

// ISSOProviderRepository.ts
interface ISSOProviderRepository extends IBaseRepository<ISSOProvider> {
	getAll(query: IQueryOptions): Promise<ISSOProvider[]>;
	getBy(query: IQueryOptions): Promise<{ data: ISSOProvider[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<ISSOProvider>;
    create(entity: ISSOProvider): Promise<ISSOProvider>;
    bulkCreate(entities: ISSOProvider[]): Promise<ISSOProvider[]>;
    updateByID(id: bigint, entity: ISSOProvider): Promise<ISSOProvider>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { ISSOProviderRepository }
