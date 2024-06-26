// MediaFileUseCase.ts

import { injectable } from "inversify";
import { IFileUploadUrlResponse, IFileUploadUseCase } from "../../../domains/medias";
import { IGetS3Object } from "../../../core/interfaces";
import { generateSecureUrl } from "../../../core/utils";

@injectable()
class FileUploadUseCase implements IFileUploadUseCase {
	generateS3SecureUrl = async (reqBody: IGetS3Object): Promise<IFileUploadUrlResponse> => {
		try {
			return await generateSecureUrl(reqBody)
		} catch (error) {
			throw error
		}
	}
}

export { FileUploadUseCase } 
