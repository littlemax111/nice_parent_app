import Vue from 'vue'
import App from './App'
import './config.js'
import router from './router'
import rem from './public/rem'
import Vant from 'vant';
import 'vant/lib/index.css';
import services from './services'
import './routeInterceptor';
Vue.use(rem)
Vue.use(Vant)
// window.system = system
window.router = router;
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$services', {value: services});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
