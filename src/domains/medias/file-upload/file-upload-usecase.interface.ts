import { IGetS3Object } from "../../../core/interfaces";
import { IFileUploadUrlResponse } from "./file-upload.interface";

// IFileUploadUseCase.ts
interface IFileUploadUseCase {
	generateS3SecureUrl(reqBody: IGetS3Object): Promise<IFileUploadUrlResponse>;
}

export { IFileUploadUseCase }
