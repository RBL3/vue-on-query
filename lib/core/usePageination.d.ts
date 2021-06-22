export declare type PaginationOptions = {
    pageSize: number;
    currentPage: number;
};
export declare function usePageination(defaultOpt?: PaginationOptions): {
    pageSize: import("@vue/composition-api").Ref<number>;
    sizeChange: (size: number) => number;
    currentPage: import("@vue/composition-api").Ref<number>;
    currentChange: (pageNum: number) => number;
};
