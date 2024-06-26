import { IBaseUseCase, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IReferralCode } from "./referral-code.interface";


// IReferralCodeRepository.ts
interface IReferralCodeUseCase extends IBaseUseCase<IReferralCode> {
	getAll(query: IQueryOptions): Promise<IReferralCode[]>;
	getBy(query: IQueryOptions): Promise<{ data: IReferralCode[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IReferralCode>;
    create(entity: IReferralCode): Promise<IReferralCode>;
    bulkCreate(entities: IReferralCode[]): Promise<IReferralCode[]>;
    updateByID(id: string, entity: IReferralCode): Promise<IReferralCode>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IReferralCodeUseCase }
