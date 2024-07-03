import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 三级联动组件
import TypeNav from '@/components/TypeNav';
import {reqCategoryList} from '@/api';
import store from '@/store';
Vue.config.productionTip = false
// 注册全局组件
Vue.component(TypeNav.name, TypeNav)


new Vue({
  render: h => h(App),
  // 注册插件
  router,
  store
}).$mount('#app')
