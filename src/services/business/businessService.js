/**
 * Created by JSON on 2018/1/25.
 * 业务公共方法写在这里
 */
import * as utilsService from './../utils/utilsService';
import dateUtil from './../utils/dateUtil.js';
let getUser = () => {
  let user = {};
  let s = sessionStorage.getItem('CURRENT_USER');
  if (s) {
    user = JSON.parse(s);
  }
  return user;
};
let putUser = (user) => {
  let userStr = JSON.stringify(user);
  sessionStorage.setItem('CURRENT_USER', userStr);
};
let clearUser = () => {
  sessionStorage.removeItem('CURRENT_USER');
};

let getTimeChange = (time) => {
  if (typeof (time) === 'number') {
    return dateUtil.dateTimeFormat(time);
  } else {
    return time;
  }
};

let getTime = (time) => {
  if (typeof (time) === 'number') {
    return dateUtil.getDateStrByTimestamp(time);
  } else {
    return time;
  }
};

let getTimeStr = (time) => {
  if (typeof (time) === 'number') {
    return dateUtil.getDateTimeStrByTimestamp(time);
  } else {
    return time;
  }
};


let getTimeStrs = (time) => {
  if (typeof (time) === 'number') {
    return dateUtil.getDateTimeStrByTimestamps(time);
  } else {
    return time;
  }
};

let getDateTimeStr = (date) => {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
  // return dateUtil.getDateTimeStr(date);
};

let getDateStr = (date) => {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  // return dateUtil.getDateStr(date);
}

let getDateStrs = (date) => {
  return dateUtil.getDateStrs(date);
}

let getUrl = (url) => {
  if (!url) {
    return '';
  } else {
    if (url.indexOf('http') >= 0) {
      return url;
    } else {
      var u = '';
      u = window.LOCAL_CONFIG.API_HOME + '/resource/imgResourceUrl.do?imgResourceId=' + url;
      return u;
    }
  }
};

let getOutUrl = (url) => {
  if (!url) {
    return '';
  } else {
    if (url.indexOf('http') >= 0) {
      return url;
    } else {
      return window.LOCAL_CONFIG.API_HOME + '/outFile/' + url;
    }
  }
};

let getOutUrls = (url) => {
  if (!url) {
    return '';
  } else {
    if (url.indexOf('http') >= 0) {
      return url;
    } else {
      return window.LOCAL_CONFIG.API_HOME + '/outFile/' + url;
    }
  }
};

let getTranfer = (content) => {
  if (content) {
    return content.replace(/\n/g, '<br>');
  }
};

let unDevelop = function () {
  utilsService.alert('功能开发中，敬请期待！');
};

let patchPosition = function(val) {
    return val >= 10 ? val : '0' + val
};

let getEng = function (index) {
  let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  return arr[index];
}

let removeObjWithArr = function (_arr, _obj) {
  var length = _arr.length;
  for (var i = 0; i < length; i++) {
    if (_arr[i] == _obj) {
      if (i == 0) {
        _arr.shift(); //删除数组的第一个元素
        return;
      }
      else if (i == length - 1) {
        _arr.pop();  //删除数组的最后一个元素
        return;
      }
      else {
        _arr.splice(i, 1); //删除下标为i的元素
        return;
      }
    }
  }
}

let themeRole = function(sid, callback){
  let method = 'get';
  let data = {
      discussion_id:sid
  };
  var that =this;
    that.$services.BbsDiscussionSecurity({method,data}).success(function(res){
        if(res.success){
          if (callback) {
              callback(res.data);
          }
        }else {

        }
    });
}
/**
* 图片压缩，默认同比例压缩
* @param {Object} path
*   pc端传入的路径可以为相对路径，但是在移动端上必须传入的路径是照相图片储存的绝对路径
* @param {Object} obj
*   obj 对象 有 width， height， quality(0-1)
* @param {Object} callback
*   回调函数有一个参数，base64的字符串数据
*/
let dealImage = function (path, obj, callback) {
  var img = new Image();
  img.src = path;
  img.onload = function () {
    var that = this;
    // 默认按比例压缩
    var w = that.width,
      h = that.height,
      scale = w / h;
    w = w; //obj.width || w
    h = w / scale; //obj.height || (w / scale)
    var quality = 0.8;  // 默认图片质量为0.7
    //生成canvas
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // 创建属性节点
    var anw = document.createAttribute("width");
    anw.nodeValue = w;
    var anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h);
    // 图像质量
    // if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
    //   quality = obj.quality;
    // }
    // quality值越小，所绘制出的图像越模糊
    var base64 = canvas.toDataURL('image/jpeg', quality);
    // 回调函数返回base64的值
    callback(base64);
  }
}

/** 数字金额大写转换(可以处理整数,小数,负数) */
let smalltoBIG = function (money) {
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money == '') { return ''; }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

var websock = null;
var global_callback = null;
var serverPort = '8088';	//webSocket连接端口


function getWebIP(){
    var curIP = window.location.hostname;
    return curIP;
}

function initWebSocket(){ //初始化weosocket
    //ws地址
     //var wsuri = "ws://" +getWebIP()+ ":" + serverPort+'/ws/notice/';
    var wsuri = 'ws://47.97.155.179/ws/notice/';
    websock = new WebSocket(wsuri);
    websock.onmessage = function(e){
        websocketonmessage(e);
    }
    websock.onclose = function(e){
        websocketclose(e);
    }
    websock.onopen = function () {
        websocketOpen();
    }

    //连接发生错误的回调方法
    websock.onerror = function () {
        console.log("WebSocket连接发生错误");

    }
}

