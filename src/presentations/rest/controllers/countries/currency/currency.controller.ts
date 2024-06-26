// CurrencyController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";
import { CurrencyRepository } from '../../../../../infrastructures/repositories/countries';
import { ICurrency } from '../../../../../domains/countries';
import { CurrencyUseCase } from '../../../../../applications/countries';
import { container } from '../../../../../core/locators/dependencies-injector';

@injectable()
export class CurrencyController extends BaseController<ICurrency, CurrencyRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.CURRENCY_USECASE) useCase: CurrencyUseCase) {
        super(useCase, false);
    }

	get: IAPIHandler = async (req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const query: IQueryOptions = {
                ...req.query,
            };
            if (query) {
                const { data, meta } = await this.useCase.getBy(query);

				// Example of using other use case in here
				// const roleUseCase = container.get<IRoleUseCase>(
				// 	INTERCEPTOR_TOKENS_TYPES.ROLE_USECASE,
				// );

				
				// const all_roles = await roleUseCase.getAll({});
				
                return res.status(StatusCodes.OK).json({
                    data,
                    meta,
					// all_roles,
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

    getByID: IAPIHandler = async (req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const id = req.params.id;
            const query: IQueryOptions = {};
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
}
