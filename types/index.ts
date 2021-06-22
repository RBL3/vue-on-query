import {Ref} from '@vue/composition-api';

export type DefaultOption = {
    queries?: {
        enabled?: boolean;
        refetchOnWindowFocus?: boolean,
        defaultPageinationOpt?: {
            pageSize: number;
            currentPage: number
        },
        retry?: number | boolean, // 查询重试次数 false不重试 true无限重试
        retryDelay?: number
    }
}

type QueryClientOption = {
    defaultOptions: DefaultOption
}

export type QueryClientConfig = Partial<QueryClientOption>

export type QueryKey = Ref<any> | Ref<any>[]

export type QueryFn<T = any> = (queryKey?: QueryKey) => Promise<T>

export type QueryState = 'loading' | 'success' | 'error'

export type QueryResponse<T = any, E = any> = {
    data: Ref<T | undefined>,
    isLoading: Ref<boolean>,
    error: Ref<E | undefined>,
    isSuccess: Ref<boolean>,
    isError: Ref<E | undefined>,
    isIdle: Ref<boolean>,
    status: Ref<QueryState>
}
