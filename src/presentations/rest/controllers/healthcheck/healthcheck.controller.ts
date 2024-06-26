import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAPIHandlerResponse } from '../../../../core/interfaces/common-interface';
import { inject, injectable } from 'inversify';
import { IHeathcheckUsecase } from '../../../../domains/healthcheck/healthcheck.interceptor';
import { HealthStatus } from '../../../../domains/healthcheck';
import { INTERCEPTOR_TOKENS_TYPES } from '../../../../core/types/interceptors.types';

@injectable()
export class HealthCheckController {
    private useCase: IHeathcheckUsecase;

    constructor(
        @inject(INTERCEPTOR_TOKENS_TYPES.HEALTHCHECK_USECASE)
        useCase: IHeathcheckUsecase,
    ) {
        this.useCase = useCase;
    }

    public GetHealthCheck = async (
        request: Request,
        response: Response,
    ): Promise<IAPIHandlerResponse> => {
        const serverStatus: HealthStatus = new HealthStatus(
            'online',
            'ALIVE 🚀 To infinity and beyond!',
            'v1',
        );
        const result = await this.useCase.onGetHealthCheck(
            serverStatus.toDTO(),
        );

        return response.status(StatusCodes.OK).json({
            data: result,
            message: serverStatus.message as string,
        });
    };
}
