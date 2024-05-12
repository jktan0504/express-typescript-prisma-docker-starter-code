import { injectable } from "inversify";
import { IBaseUseCase, IPagination, IQueryOptions } from "../interfaces";
import { BaseRepository } from "../repository/base.repo";
import { Logger } from "../utils/logger";

@injectable()
class BaseUseCase<T extends { id?: string | bigint }, R extends BaseRepository<T>> implements IBaseUseCase<T> {
    protected repository: R;

    constructor(repository: R) {
        this.repository = repository;
    }

    getAll = async (query: any): Promise<T[]> => {
		return await this.repository.getAll(query);
    }

	getBy = async (query: IQueryOptions): Promise<{ data: T[], meta: IPagination }> => {
        return await this.repository.getBy(query);
    }

    getByID = async (id: string | bigint): Promise<T> => {
		return await this.repository.getByID(id);
    }

    create = async (entity: T): Promise<T> => {
		return await this.repository.create(entity);
    }

    bulkCreate = async (entities: T[]): Promise<T[]> => {
		return await this.repository.bulkCreate(entities);
    }

    updateByID = async (id: string | bigint, entity: T): Promise<T> => {
        return await this.repository.updateByID(id, entity);
    }

    deleteByID = async (id: string | bigint): Promise<boolean> => {
        return await this.repository.deleteByID(id);
    }

    bulkDelete = async (ids: string[] | bigint[] | T[]): Promise<boolean> => {
        return await this.repository.bulkDelete(ids);
    }
}

export { BaseUseCase }