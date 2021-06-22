import { QueryClientConfig } from './types';
import Vue, { VueConstructor } from 'vue';
export * from './core';
export * from './types';
declare const _default: {
    install(Vue: VueConstructor<Vue>, opt?: QueryClientConfig): void;
};
export default _default;
