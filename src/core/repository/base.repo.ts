import { PrismaClient } from "@prisma/client";
import { IBaseRepository, IQueryOptions } from "../interfaces";
import { injectable, unmanaged } from "inversify";
import { makePaginateMeta } from "../utils/pagination";

@injectable()
class BaseRepository<T extends { id?: string | bigint }> implements IBaseRepository<T> {
    protected prismaModel: any;
    protected prisma: PrismaClient;

	// IMPORTANT TO ADD: @unmanaged() modelName as we don need to dependencies import this
    constructor(prisma: PrismaClient, @unmanaged() modelName: keyof PrismaClient) {
        this.prisma = prisma;
        this.prismaModel = prisma[modelName];
    }

    getAll = async (query: any): Promise<T[]> => {
        return await this.prismaModel.findMany(query);
    }

	getBy = async (options: IQueryOptions)=> {
        const { per_page, current_page, ...restOptions } = options;

        const where = {};
        for (const key in restOptions) {
            if (options[key]) {
                (where as any)[key] = {
                    contains: options[key],
                    mode: 'insensitive',
                };
            }
        }
        const count = await this.prismaModel.count();
        const { queryPaginate, meta } = makePaginateMeta(
            { per_page, current_page },
            count,
        );

        const data = await this.prismaModel.findMany({
            ...queryPaginate,
            where,
        });

        return { data, meta };
    }

    getByID = async (id: string | bigint): Promise<T> => {
        return await this.prismaModel.findUnique({ where: { id: id } });
    }

    create = async (entity: T): Promise<T> => {
        return await this.prismaModel.create({ data: entity });
    }

    bulkCreate = async (entities: T[]): Promise<T[]> => {
        return await this.prisma.$transaction(entities.map(entity => this.prismaModel.create({ data: entity })));
    }

    updateByID = async (id: string | bigint, entity: T): Promise<T> => {
        return await this.prismaModel.update({ where: { id: id }, data: entity });
    }

    deleteByID = async (id: string | bigint): Promise<boolean> => {
        try {
            await this.prismaModel.delete({ where: { id: id } });
            return true;
        } catch (error) {
            return false;
        }
    }

    bulkDelete = async (ids: T[] | string[] | bigint[]): Promise<boolean> => {
        try {
            await this.prisma.$transaction(ids.map(id => this.prismaModel.delete({ where: { id: id } })));
            return true;
        } catch (error) {
            return false;
        }
    }
}

export { BaseRepository }