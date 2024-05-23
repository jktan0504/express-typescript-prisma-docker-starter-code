// CountryController.ts
import { Request, Response } from 'express';
import { inject, injectable } from "inversify";
import { CountryUseCase } from "../../../../../applications/countries/country/country.usecase";
import { ICountry } from "../../../../../domains/countries/country";
import { INTERCEPTOR_TOKENS_TYPES } from "../../../../../core/types/interceptors.types";
import { BaseController } from "../../../../../core/services/express/base.controller";
import { CountryRepository } from "../../../../../infrastructures/repositories/countries/country/country.repo";
import { StatusCodes } from "http-status-codes";
import { IAPIHandler, IAPIHandlerResponse, IErrorResponse, IQueryOptions } from "../../../../../core/interfaces";
import { Logger } from "../../../../../core/utils/logger";

@injectable()

export class CountryController extends BaseController<ICountry, CountryRepository> {
	
    constructor(@inject(INTERCEPTOR_TOKENS_TYPES.COUNTRY_USECASE) useCase: CountryUseCase) {
        super(useCase);
    }

	get: IAPIHandler = async (req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const query: IQueryOptions = {
                ...req.query,
                include: { currency: true }, // Include the currency model
            };
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

    getByID: IAPIHandler = async (req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse> => {
        try {
            const id = req.params.id;
            const query: IQueryOptions = {
                include: { currency: true }, // Include the currency model
            };
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