// 实际调用的方法
function sendSock(agentData,callback){
    global_callback = callback;
    if (websock.readyState === websock.OPEN) {
        //若是ws开启状态
        websocketsend(agentData)
    }else if (websock.readyState === websock.CONNECTING) {
        // 若是 正在开启状态，则等待1s后重新调用
        setTimeout(function () {
            sendSock(agentData,callback);
        }, 1000);
    }else {
        // 若未开启 ，则等待1s后重新调用
        setTimeout(function () {
            sendSock(agentData,callback);
        }, 1000);
    }
}

//数据接收
function websocketonmessage(e){

  var res=JSON.parse(e.data);

  var data = res.data;
  var note_xcount = res.count;
    var count = 1;
    var total = data.length;
    if(note_xcount){
      if(note_xcount >=999){
          note_xcount = 999
      }
        window.LOCAL_CONFIG.NOTE_UNREAD =note_xcount;
    }

    if(data && data.length>0){


      if(data[count-1].document.summay){
          var summay = data[count-1].document.summay;
      }else {
          var summay = '';
      }
      if(data[count-1].discussion.name){
          var discussion_name=data[count-1].discussion.name;
      }else {
          var discussion_name = '';
      }
        var sockHtml = '<div class="socket-box">'
            +'<div class="header">'
            +'<span>消息提醒</span>'
            +'<span><img src="./static/img/close.png" alt="" onclick="closeSocket()"></span>'
            +'</div>'
            +'<div class="content clear">'
            +'<p class="business_title single_wrap" id="'+data[count-1].document.id+'" onclick="toDetail('+data[count-1].document.id+','+data[count-1].discussion.id+','+data[count-1].id+')">'+data[count-1].document.title+'</p>'
            +'<p class="business_summary double_wrap">'+summay+'</p>'
            +'<p class="single_wrap clear"><span class="business_time">'+data[count-1].create_time+'</span><span class="business_discussion">'+discussion_name+'</span></p>'
            +'</div>'
            +'<div class="business_bottom">'
            +'<img src="./static/img/prev-btn.png" alt="" onclick="getPrevData()">'
            +'<span><a class="count">'+count+'</a>/<a>'+total+'</a></span>'
            +'<img src="./static/img/next-btn.png" alt="" onclick="getNextData()">'
            +'</div>'
            +'</div>';
        $('.content-container').append(sockHtml)
    }



    window.getPrevData = function(){
        if(count == 1){
            count = 1
        }else {
            count--;
        }
        $('.business_title').attr('id',data[count-1].document.id)
        $('.business_title').html(data[count-1].document.title)
        $('.business_summary').html(data[count-1].document.summay)
        $('.business_time').html(data[count-1].create_time)
        $('.business_discussion').html(data[count-1].discussion.name)
        $('.business_bottom .count').html(count)
    };
    window.getNextData = function(){
        if(count >= total){
            count = total
        }else {
            count++;
        }
        $('.business_title').attr('id',data[count-1].document.id)
        $('.business_title').html(data[count-1].document.title)
        $('.business_summary').html(data[count-1].document.summay)
        $('.business_time').html(data[count-1].create_time)
        $('.business_discussion').html(data[count-1].discussion.name)
        $('.business_bottom .count').html(count)
    };
    window.closeSocket = function () {
        $('.socket-box').hide();
    }
    window.toDetail = function (id,bbsId,readStatus) {
      sessionStorage.setItem('readStatus',readStatus)
        window.open(window.LOCAL_CONFIG.API_HOME+`/#/articleDetail?id=${id}&bbs_discussion_id=${bbsId}&way=index`)
    }


}

//数据发送
function websocketsend(agentData){
    websock.send(JSON.stringify(agentData));
}

//关闭
function websocketclose(e){
    console.log("connection closed (" + e.code + ")");
}
function websocketOpen(e){
    console.log("连接成功");

}

// initWebSocket();
export default {
  /**
   * 获取当前用户 获取放入SessionStorage中，为了防止刷新出现异步延时造成的错误
   * @returns {{}}
   */
  getUser: getUser,
  /**
   * 将当前User保存到SessionStorage中去
   * @param user
   */
  putUser: putUser,
  /**
   * 清除当前存储的SessionStorage
   */
  clearUser: clearUser,
  /**
   * 切换路由
   */
  changeRouter: utilsService.changeRouter,
    initWebSocket:initWebSocket,
  /**
   * 时间格式转化
   */
  patchPosition:patchPosition,
  getTimeChange: getTimeChange,
  getTimeStr: getTimeStr,
  getTimeStrs: getTimeStrs,
  getTime: getTime,
  getDateTimeStr: getDateTimeStr,
  getDateStr: getDateStr,
  getDateStrs: getDateStrs,
  /**
   * 图片链接拼接
   */
  getUrl: getUrl,
  getOutUrl: getOutUrl,
  getOutUrls: getOutUrls,
  /**
   * html转化
   */
  getTranfer: getTranfer,
  /**
   * 待开发提示
   */
  unDevelop: unDevelop,
  /**
   * 去掉数组中的一个对象
   */
  removeObjWithArr: removeObjWithArr,
  /**
   * 数字字母转化
   */
  getEng: getEng,
  /**
   * 处理图片
   */
  dealImage: dealImage,
  /**
   * 金额大小写转化
   */
  smalltoBIG: smalltoBIG,
  /**
  * 知识库权限
  */
  themeRole:themeRole,
  /**
   * APP启动时调用
   */
  initApp: function () {
    sessionStorage.removeItem('getRange')
    var user=localStorage.getItem('user');
    window.router.push('/auth');

    // if(user){
    //     this.initWebSocket();   //【agentData：发送的参数；this.getConfigResult：回调方法】
    //      // window.router.push('/index');
    // }else {
    //     window.router.push('/auth');
    // }

  }
}
