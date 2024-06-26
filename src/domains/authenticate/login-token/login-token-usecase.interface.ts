import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IUserLoginToken } from "./login-token.interface";

// IUserLoginTokenRepository.ts
interface IUserLoginTokenUseCase extends IBaseUseCase<IUserLoginToken> {
	getAll(query: IQueryOptions): Promise<IUserLoginToken[]>;
	getBy(query: IQueryOptions): Promise<{ data: IUserLoginToken[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IUserLoginToken>;
    create(entity: IUserLoginToken): Promise<IUserLoginToken>;
	createOrUpdate(entity: IUserLoginToken): Promise<IUserLoginToken>;
    bulkCreate(entities: IUserLoginToken[]): Promise<IUserLoginToken[]>;
    updateByID(id: string, entity: IUserLoginToken): Promise<IUserLoginToken>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IUserLoginTokenUseCase }
