// MediaFileUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { MediaFileRepository } from "../../../infrastructures/repositories/medias";
import { IMediaFile, IMediaFileUseCase } from "../../../domains/medias";
import { IPagination, IQueryOptions } from "../../../core/interfaces";

@injectable()
class MediaFileUseCase extends BaseUseCase<IMediaFile, MediaFileRepository> implements IMediaFileUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.MEDIA_FILE_REPO)
        repository: MediaFileRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IMediaFile[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				media: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IMediaFile[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				media: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IMediaFile> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				media: true,
			}
		});
    }
}

export { MediaFileUseCase } 
