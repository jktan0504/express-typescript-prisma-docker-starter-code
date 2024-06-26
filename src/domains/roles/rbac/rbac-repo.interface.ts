import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IRBAC } from "./rbac.interface";

// IRBACRepository.ts
interface IRBACRepository extends IBaseRepository<IRBAC> {
	getAll(query: IQueryOptions): Promise<IRBAC[]>;
	getBy(query: IQueryOptions): Promise<{ data: IRBAC[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<IRBAC>;
    create(entity: IRBAC): Promise<IRBAC>;
    bulkCreate(entities: IRBAC[]): Promise<IRBAC[]>;
    updateByID(id: bigint, entity: IRBAC): Promise<IRBAC>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { IRBACRepository }
