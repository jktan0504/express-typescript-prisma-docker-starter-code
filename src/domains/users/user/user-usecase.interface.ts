import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IUser } from "./user.interface";


// IUserRepository.ts
interface IUserUseCase extends IBaseUseCase<IUser> {
	getAll(query: IQueryOptions): Promise<IUser[]>;
	getBy(query: IQueryOptions): Promise<{ data: IUser[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IUser>;
    create(entity: IUser): Promise<IUser>;
    bulkCreate(entities: IUser[]): Promise<IUser[]>;
    updateByID(id: string, entity: IUser): Promise<IUser>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IUserUseCase }
