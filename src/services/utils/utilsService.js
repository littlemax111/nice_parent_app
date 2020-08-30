/**
 * Created by JSON on 2018/1/23.
 */
import dateUtil from './dateUtil';
// import { Toast } from 'vant';
/**
 * 判断是否是微信浏览器
 */
export function isWechatWebView() {
  return (/MicroMessenger/i).test(navigator.userAgent);
}
/**
 * 输出消息
 * @param obj
 */
export function console(obj) {
  if (window.LOCAL_CONFIG.DEBUG) {
    console.log(obj);
    if (window.LOCAL_CONFIG.DEBUGTRACE) {
      console.trace();
    }
  }
}
export function alert(msg) {
  // Toast(msg);
};
export function loading(second = 10) {
  const toast = Toast.loading({
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    color: 'white',
    message: '加载中...',
    mask: true,
    type: 'loading'
  });
  let i = 0;
  const timer = setInterval(() => {
    i++;
    if (i <= second) {
      toast.message = `加载中(${i}秒)`;
    } else {
      i = 0;
      clearInterval(timer);
      Toast.clear();
    }
  }, 1000);
};

export function clearLoading() {
  Toast.clear();
}

/**
 * 在相对URL地址添加完整地址
 * @param url
 * @returns {*}
 */
export function addHttpSchema(url) {
  if (url && (url.indexOf('http://') < 0 && url.indexOf('https://') < 0)) {
    url = window.LOCAL_CONFIG.API_HOME + url
  }
  return url
}

/**
 * 复制对象属性
 * @param destination
 * @param source
 * @returns {*}
 */
export function apply(destination, source) {
  Object.assign(destination, source)
  return destination;
};

export function changeRouter(path, query = {}, replace = false) {
  let option = {
    path: path
  }
  if (query) {
    option.query = query;
  }
  if (replace) {
    option.replace = replace;
  }
  window.router.push(option);
};
/**
 * 验证手机号码
 * @param mobile
 * @returns {boolean}
 */
export function validateMobile(mobile) {
  if (!mobile || mobile.length === 0 || mobile.length !== 11) {
    return false;
  }
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (!myreg.test(mobile)) {
    return false;
  } else {
    return true;
  }
}
/**
 * 验证身份证号码是否合法
 * @param sId
 * @returns {{success: boolean, msg: string, sex: string, birthday: string, city: string}}
 */
export function validateCardID(sId) {
  var result = {
    success: false,
    msg: '',
    sex: '',
    birthday: '',
    city: ''
  }
  let aCity = {
    11: '北京市',
    12: '天津市',
    13: '河北省',
    14: '山西省',
    15: '内蒙古自治区',
    21: '辽宁省',
    22: '吉林省',
    23: '黑龙江省',
    31: '上海市',
    32: '江苏省',
    33: '浙江省',
    34: '安徽省',
    35: '福建省',
    36: '江西省',
    37: '山东省',
    41: '河南省',
    42: '湖北省',
    43: '湖南省',
    44: '广东省',
    45: '广西省',
    46: '海南省',
    50: '重庆市',
    51: '四川省',
    52: '贵州省',
    53: '云南省',
    54: '西藏自治区',
    61: '陕西省',
    62: '甘肃省',
    63: '青海省',
    64: '宁夏自治区',
    65: '新疆维吾尔自治区',
    71: '台湾省',
    81: '香港市',
    82: '澳门市',
    91: '国外'
  };
  var iSum = 0;
  if (!/^\d{17}(\d|x)$/i.test(sId)) {
    result.success = false;
    result.msg = '你输入的身份证长度或格式错误';
    return result;
  };
  sId = sId.replace(/x$/i, 'a');
  if (aCity[parseInt(sId.substr(0, 2))] == null) {
    result.success = false;
    result.msg = '你的身份证地区非法';
    return result;
  } else {
    result.city = aCity[parseInt(sId.substr(0, 2))];
  };
  let sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2));
  var d = new Date(sBirthday.replace(/-/g, '/'));
  if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate())) {
    result.msg = '身份证上的出生日期非法';
  } else {
    result.birthday = dateUtil.getDateStr(d);
  }
  for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
  if (iSum % 11 !== 1) {
    result.msg = '你输入的身份证号非法';
  }
  var sex = sId.substr(16, 1) % 2 ? '男' : '女';
  result.sex = sex;
  result.success = true;
  // aCity[parseInt(sId.substr(0,2))]+','+sBirthday+','+(sId.substr(16,1)%2?'男':'女') ;//此次还可以判断出输入的身份证号的人性别
  return result;
}

/**
 * uuid生成器
 * @returns {UUID}
 */
export function uuidGenerator() {
  function UUID() {
    this.id = this.createUUID();
  }
  UUID.prototype.valueOf = function () {
    return this.id;
  };
  UUID.prototype.toString = function () {
    return this.id;
  };
  UUID.prototype.createUUID = function () {
    var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
    var dc = new Date();
    var t = dc.getTime() - dg.getTime();
    var h = '-';
    var tl = UUID.getIntegerBits(t, 0, 31);
    var tm = UUID.getIntegerBits(t, 32, 47);
    var thv = UUID.getIntegerBits(t, 48, 59) + '1'; // version 1, security version is 2
    var csar = UUID.getIntegerBits(UUID.rand(4095), 0, 7);
    var csl = UUID.getIntegerBits(UUID.rand(4095), 0, 7);

    var n = UUID.getIntegerBits(UUID.rand(8191), 0, 7) +
      UUID.getIntegerBits(UUID.rand(8191), 8, 15) +
      UUID.getIntegerBits(UUID.rand(8191), 0, 7) +
      UUID.getIntegerBits(UUID.rand(8191), 8, 15) +
      UUID.getIntegerBits(UUID.rand(8191), 0, 15); // this last number is two octets long
    return tl + h + tm + h + thv + h + csar + csl + h + n;
  };
  UUID.getIntegerBits = function (val, start, end) {
    var base16 = UUID.returnBase(val, 16);
    var quadArray = [];
    var quadString = '';
    var i = 0;
    for (i = 0; i < base16.length; i++) {
      quadArray.push(base16.substring(i, i + 1));
    }
    for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
      if (!quadArray[i] || quadArray[i] === '') quadString += '0';
      else quadString += quadArray[i];
    }
    return quadString;
  };
  UUID.returnBase = function (number, base) {
    var output = '';
    var convert = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (number < base) {
      output = convert[number];
    } else {
      var MSD = '' + Math.floor(number / base);
      var LSD = number - MSD * base;
      if (MSD >= base) output = this.returnBase(MSD, base) + convert[LSD];
      else output = convert[MSD] + convert[LSD];
    }
    return output;
  };
  UUID.rand = function (max) {
    return Math.floor(Math.random() * max);
  };
  return (new UUID()).id;
}
