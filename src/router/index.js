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
    //找回密码
    {
      path: "/findPwd",
      name: "findPwd",
      component: () => import('@/views/findPwd'),
    },
    //验证码登录
    {
      path: "/codeLogin",
      name: "codeLogin",
      component: () => import('@/views/codeLogin'),
    },
    //设置密码
    {
      path: "/setPwd",
      name: "setPwd",
      component: () => import('@/views/setPwd'),
    },
    // 首页
    {
      path: "/homePage/index",
      name: "homePage",
      component: () => import('@/views/homePage/index'),
    },
    // 搜索页
    {
      path: "/homePage/search",
      name: "search",
      component: () => import('@/views/homePage/search'),
    },
    // 纳思书院
    {
      path: "/homePage/nasiSchool",
      name: "nasiSchool",
      component: () => import('@/views/homePage/nasiSchool'),
    },
    // 网校
    {
      path: "/homePage/online",
      name: "online",
      component: () => import('@/views/homePage/online'),
    },
    // 校区查询
    {
      path: "/homePage/campusQuery",
      name: "campusQuery",
      component: () => import('@/views/homePage/campusQuery'),
    },
    // 校区查询
    {
      path: "/homePage/campusDetail",
      name: "campusDetail",
      component: () => import('@/views/homePage/campusDetail'),
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
    // 首页
    {
      path: "/studyPage/index",
      name: "studyPage",
      component: () => import('@/views/studyPage/index'),
    },
    // 我的课表
    {
      path: "/studyPage/myTimetable",
      name: "myTimetable",
      component: () => import('@/views/studyPage/myTimetable'),
    },
    // 服务统计
    {
      path: "/studyPage/serviceStatistics",
      name: "serviceStatistics",
      component: () => import('@/views/studyPage/serviceStatistics'),
    },
    // 学习报告
    {
      path: "/studyPage/studyReport",
      name: "studyReport",
      component: () => import('@/views/studyPage/studyReport'),
    },
    // 待看回放
    {
      path: "/studyPage/playBack",
      name: "playBack",
      component: () => import('@/views/studyPage/playBack'),
    },
    // 精品课列表
    {
      path: "/studyPage/courseList",
      name: "courseList",
      component: () => import('@/views/studyPage/courseList'),
    },
      // 作业管理
      {
        path: "/studyPage/jobManagement",
        name: "jobManagement",
        component: () => import('@/views/studyPage/jobManagement'),
      },
    // 学习资料
    {
      path: "/studyPage/learningMaterials",
      name: "learningMaterials",
      component: () => import('@/views/studyPage/learningMaterials'),
    },
    // 讲次详情
    {
      path: "/studyPage/details",
      name: "details",
      component: () => import('@/views/studyPage/details'),
    },
    // 我的
    {
      path: "/myPage/index",
      name: "myPage",
      component: () => import('@/views/myPage/index'),
    },
    // 订单
    {
      path: "/myPage/order",
      name: "order",
      component: () => import('@/views/myPage/order'),
    },
    // 课程
    {
      path: "/myPage/course",
      name: "course",
      component: () => import('@/views/myPage/course'),
    },
    // 消息中心
    {
      path: "/myPage/message",
      name: "message",
      component: () => import('@/views/myPage/message'),
    },
    // 意见反馈
    {
      path: "/myPage/advice",
      name: "advice",
      component: () => import('@/views/myPage/advice'),
    },
    // 设置
    {
      path: "/myPage/setting",
      name: "setting",
      component: () => import('@/views/myPage/setting'),
    },
    // 设置-关于
    {
      path: "/myPage/about",
      name: "about",
      component: () => import('@/views/myPage/setAbout'),
    },
    // 设置-关于-用户协议
    {
      path: "/myPage/userAgreement",
      name: "userAgreement",
      component: () => import('@/views/myPage/userAgreement'),
    },
    // 设置-关于-隐私协议
    {
      path: "/myPage/privacyAgreement",
      name: "privacyAgreement",
      component: () => import('@/views/myPage/privacyAgreement'),
    },
    // 设置-账号安全
    {
      path: "/myPage/safe",
      name: "safe",
      component: () => import('@/views/myPage/setSafe'),
    },
    // 设置-更换手机
    {
      path: "/myPage/changePhone",
      name: "changePhone",
      component: () => import('@/views/myPage/changePhone'),
    },
    // 设置-绑定手机
    {
      path: "/myPage/bindPhone",
      name: "bindPhone",
      component: () => import('@/views/myPage/bindPhone'),
    },
    // 设置-修改密码
    {
      path: "/myPage/editPwd",
      name: "editPwd",
      component: () => import('@/views/myPage/editPwd'),
    },
    // 设置-地址管理
    {
      path: "/myPage/address",
      name: "address",
      component: () => import('@/views/myPage/address'),
    },
    // 设置-地址管理-添加
    {
      path: "/myPage/addAddress",
      name: "addAddress",
      component: () => import('@/views/myPage/addAddress'),
    },
    // 设置-地址管理-编辑
    {
      path: "/myPage/editAddress",
      name: "editAddress",
      component: () => import('@/views/myPage/editAddress'),
    },
    // 钱包
    {
      path: "/myPage/money",
      name: "money",
      component: () => import('@/views/myPage/money'),
    },
    // 优惠卷
    {
      path: "/myPage/coupon",
      name: "coupon",
      component: () => import('@/views/myPage/coupon'),
    },
    // 个人资料
    {
      path: "/myPage/person",
      name: "person",
      component: () => import('@/views/myPage/person'),
    },
    // 个人资料-学校编辑
    {
      path: "/myPage/editSchool",
      name: "editSchool",
      component: () => import('@/views/myPage/editSchool'),
    },
    // 学校编辑
    {
      path: "/myPage/changeSchool",
      name: "changeSchool",
      component: () => import('@/views/myPage/changeSchool'),
    },
    // 学员
    {
      path: "/myPage/student",
      name: "student",
      component: () => import('@/views/myPage/student'),
    },
    // 添加学员
    {
      path: "/myPage/addStudent",
      name: "addStudent",
      component: () => import('@/views/myPage/addStudent'),
    },
  ],
});
