import {DefaultOption, QueryClientConfig} from './types';
import Vue, {VueConstructor} from 'vue';
import {isEmptyObject} from './utils';
import {mergeObj} from './utils/mergeOptions';

export * from './core';
export * from './types';

const defaultOptions: DefaultOption = {
  queries: {
    enabled: true,
    refetchOnWindowFocus: true,
    defaultPageinationOpt: {
      pageSize: 20,
      currentPage: 1,
    },
    retry: 3,
    retryDelay: 3000,
  },
};


export default {
  install(Vue: VueConstructor<Vue>, opt?: QueryClientConfig) {
    Vue.prototype.$vueQueryOpt = !isEmptyObject(opt) ? mergeObj({
      defaultOptions,
    }, opt) : {...defaultOptions};
  },
};

