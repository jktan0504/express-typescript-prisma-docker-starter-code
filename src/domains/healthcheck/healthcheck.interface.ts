interface IHealthCheckDto {
    name: string;
    status: string;
    message: string;
    appVersion: string;
}

interface IHealthCheckResponse {
    status: string;
    message: string;
    appVersion: string;
}

export { IHealthCheckDto, IHealthCheckResponse };
