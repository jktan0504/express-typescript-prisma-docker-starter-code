import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

export const createValidator =
    (schema: Joi.ObjectSchema<unknown>) =>
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const { body } = request;
            await schema.validateAsync(body);

            next();
        } catch (error) {
            return response.status(422).json({ error });
        }
    };
