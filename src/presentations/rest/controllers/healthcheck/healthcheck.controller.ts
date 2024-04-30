import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IApiHandlerResponse } from "../../../../domains/core/interfaces/common-interface";
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TYPES } from "../../../../core/types/interceptors.types";
import { IHeathcheckUsecase } from "../../../../domains/healthcheck/healthcheck.interceptor";
import { HealthCheck } from "aws-sdk/clients/eventbridge";
import { HealthStatus, IHealthCheckDto } from "../../../../domains/healthcheck";
import { DomainEntity } from "../../../../domains/core/entities/domain.entity";

@injectable()
export class HealthCheckController {

	private useCase: IHeathcheckUsecase;
	
	constructor(
		@inject(INTERCEPTOR_TYPES.HEALTHCHECK_USECASE) useCase: IHeathcheckUsecase
	) {
		this.useCase = useCase;
	}
	

	public GetHealthCheck = async (request: Request, response: Response): Promise<IApiHandlerResponse> => {
		const serverStatus: HealthStatus = new HealthStatus(
			"online",
			"ALIVE 🚀 To infinity and beyond!",
			"v1"
		);
		const result = await this.useCase.onGetHealthCheck(serverStatus.toDTO())

		return response.status(StatusCodes.OK).json({
			data: result,
			message: serverStatus.message as string,
		});
	}
}