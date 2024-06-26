import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IPasswordResetToken } from "./password-reset.interface";

// IPasswordResetTokenRepository.ts
interface IPasswordResetTokenRepository extends IBaseRepository<IPasswordResetToken> {
	getAll(query: IQueryOptions): Promise<IPasswordResetToken[]>;
	getBy(query: IQueryOptions): Promise<{ data: IPasswordResetToken[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IPasswordResetToken>;
    create(entity: IPasswordResetToken): Promise<IPasswordResetToken>;
    bulkCreate(entities: IPasswordResetToken[]): Promise<IPasswordResetToken[]>;
    updateByID(id: string, entity: IPasswordResetToken): Promise<IPasswordResetToken>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IPasswordResetTokenRepository }
