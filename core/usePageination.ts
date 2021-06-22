import {ref, getCurrentInstance} from '@vue/composition-api';
import {DefaultOption} from '../types';
import {mergeObj} from '../utils/mergeOptions';

export type PaginationOptions = {
    pageSize: number;
    currentPage: number
}

export function usePageination(defaultOpt?: PaginationOptions) {
  const ctx = getCurrentInstance();
  if (!ctx) {
    throw new Error('use in vue');
  }
  const defaultOptions: DefaultOption = mergeObj((ctx.proxy as any).$vueQueryOpt?.defaultOptions || {}, defaultOpt);
  const opt = defaultOptions?.queries?.defaultPageinationOpt;
  const pageSize = ref<number>(opt?.pageSize || 20);
  const currentPage = ref<number>(opt?.currentPage || 1);
  const sizeChange = (size: number) => pageSize.value = size;
  const currentChange = (pageNum: number) => currentPage.value = pageNum;
  return {
    pageSize,
    sizeChange,
    currentPage,
    currentChange,
  };
}
