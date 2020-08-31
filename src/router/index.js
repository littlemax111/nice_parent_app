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
    // 网校
    {
      path: "/homePage/online",
      name: "homePage",
      component: () => import('@/views/homePage/online'),
    },
    // 校区
    {
      path: "/homePage/school",
      name: "homePage",
      component: () => import('@/views/homePage/school'),
    },
    // 公开课列表
    {
      path: "/homePage/publicClass",
      name: "homePage",
      component: () => import('@/views/homePage/publicClass'),
    },
    // 公开课详情
    {
      path: "/homePage/classDetail",
      name: "homePage",
      component: () => import('@/views/homePage/classDetail'),
    },
    // 资讯列表
    {
      path: "/homePage/news",
      name: "homePage",
      component: () => import('@/views/homePage/news'),
    },
    // 资讯详情
    {
      path: "/homePage/newsDetail",
      name: "homePage",
      component: () => import('@/views/homePage/newsDetail'),
    },
    // 在读年级
    {
      path: "/homePage/grade",
      name: "homePage",
      component: () => import('@/views/homePage/grade'),
    },
    // 选择城市
    {
      path: "/homePage/city",
      name: "homePage",
      component: () => import('@/views/homePage/city'),
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
