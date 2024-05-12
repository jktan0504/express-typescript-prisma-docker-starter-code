import { IAPIHandlerResponse, IPagination, IQueryOptions } from "./common-interface";
import { IErrorResponse } from "./error-response.interface";
import { Request, Response } from "express";

// IBaseInterface.ts
interface IBaseInterface {
	id?: string | bigint;
	activated?: boolean;
	created_at?: Date;
	updated_at?: Date;
	created_by_id?: string; 
	updated_by_id?: string;
}

// IBaseRepository.ts
interface IBaseRepository<T> {
	getAll(query: any): Promise<T[]>; 
	getBy(options: IQueryOptions): Promise<{ data: T[], meta: IPagination }>;
    getByID(id: string | bigint): Promise<T>;
	create(entity: T): Promise<T>;
	bulkCreate(entities: T[]): Promise<T[]>
    updateByID(id: string | bigint, entity: T): Promise<T>;
    deleteByID(id: string | bigint): Promise<boolean>;
	bulkDelete(entities: T[] | string[] | bigint[]): Promise<boolean>
}

// IBaseUseCase.ts
interface IBaseUseCase<T> {
    getAll(query: any): Promise<T[]>;
	getBy(options: IQueryOptions): Promise<{ data: T[], meta: IPagination }>;
    getByID(id: string | bigint): Promise<T>;
    create(entity: T): Promise<T>;
    bulkCreate(entities: T[]): Promise<T[]>;
    updateByID(id: string | bigint, entity: T): Promise<T>;
    deleteByID(id: string | bigint): Promise<boolean>;
    bulkDelete(ids: string[] | bigint[] | T[]): Promise<boolean>;
}

// IBaseController.ts
interface IBaseController<T> {
	get(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
    getByID(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
    create(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
	bulkCreate(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
    updateByID(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
    deleteByID(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
	bulkDelete(req: Request, res: Response): Promise<IAPIHandlerResponse | IErrorResponse>;
}

// OtherUseCase
interface IOtherUseCase<TInput, TOutput> {
    onExecute(input: TInput): Promise<TOutput>;
}

export { IBaseInterface, IBaseUseCase, IBaseRepository, IBaseController, IOtherUseCase }
