import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IMediaFile } from "./media-files.interface";

// IMediaFileRepository.ts
interface IMediaFileRepository extends IBaseRepository<IMediaFile> {
	getAll(query: IQueryOptions): Promise<IMediaFile[]>;
	getBy(query: IQueryOptions): Promise<{ data: IMediaFile[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IMediaFile>;
    create(entity: IMediaFile): Promise<IMediaFile>;
    bulkCreate(entities: IMediaFile[]): Promise<IMediaFile[]>;
    updateByID(id: string, entity: IMediaFile): Promise<IMediaFile>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IMediaFileRepository }
