<template>
    <div class="example">
        <template v-if="isSuccess">
            <div v-for="(item, idx) in data.data.data" :key="idx">
                {{item.userName}} - {{item.password}}
            </div>
        </template>
        <template v-if="isError">
            isError {{status}}
        </template>
        <template v-if="isIdle">
            isIdle {{isIdle}}
        </template>
        <v-com1 v-if="isShow" />
        <button @click="tab">button</button>
    </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, ref} from '@vue/composition-api';
import vCom1 from './pages/com1.vue';
import {useQuery, useQueries} from '../../lib';
import axios, {AxiosResponse} from 'axios';

type Info = {
    userName: string;
    password: string;
}

type WrapResponse<T = any> = {
    code: number;
    data: T
    msg: string;
}

export default defineComponent({
  components: {
    vCom1,
  },
  setup() {
    const isShow = ref<boolean>(true);
    const proxy = getCurrentInstance()?.proxy;
    const key = ref('');
    const {data, isLoading, isSuccess, isError, status, isIdle} = useQuery<AxiosResponse<WrapResponse<Info[]>>>(key, () => axios.get('http://localhost:3333/inf'), {
      queries: {
        refetchOnWindowFocus: false,
      },
    });

    function tab() {
      isShow.value = !isShow.value;
    }

    // const result = useQueries([{
    //   queryKey: ref('keys'),
    //   queryFn: () => axios.get('http://localhost:3333/info'),
    // }, {
    //   queryKey: ref('key2'),
    //   queryFn: () => axios.get('http://localhost:3333/info'),
    // }]);

    // console.log('result', result);

    return {
      data,
      isLoading,
      isSuccess,
      isError,
      status,
      isIdle,
      isShow,
      tab,
    };
  },
});
</script>

<style>

</style>
