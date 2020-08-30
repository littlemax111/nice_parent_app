// 接口文档地址：http://www.xiaoyaoji.cn/doc/1SDWjyh2mX
const time = (new Date()).getTime();
export default {
  'GetCurrentUser':'/api/GetCurrentUser?',//获取用户信息
  'login':'/api/login',//登录
  'sso':'/api/sso',//单点登录
  'GetValidImg':'/api/GetValidImg.png',//图片验证码
  'GetWorkSummary':'/api/GetWorkSummary?',//任务完成情况总览
  'GetRankByOrg':'/api/GetRankByOrg?',//部门排名
  'AllArticleSearchInitial':'/api/AllArticleSearchInitial?',//页面初始数据
  'AllArticleSearch':'/api/AllArticleSearch?',//列表
  'GetTodoWork':'/api/GetTodoWork',//待办事项列表
  'GetUnfinishedWork':'/api/GetUnfinishedWork',//未完成事项列表
  'ArticleForm':'/api/ArticleForm?',//文章内容
  'ChangePassword':'/api/ChangePassword',//修改密码
  'SsoLogout':'/api/SsoLogout?',//注销
  'ArticleListSearch':'/api/ArticleListSearch?',//知识库列表
  'ArticleComment':'/api/ArticleComment?',//详情评论列表
  'ArticleListSearchForMobile':'/api/ArticleListSearchForMobile?',//
  'GetWorkItemReport':'/api/GetWorkItemReport',
  'GetWorkList':'/api/GetWorkList',
  'ArticleAttachment':'/api/ArticleAttachment?',//附件预览
  'ArticleTag':'/api/ArticleTag?'
}
