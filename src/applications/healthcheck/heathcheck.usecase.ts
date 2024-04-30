
import { injectable } from "inversify"
import { IBaseUseCase } from "../../core/interfaces/base-usecase.interface"
import { HealthStatus, IHealthCheckDto, IHealthCheckResponse } from "../../domains/healthcheck"
import { IHeathcheckUsecase } from "../../domains/healthcheck/healthcheck.interceptor"

@injectable()
export class HealthCheckUsecase implements IHeathcheckUsecase {
  	public constructor() {}
	
	public onGetHealthCheck = async (input: IHealthCheckDto): Promise<IHealthCheckResponse> => {
		try {
			const result = new HealthStatus(input.status, input.message, input.appVersion)

			if (!result) {
				throw new Error("Could not get server status.")
			}

			return result
		} catch (err) {
			throw new Error("Could not get server status. "+err)
		}
	}
}