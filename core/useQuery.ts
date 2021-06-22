import {ref, watch, getCurrentInstance, onUnmounted} from '@vue/composition-api';
import {refetchOnWindowFocusFn} from '../utils';
import {mergeObj} from '../utils/mergeOptions';
import {DefaultOption, QueryKey, QueryFn, QueryState} from '../types';
import {queryAgain} from './queryAgain';

export function useQuery<T = any, E = any>(queryKey: QueryKey, queryFn: QueryFn<T>, opt?: DefaultOption) {
  const ctx = getCurrentInstance();
  if (!ctx) {
    throw new Error('use in vue');
  }
  const data = ref<undefined | T>();
  const isLoading = ref<boolean>(false);
  const error = ref<E | undefined>();
  const isSuccess = ref<boolean>(false);
  const isError = ref<boolean>(false);
  const isFetching = ref<boolean>(false); // 查询中
  const isIdle = ref<boolean>(false);
  const status = ref<QueryState>('loading');

  // inner vars
  // TODO 公共配置统一处理
  const currentOptions: DefaultOption = mergeObj((ctx.proxy as any).$vueQueryOpt || {}, opt);
  let unTimer: () => void;

  // reset
  const resetData = () => {
    status.value = 'loading';
    data.value = error.value = undefined;
  };
  const resetState = () => {
    isSuccess.value = isError.value = isIdle.value = isFetching.value = false;
  };

  // options
  const {queries} = currentOptions;
  const {enabled, refetchOnWindowFocus, retry, retryDelay} = queries || {};

  const unWinEventFn = refetchOnWindowFocus ? refetchOnWindowFocusFn(query) : query();

  function query() {
    if (!enabled) {
      resetData();
      isIdle.value = true;
      return;
    }
    resetState();
    isLoading.value = true;
    isFetching.value = true;
    queryFn().then((res) => {
      data.value = res;
      isSuccess.value = true;
      status.value = 'success';
    }).catch((err) => {
      error.value = err;
      isError.value = true;
      status.value = 'error';
      // 接入查询重试
      if (!(typeof retry === 'boolean' && !retry)) {
        !unTimer && (unTimer = queryAgain(query, retry, retryDelay));
      }
    }).finally(() => {
      isLoading.value = false;
      isFetching.value = false;
    });
  }

  watch(queryKey, () => {
    query();
  }, {
    deep: true,
    immediate: true,
  });

  onUnmounted(() => {
    unWinEventFn && unWinEventFn();
    unTimer && unTimer();
  });

  return {
    data,
    isLoading,
    error,
    isSuccess,
    isError,
    isIdle,
    status,
  };
}
