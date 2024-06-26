import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAuthUseCase } from '../../../../../domains/authenticate';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../../core/types/interceptors.types';
import { inject, injectable } from 'inversify';
import { IAPIHandlerResponse } from '../../../../../core/interfaces';


@injectable()
export class AuthController {
    private useCase: IAuthUseCase;

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.AUTH_USECASE)
        useCase: IAuthUseCase,
    ) {
        this.useCase = useCase;
    }

	// Login
    public authLogin = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse> => {
		try {
            const entity = req.body;
        
            const result = await this.useCase.login(entity);

            return res.status(StatusCodes.OK).json({
                data: result,
            });
        } catch (error) {
            // Pass the error to the global error handler
            throw error;
        }
    };

	// Request OTP
	public authRequestOTP = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse> => {
		try {
            const entity = req.body;
        
            const result = await this.useCase.requestOTP(entity);

            return res.status(StatusCodes.OK).json({
                data: result,
            });
        } catch (error) {
            // Pass the error to the global error handler
            throw error;
        }
    };

	// Verify OTP
	public authVerifyOTP = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse> => {
		try {
            const entity = req.body;
        
            const result = await this.useCase.verifyOTP(entity);

            return res.status(StatusCodes.OK).json({
                data: result,
            });
        } catch (error) {
            // Pass the error to the global error handler
            throw error;
        }
    };
}
