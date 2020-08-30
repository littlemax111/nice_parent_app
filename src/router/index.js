import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    // 登录
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/login'),
    },
    // 首页
    {
      path: "/homePage/index",
      name: "homePage",
      component: () => import('@/views/homePage/index'),
    },
    // 选课
    {
      path: "/coursePage/index",
      name: "coursePage",
      component: () => import('@/views/coursePage/index'),
    },
    {
      path: "/coursePage/orderDetail",
      name: "orderDetail",
      component: () => import('@/views/coursePage/orderDetail'),
    },
  ],
});
