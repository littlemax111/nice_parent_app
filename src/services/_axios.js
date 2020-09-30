/**
 *
 * @authors liwb (you@example.org)
 * @date    2017/11/13 11:13
 * @version $ https://github.com/mzabriskie/axios
 * 安卓4.4.3一下的手机还是不支持Promise的,需要引入npm install babel-polyfill和npm install babel-runtime，在入口文件上加上即可
 * import 'babel-polyfill';
 */

/* name module */
import Qs from 'qs';
import axios from 'axios';
import autoMatchBaseUrl from './autoMatchBaseUrl';

// 添加一个请求拦截器 （于transformRequest之前处理）
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // 当出现请求错误是做一些处理
  return Promise.reject(error);
});

// 添加一个返回拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 对返回的错误进行一些处理
  return Promise.reject(error);
});

function checkStatus(response) {
  // 如果http状态码正常，则直接返回数据
  if (response) {
    // -1000 自己定义，连接错误的status
    const status = response.status || -1000;
    if (status === 200) {
      // 如果不需要除了data之外的数据，可以直接 return response.data
      return response.data;
    } else {
      let errorInfo = '';
      switch (status) {
        case -1:
          errorInfo = '远程服务响应失败,请稍后重试';
          break;
        case 400:
          errorInfo = '400: 错误请求';
          break;
        case 401:
          errorInfo = '401: 访问令牌无效或已过期';
          break;
        case 403:
          errorInfo = '403: 拒绝访问';
          break;
        case 404:
          errorInfo = '404：资源不存在';
          break;
        case 405:
          errorInfo = '405: 请求方法未允许'
          break;
        case 408:
          errorInfo = '408: 请求超时'
          break;
        case 500:
          errorInfo = '500：访问服务失败';
          break;
        case 501:
          errorInfo = '501：未实现';
          break;
        case 502:
          errorInfo = '502：无效网关';
          break;
        case 503:
          errorInfo = '503: 服务不可用'
          break;
        default:
          errorInfo = `连接错误${status}`
      }
      return {
        status,
        msg: errorInfo
      }
    }
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  };
}

/**
 * 基于axios ajax请求
 * @param url
 * @param method
 * @param timeout
 * @param prefix 用来拼接url地址
 * @param data
 * @param headers
 * @param dataType
 * @returns {Promise.<T>}
 * @private
 */
export default function _Axios(url, {
  method = '',
  timeout = 60000,
  prefix = '',
  data = {},
  headers = {},
  dataType = 'json'
}) {
  const baseURL = autoMatchBaseUrl(prefix);

  let sid = "";


  headers = Object.assign({}, method === 'get' ? {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
    //'X-Openerp-Session-Id': sid,
    //'app': 'yes'
  } : {
      'X-Requested-With': 'XMLHttpRequest',
       'Accept': 'application/json',
       'Content-Type': 'application/json; charset=UTF-8',
      //'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     // 'X-Openerp-Session-Id': sid,
     // 'app': 'yes'
    }, headers);

  const defaultConfig = {
    baseURL,
    url,
    method,
    params: data,
    data,
    timeout,
    headers,
    responseType: dataType
  };

  if (method === 'get') {
    delete defaultConfig.data;
  } else {
    delete defaultConfig.params;
  }

  // 鉴权token
  // if (getToken() && getToken() !== 'undefined') {
  //   defaultConfig.data['tokenStr'] = getToken();
  // }

  const contentType = headers['Content-Type'];
  if (typeof contentType !== 'undefined') {
    if (~contentType.indexOf('multipart')) {
      // 类型 `multipart/form-data;`
      defaultConfig.data = data;
    } else if (~contentType.indexOf('json')) {
      // 类型 `application/json`
      // 服务器收到的raw body(原始数据) "{name:"jhon",sex:"man"}"（普通字符串）
      // defaultConfig.data = JSON.stringify(data);
      // defaultConfig.data = Qs.stringify(data);
      defaultConfig.data.date = '20-09-28 11:28:21';
      defaultConfig.data.version = "0.1"
      if (defaultConfig.method === 'post') {
        defaultConfig.data = JSON.stringify(data);
      } else {
        defaultConfig.url = defaultConfig.url + Qs.stringify(data);
        delete defaultConfig.data;
        delete defaultConfig.params;
      }
    } else {
      // 类型 `application/x-www-form-urlencoded`
      // 服务器收到的raw body(原始数据) name=homeway&key=nokey
      defaultConfig.data = Qs.stringify(data);
    }
  }
  //axios.post("/api/login",defaultConfig1.data);
  var promise = axios(defaultConfig)
    .then((response) => {
      return checkStatus(response);
    })
    .then((res) => {
      // console.log(res);
      return res;
    });

  promise.error = function (fn) {
    promise.then(null, (error) => {
        console.log(error);
      if (error == null) {
        error = {
          success: false,
          msg: '未知错误'
        }
      } else if (error && typeof error.success === 'boolean' && !error.success && (error.code === '900' || error.code === '800')) { // 未绑定或者未登录
          localStorage.removeItem('user');
          window.router.push('/auth');
      } else {
        // alert(error.msg);
      }
      if (!fn) {
        fn(error);
      }
      return error;
    });
    return promise;
  };

  promise.success = function (fn) {
    promise.then((response) => {
      if (response) {
        if (response.code!==200) {
          if (response.code && response.code === 401) { // 未绑定或者未登录
            localStorage.removeItem('token');
            window.router.push('/login');
          }
          if (response && typeof response.success === 'boolean' && !response.success) {
            return;
          }
        } else {
          if (!fn) {
            fn(response);
          }
          return response
        }
      } else {
        // Dialog.alert({
        //   message: ''
        // }).then(() => {
        //   removeToken();
        //   removeCounts();
        //   removeEntryCustomer();
        //   window.location.reload();
        // });
        return;
      }
    });
    promise.then(fn);
    return promise;
  };
  return promise;
  // return axios(defaultConfig);
}
