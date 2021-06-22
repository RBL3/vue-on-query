import { Ref } from '@vue/composition-api';
export declare type DefaultOption = {
    queries?: {
        enabled?: boolean;
        refetchOnWindowFocus?: boolean;
        defaultPageinationOpt?: {
            pageSize: number;
            currentPage: number;
        };
        retry?: number | boolean;
        retryDelay?: number;
    };
};
declare type QueryClientOption = {
    defaultOptions: DefaultOption;
};
export declare type QueryClientConfig = Partial<QueryClientOption>;
export declare type QueryKey = Ref<any> | Ref<any>[];
export declare type QueryFn<T = any> = (queryKey?: QueryKey) => Promise<T>;
export declare type QueryState = 'loading' | 'success' | 'error';
export declare type QueryResponse<T = any, E = any> = {
    data: Ref<T | undefined>;
    isLoading: Ref<boolean>;
    error: Ref<E | undefined>;
    isSuccess: Ref<boolean>;
    isError: Ref<E | undefined>;
    isIdle: Ref<boolean>;
    status: Ref<QueryState>;
};
export {};
