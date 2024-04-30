import { DomainEntity } from '../core/entities/domain.entity';
import { IHealthCheckDto } from './healthcheck.interface';

class HealthStatus extends DomainEntity {
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

	public toDTO(): IHealthCheckDto {
        return {
            name: 'Health Check', // You can customize this name
            status: this.status,
            message: this.message,
            appVersion: this.appVersion,
        };
    }
}

export { HealthStatus };
