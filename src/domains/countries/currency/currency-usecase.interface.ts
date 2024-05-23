import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { ICurrency } from "./currency.interface";

// ICurrencyRepository.ts
interface ICurrencyUseCase extends IBaseUseCase<ICurrency> {
	getAll(query: IQueryOptions): Promise<ICurrency[]>;
	getBy(query: IQueryOptions): Promise<{ data: ICurrency[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<ICurrency>;
    create(entity: ICurrency): Promise<ICurrency>;
    bulkCreate(entities: ICurrency[]): Promise<ICurrency[]>;
    updateByID(id: bigint, entity: ICurrency): Promise<ICurrency>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { ICurrencyUseCase }
