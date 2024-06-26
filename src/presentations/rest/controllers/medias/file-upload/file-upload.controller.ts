import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAuthUseCase } from '../../../../../domains/authenticate';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { inject, injectable } from 'inversify';
import { IAPIHandlerResponse } from '../../../../../core/interfaces';
import { IFileUploadUseCase } from '../../../../../domains/medias';


@injectable()
export class FileUploadController {
    private useCase: IFileUploadUseCase;

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.FILE_UPLOAD_USECASE)
        useCase: IFileUploadUseCase,
    ) {
        this.useCase = useCase;
    }

	// Generate Secure Signed Url
    public mediaGenerateSecureSignedUrl = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse> => {
		try {
            const entity = req.body;
        
            const result = await this.useCase.generateS3SecureUrl(entity);

            return res.status(StatusCodes.OK).json({
                data: result,
            });
        } catch (error) {
            // Pass the error to the global error handler
            throw error;
        }
    };
}
