import { IPaginateParams, IPagination } from '../interfaces';

export const makePaginateMeta = (
    params: Partial<IPaginateParams>,
    count: number,
) => {
    const perPage = params.per_page ? Number(params.per_page) : 50;
    const currentPage = params.current_page ? Number(params.current_page) : 1;
    const offset = perPage * (currentPage - 1);

    const pages = Math.ceil(count / perPage);

    const pagination: IPagination = {
        total: count,
        last_page: pages,
        current_page: currentPage,
        per_page: perPage,
        from: offset + 1,
        to: perPage * currentPage,
    };

    return {
        queryPaginate: {
            take: perPage,
            skip: offset,
        },
        meta: pagination,
    };
};
