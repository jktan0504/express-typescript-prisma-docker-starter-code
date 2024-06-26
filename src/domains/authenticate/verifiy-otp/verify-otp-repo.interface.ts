import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IVerifyOTP } from "./verify-otp.interface";

// IVerifyOTPRepository.ts
interface IVerifyOTPRepository extends IBaseRepository<IVerifyOTP> {
	getAll(query: IQueryOptions): Promise<IVerifyOTP[]>;
	getBy(query: IQueryOptions): Promise<{ data: IVerifyOTP[], meta: IPagination }>;
    getByID(id: bigint, query: IQueryOptions): Promise<IVerifyOTP>;
    create(entity: IVerifyOTP): Promise<IVerifyOTP>;
    bulkCreate(entities: IVerifyOTP[]): Promise<IVerifyOTP[]>;
    updateByID(id: bigint, entity: IVerifyOTP): Promise<IVerifyOTP>;
    deleteByID(id: bigint): Promise<any>;
    bulkDelete(ids: bigint[]): Promise<any>;
}

export { IVerifyOTPRepository }
