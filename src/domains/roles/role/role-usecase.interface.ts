import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IRole } from "./role.interface";

// IRoleRepository.ts
interface IRoleUseCase extends IBaseUseCase<IRole> {
	getAll(query: IQueryOptions): Promise<IRole[]>;
	getBy(query: IQueryOptions): Promise<{ data: IRole[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<IRole>;
    create(entity: IRole): Promise<IRole>;
    bulkCreate(entities: IRole[]): Promise<IRole[]>;
    updateByID(id: bigint, entity: IRole): Promise<IRole>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { IRoleUseCase }
