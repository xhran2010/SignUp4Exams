// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SIdentify from './components/Tools/identify'
import axios from 'axios'
import md5 from 'js-md5'


Vue.use(ElementUI);
Vue.use(SIdentify)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
