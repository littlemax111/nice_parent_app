// 接口文档地址：http://api.nits.chnnice.com/index.php?s=/16&page_id=1304
const time = (new Date()).getTime();
export default {
  //用户模块
  'login':'/api/Sign/login',//登录
  'getVerifyCode':'/api/Sign/getVerifyCode',//获取验证码
  'checkVerifyCode':'/api/Sign/checkVerifyCode',//验证码登陆
  'resetPwd':'/api/Sign/resetPwd',//修改密码

  //基础模块
  'getGrade':'/api/Base/grade',//获取年级列表
  'getCampus':'/api/Base/campus',//获取校区列表

  //首页
  'banner':'/api/Home/banner',//获取banner
  'article':'/api/Home/article',//获取资讯
  'articleDetail':'/api/Home/articleDetail',//获取单条资讯

  //选课
  'classes':'/api/Classes/querylist',//获取课程列表
  'classesDetail':'/api/Classes/queryone',//获取课程列表
  'createReserve':'/api/Reserve/create',//提交课程预定

  //我的
  'reserveList':'/api/Reserve/querylist',//预定列表
  'studentList':'/api/User/student',//学员列表
}

