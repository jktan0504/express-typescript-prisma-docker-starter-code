import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IMedia } from "./media.interface";

// IMediaRepository.ts
interface IMediaUseCase extends IBaseUseCase<IMedia> {
	getAll(query: IQueryOptions): Promise<IMedia[]>;
	getBy(query: IQueryOptions): Promise<{ data: IMedia[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IMedia>;
    create(entity: IMedia): Promise<IMedia>;
    bulkCreate(entities: IMedia[]): Promise<IMedia[]>;
    updateByID(id: string, entity: IMedia): Promise<IMedia>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IMediaUseCase }
