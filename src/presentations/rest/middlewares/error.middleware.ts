/**
 * src/presentations/rest/middlewares/error.middlewares.ts
 *
 * Error Middlewares
 * Error handling for every API Routes
 *
 * @author JKDEVELOPER
 * @nickname JK
 * @email jktan0504@hotmail.com
 *
 * @last_update: 30 April 2024
 */
import { NextFunction, Request, Response } from 'express';
import { BaseException } from '../../../core/domain/exceptions/base.exception';

export function ErrorMiddleware(
    err: BaseException,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    // Default error code and message
    let statusCode = 500;
    let errorCode = 'INTERNAL_ERROR';
    let message = 'Internal Error';

    // Check if the error object has custom statusCode, errorCode, and message properties
    if (err.name && err.name === 'CustomError') {
        statusCode = err.statusCode;
        errorCode = err.errorCode;
        message = err.message;
    } else {
        message = err.message;
    }

    res.status(statusCode).json({
        statusCode,
        errorCode,
        message,
    });
}
