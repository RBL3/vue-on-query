import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
// @ts-ignore
import App from './App.vue';
import VueQuery from '../../lib';


Vue.use(VueCompositionApi);
Vue.use(VueQuery);


new Vue({
  el: '#app',
  render: (h) => h(App),
});
