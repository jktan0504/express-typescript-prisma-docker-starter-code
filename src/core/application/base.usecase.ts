import { injectable } from "inversify";
import { IBaseUseCase, IPagination, IQueryOptions } from "../interfaces";
import { BaseRepository } from "../repository/base.repo";
import { genId } from "../utils/generator";

@injectable()
class BaseUseCase<T extends { id?: string | bigint }, R extends BaseRepository<T>> implements IBaseUseCase<T> {
    protected repository: R;
	protected isIDString: boolean; // Default value is set to false

    constructor(repository: R, isIDString: boolean = false) {
        this.repository = repository;
        this.isIDString = isIDString;
    }

    getAll = async (query: IQueryOptions): Promise<T[]> => {
		return await this.repository.getAll(query);
    }

	getBy = async (query: IQueryOptions): Promise<{ data: T[], meta: IPagination }> => {
        return await this.repository.getBy(query);
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<T> => {
		return await this.repository.getByID(id, query);
    }

    create = async (entity: T): Promise<T> => {
		if (this.isIDString && (typeof entity.id === 'undefined' || typeof entity.id === null)) {
			entity.id = genId();  // Generate a new UUID 
		}
		return await this.repository.create(entity);
    }

    bulkCreate = async (entities: T[]): Promise<T[]> => {
		return await this.repository.bulkCreate(entities);
    }

    updateByID = async (id: string | bigint, entity: T): Promise<T> => {
        return await this.repository.updateByID(id, entity);
    }

    deleteByID = async (id: string | bigint): Promise<any> => {
        return await this.repository.deleteByID(id);
    }

    bulkDelete = async (ids: string[] | bigint[] | T[]): Promise<any> => {
        return await this.repository.bulkDelete(ids);
    }
}

export { BaseUseCase }