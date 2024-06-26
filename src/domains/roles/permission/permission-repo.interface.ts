import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IPermission } from "./permission.interface";

// IPermissionRepository.ts
interface IPermissionRepository extends IBaseRepository<IPermission> {
	getAll(query: IQueryOptions): Promise<IPermission[]>;
	getBy(query: IQueryOptions): Promise<{ data: IPermission[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<IPermission>;
    create(entity: IPermission): Promise<IPermission>;
    bulkCreate(entities: IPermission[]): Promise<IPermission[]>;
    updateByID(id: bigint, entity: IPermission): Promise<IPermission>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { IPermissionRepository }
