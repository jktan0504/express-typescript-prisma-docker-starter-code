// BaseController.ts
import { Request, Response } from 'express';

import { Logger } from '../../utils/logger';
import {
    IAPIHandler,
    IAPIHandlerResponse,
    IBaseController,
    IErrorResponse,
    IQueryOptions,
} from '../../interfaces';
import { StatusCodes } from 'http-status-codes';
import { BaseUseCase } from '../../application/base.usecase';
import { BaseRepository } from '../../repository/base.repo';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseController<
    T extends { id?: string | bigint | undefined },
    R extends BaseRepository<T>,
> implements IBaseController<T>
{
    constructor(protected useCase: BaseUseCase<T, R>) {}

    get: IAPIHandler = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const query: IQueryOptions = req.query;
            if (query) {
                const { data, meta } = await this.useCase.getBy(query);
                return res.status(StatusCodes.OK).json({
                    data,
                    meta,
                    message: `[GET] ${req.route.path} is successfully`,
                });
            }

            const entities = await this.useCase.getAll(query);
            return res.status(StatusCodes.OK).json({
                data: entities,
                message: `[GET] ${req.route.path} is successfully`,
            });
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    };

    getByID: IAPIHandler = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const id = req.params.id;
			const query = req.query;
            const entity = await this.useCase.getByID(id, query);
            return res.status(StatusCodes.OK).json({
                data: entity,
                message: `[GET] ${req.route.path} is successfully`,
            });
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    };

    create: IAPIHandler = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const entity = req.body;
            const createdEntity = await this.useCase.create(entity);
            return res.status(StatusCodes.CREATED).json({
                data: createdEntity,
                message: `[POST] ${req.route.path} is successfully`,
            });
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    };

    bulkCreate: IAPIHandler = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const entities = req.body;
            const createdEntities = await this.useCase.bulkCreate(entities);
            return res.status(StatusCodes.CREATED).json({
                data: createdEntities,
                message: `[POST] ${req.route.path} is successfully`,
            });
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    };

    updateByID: IAPIHandler = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const id = req.params.id;
            const entity = req.body;
            const updatedEntity = await this.useCase.updateByID(id, entity);

            return res.status(StatusCodes.OK).json({
                data: updatedEntity,
                message: `[PATCH] ${req.route.path} is successfully`,
            });
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    };

    deleteByID: IAPIHandler = async (
		req: Request,
		res: Response,
	): Promise<IAPIHandlerResponse | IErrorResponse> => {
		try {
			const id = req.params.id;
			await this.useCase.deleteByID(id);
			Logger.info(req.route.path)
			return res.status(StatusCodes.OK).json({
				message: `[DELETE] ${req.route.path} is successfully`,
			});
		} catch (error: any) {
			if (error.code === 'P2025' || error.code === 'P2003') {
				return res.status(StatusCodes.NOT_FOUND).json({
					error: `Entity with ID ${req.params.id} not found`,
				});
			}
			Logger.error(error);
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
				error: 'An error occurred while deleting the entity',
			});
		}
	};

    bulkDelete: IAPIHandler = async (
        req: Request,
        res: Response,
    ): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const ids = req.body;
            await this.useCase.bulkDelete(ids);
            return res.status(StatusCodes.OK);
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    };
}
