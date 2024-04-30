import { Request, Response } from 'express';
import { TModel, TModelId } from '../../../core/types';

export interface IPaginateParams {
    per_page: number;
    current_page: number;
}

export interface IPagination {
    total?: number;
    last_page?: number;
    current_page: number;
    per_page: number;
    from: number;
    to: number;
}

export interface IWithPagination<T = any> {
    data: T;
    pagination: IPagination;
}

export interface ITokenInstance {
    token: string;
    expiresIn: number;
}

export interface IGeneratePresignedUrl {
    region: string;
    bucket: string;
    key: string;
}

export interface IGetS3Object {
    Key: string;
    Bucket: string;
}

export interface IUploadS3Object extends IGetS3Object {
    Buffer: Buffer;
}

export interface IGetS3SignedUrl extends IGetS3Object {
    Expires?: number;
}

export interface IPapaParseResponse {
    data?: Array<unknown>;
    errors?: Array<unknown>;
}

export interface IApiHandlerResponse {
    statusCode: number;
    message?: string;
    meta?: object;
    data?: TModel | TModelId | object;
    error?: Error | string | object;
}

export interface IApiHandler {
    (req: Request, res: Response): Promise<IApiHandlerResponse>;
}
