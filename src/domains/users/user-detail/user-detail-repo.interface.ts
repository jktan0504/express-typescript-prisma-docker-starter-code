import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IUserDetail } from "./user-detail.interface";

// IUserDetailRepository.ts
interface IUserDetailRepository extends IBaseRepository<IUserDetail> {
	getAll(query: IQueryOptions): Promise<IUserDetail[]>;
	getBy(query: IQueryOptions): Promise<{ data: IUserDetail[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IUserDetail>;
    create(entity: IUserDetail): Promise<IUserDetail>;
    bulkCreate(entities: IUserDetail[]): Promise<IUserDetail[]>;
    updateByID(id: string, entity: IUserDetail): Promise<IUserDetail>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IUserDetailRepository }
