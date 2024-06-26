// MediaUseCase.ts

import { inject, injectable } from "inversify";
import { BaseUseCase } from "../../../core/application/base.usecase";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../core/types/interceptors.types";
import { IPagination, IQueryOptions } from "../../../core/interfaces/common-interface";
import { IMedia, IMediaUseCase } from "../../../domains/medias";
import { MediaRepository } from "../../../infrastructures/repositories/medias";

@injectable()
class MediaUseCase extends BaseUseCase<IMedia, MediaRepository> implements IMediaUseCase {

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.MEDIA_REPO)
        repository: MediaRepository,
    ) {
        super(repository, true);
    }

	// Override
	getAll = async (query: IQueryOptions): Promise<IMedia[]> => {
		return await this.repository.getAll({
			...query,
			include: {
				media_files: true,
			}
		});
    }

	getBy = async (query: IQueryOptions): Promise<{ data: IMedia[], meta: IPagination }> => {
        return await this.repository.getBy({
			...query,
			include: {
				media_files: true,
			}
		});
    }

    getByID = async (id: string | bigint, query: IQueryOptions): Promise<IMedia> => {
		return await this.repository.getByID(id, {
			...query,
			include: {
				media_files: true,
			}
		});
    }
}

export { MediaUseCase } 
