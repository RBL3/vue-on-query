import { DefaultOption, QueryKey, QueryFn, QueryState } from '../types';
export declare function useQuery<T = any, E = any>(queryKey: QueryKey, queryFn: QueryFn<T>, opt?: DefaultOption): {
    data: import("@vue/composition-api").Ref<T>;
    isLoading: import("@vue/composition-api").Ref<boolean>;
    error: import("@vue/composition-api").Ref<E>;
    isSuccess: import("@vue/composition-api").Ref<boolean>;
    isError: import("@vue/composition-api").Ref<boolean>;
    isIdle: import("@vue/composition-api").Ref<boolean>;
    status: import("@vue/composition-api").Ref<QueryState>;
};
