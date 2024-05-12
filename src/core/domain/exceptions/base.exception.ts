import { IErrorResponse } from '../../interfaces/error-response.interface';

abstract class BaseException extends Error {
    readonly statusCode: number;
    readonly errorCode: string;
    readonly message: string;

    constructor(errorResponse: IErrorResponse) {
        const { statusCode, errorCode, message } = errorResponse;
        super(message);

        this.name = new.target.name;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;

        Error.captureStackTrace(this);
    }
}

export { BaseException };
