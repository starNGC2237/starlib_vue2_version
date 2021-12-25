/*
 * @Author: zhilutianji
 * @Date: 2021-12-25 18:50:22
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-25 19:48:26
 * @Description: file content
 * @FilePath: \starlib_vue2_version\src\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store'
//引入normalize.css
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
