import { IBaseRepository, IBaseUseCase } from "../../../core/interfaces";
import { ICurrency } from "./currency.interface";

// ICurrencyRepository.ts
interface ICurrencyUseCase extends IBaseUseCase<ICurrency> {
    getAll(query: any): Promise<ICurrency[]>;
    getByID(id: bigint): Promise<ICurrency>;
    create(entity: ICurrency): Promise<ICurrency>;
    bulkCreate(entities: ICurrency[]): Promise<ICurrency[]>;
    updateByID(id: bigint, entity: ICurrency): Promise<ICurrency>;
    deleteByID(id: bigint): Promise<boolean>;
    bulkDelete(ids: bigint[]): Promise<boolean>;
}

export { ICurrencyUseCase }
