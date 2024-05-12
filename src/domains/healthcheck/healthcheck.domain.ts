
import { BaseEntity } from '../../core/domain/base.entity';
import { IHealthCheckDto } from './healthcheck.interface';

class HealthStatus extends BaseEntity {
    readonly status: string;
    readonly message: string;
    readonly appVersion: string;

    constructor(status: string, message: string, appVersion: string) {
        super();
        this.status = status;
        this.message = message;
        this.appVersion = appVersion;
    }

    public static create(
        status: string,
        message: string,
        appVersion: string,
    ): HealthStatus {
        return new HealthStatus(status, message, appVersion);
    }
}

export { HealthStatus };
