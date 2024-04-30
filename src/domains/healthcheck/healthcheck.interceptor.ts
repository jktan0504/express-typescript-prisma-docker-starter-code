import { IHealthCheckDto, IHealthCheckResponse } from './healthcheck.interface';

export interface IHeathcheckUsecase {
    onGetHealthCheck(input: IHealthCheckDto): Promise<IHealthCheckResponse>;
}
