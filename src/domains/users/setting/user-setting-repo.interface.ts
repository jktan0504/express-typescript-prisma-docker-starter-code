import { IBaseRepository, IPagination, IQueryOptions } from "../../../core/interfaces";
import { IUserSetting } from "./user-setting.interface";

// IUserSettingRepository.ts
interface IUserSettingRepository extends IBaseRepository<IUserSetting> {
	getAll(query: IQueryOptions): Promise<IUserSetting[]>;
	getBy(query: IQueryOptions): Promise<{ data: IUserSetting[], meta: IPagination }>;
    getByID(id: string, query: IQueryOptions): Promise<IUserSetting>;
    create(entity: IUserSetting): Promise<IUserSetting>;
    bulkCreate(entities: IUserSetting[]): Promise<IUserSetting[]>;
    updateByID(id: string, entity: IUserSetting): Promise<IUserSetting>;
    deleteByID(id: string): Promise<any>;
    bulkDelete(ids: string[]): Promise<any>;
}

export { IUserSettingRepository }
