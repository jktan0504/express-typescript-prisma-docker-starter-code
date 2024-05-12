import { injectable } from 'inversify';

import {
    HealthStatus,
    IHealthCheckDto,
    IHealthCheckResponse,
} from '../../domains/healthcheck';
import { IHeathcheckUsecase } from '../../domains/healthcheck/healthcheck.interceptor';
import { Logger } from '../../core/utils/logger';

@injectable()
export class HealthCheckUsecase implements IHeathcheckUsecase {
    public constructor() {}

    public onGetHealthCheck = async (
        input: IHealthCheckDto,
    ): Promise<IHealthCheckResponse> => {
        try {
            const result = new HealthStatus(
                input.status,
                input.message,
                input.appVersion,
            );

            if (!result) {
                Logger.error('Could not get server status.');
                throw new Error('Could not get server status.');
            }

            Logger.info(result);
            return result;
        } catch (err) {
            Logger.error(err);
            throw new Error('Could not get server status. ' + err);
        }
    };
}
