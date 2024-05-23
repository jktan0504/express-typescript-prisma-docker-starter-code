import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { ICountry } from "./country.interface";

// ICountryRepository.ts
interface ICountryUseCase extends IBaseUseCase<ICountry> {
	getAll(query: IQueryOptions): Promise<ICountry[]>;
	getBy(query: IQueryOptions): Promise<{ data: ICountry[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<ICountry>;
    create(entity: ICountry): Promise<ICountry>;
    bulkCreate(entities: ICountry[]): Promise<ICountry[]>;
    updateByID(id: bigint, entity: ICountry): Promise<ICountry>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { ICountryUseCase }
