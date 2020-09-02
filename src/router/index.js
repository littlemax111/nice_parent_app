import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/homePage/index",
    },
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
      name: "online",
      component: () => import('@/views/homePage/online'),
    },
    // 校区
    {
      path: "/homePage/school",
      name: "school",
      component: () => import('@/views/homePage/school'),
    },
    // 公开课列表+资讯列表
    {
      path: "/homePage/publicClass",
      name: "publicClass",
      component: () => import('@/views/homePage/publicClass'),
    },
    // 公开课详情
    {
      path: "/homePage/classDetail",
      name: "classDetail",
      component: () => import('@/views/homePage/classDetail'),
    },
    // 资讯详情
    {
      path: "/homePage/newsDetail",
      name: "newsDetail",
      component: () => import('@/views/homePage/newsDetail'),
    },
    // 在读年级
    {
      path: "/homePage/grade",
      name: "grade",
      component: () => import('@/views/homePage/grade'),
    },
    // 选择城市
    {
      path: "/homePage/city",
      name: "city",
      component: () => import('@/views/homePage/city'),
    },
    // 选课
    {
      path: "/coursePage/index",
      name: "coursePage",
      component: () => import('@/views/coursePage/index'),
    },
    // 订单详情
    {
      path: "/coursePage/orderDetail",
      name: "orderDetail",
      component: () => import('@/views/coursePage/orderDetail'),
    },
     // 购课信息确认
     {
      path: "/coursePage/byingCourseMessage",
      name: "byingCourseMessage",
      component: () => import('@/views/coursePage/byingCourseMessage'),
    },
    // 购物车
    {
      path: "/coursePage/courseCar",
      name: "courseCar",
      component: () => import('@/views/coursePage/courseCar'),
    },
    //课程详情
    {
      path: "/coursePage/courseDetail",
      name: "courseDetail",
      component: () => import('@/views/coursePage/courseDetail'),
    },
    //我要预约
    {
      path: "/coursePage/appointment",
      name: "appointment",
      component: () => import('@/views/coursePage/appointment'),
    },
    // 预约成功
    {
      path: "/coursePage/appointmented",
      name: "appointmented",
      component: () => import('@/views/coursePage/appointmented'),
    },
    /* 学习模块 */
    {
      path: "/studyPage/index",
      name: "studyPage",
      component: () => import('@/views/studyPage/index'),
    },
    {
      path: "/studyPage/myTimetable",
      name: "myTimetable",
      component: () => import('@/views/studyPage/myTimetable'),
    },
    
    
    // 我的
    {
      path: "/myPage/index",
      name: "myPage",
      component: () => import('@/views/myPage/index'),
    },
  ],
});
