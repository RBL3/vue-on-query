import { QueryKey, QueryFn, QueryResponse } from '../types';
declare type QueriesBody<T> = {
    queryKey: QueryKey;
    queryFn: QueryFn<T>;
};
export declare function useQueries<T = any, E = any>(queriesBodyList: QueriesBody<T>[]): QueryResponse<T, E>[];
export {};
