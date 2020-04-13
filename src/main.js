import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/sass/common.scss'
import './assets/fontAweSome/font-awesome.min.css'

// 配置请求的根路径
// axios.defaults.baseURL = ""
// axios.defaults.proxy = {
//   host: ''
// };

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
