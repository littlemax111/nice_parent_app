// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './config.js'
// import "babel-polyfill"
import router from './router'
import rem from './public/rem'
import $ from 'zepto'
import Vant from 'vant';
import 'vant/lib/index.css';
import services from './services'
// import system from './../js/beyondbit-mobile.min.js'
import VueRouter from 'vue-router'
// const router = new VueRouter({
//   router
// })
import './routeInterceptor';
Vue.use(rem)
Vue.use(Vant)
// window.system = system
window.router = router;
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$services', {value: services});
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,

  render: h => h(App)
}).$mount('#app')
