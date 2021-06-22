<template>
    <div>
        aaa
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api';
import {useQuery} from '../../../lib';
import axios from 'axios';

export default defineComponent({
  setup() {
    const {data} = useQuery(ref(''), () => axios.get('http://localhost:3333/info'));
    return {
      data,
    };
  },
});
</script>
