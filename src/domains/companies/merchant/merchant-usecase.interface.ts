import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IMerchant } from "./merchant.interface";

// IMerchantRepository.ts
interface IMerchantUseCase extends IBaseUseCase<IMerchant> {
	getAll(query: IQueryOptions): Promise<IMerchant[]>;
	getBy(query: IQueryOptions): Promise<{ data: IMerchant[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IMerchant>;
    create(entity: IMerchant): Promise<IMerchant>;
    bulkCreate(entities: IMerchant[]): Promise<IMerchant[]>;
    updateByID(id: string, entity: IMerchant): Promise<IMerchant>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IMerchantUseCase }
