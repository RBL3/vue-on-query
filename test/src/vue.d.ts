import { PluginFunction, PluginObject } from 'vue';

declare module 'vue/types/vue' {
    interface VueConstructor<V extends Vue = Vue> {
        use<T extends Array<any>>(plugin: PluginObject<any> | PluginFunction<any>, ...options: T): VueConstructor<V>;
    }
}