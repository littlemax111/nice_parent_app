/**
 * Created by JSON on 2018/1/23.
 * 日期、时间相关函数
 */
/**
 * 将字符串S前面补0，保留长度l
 * @param s
 * @param l
 * @returns {string}
 */
function appendZero(s, l = 2) {
  return ('0'.repeat(l) + s).substr((s + '').length);
}

/**
 * 日期+天数返回新的日期
 * @param dateStr 日期字符串
 * @param days    天数
 */
function addDate(dateStr, days) {
  let a = new Date(dateStr);
  a = a.valueOf();
  a = a + days * 24 * 60 * 60 * 1000;
  a = new Date(a);
  return a;
}

var dateRangeUtil = (function () {
  let currentDate;
  let that = {};
  that.setCurrentDate = function (date) {
    currentDate = date;
  }

  /***
   * 获得当前时间
   */
  that.getCurrentDate = function () {
    if (currentDate == null) {
      currentDate = new Date();
    }
    return currentDate;
  };

  /***
   * 获得本周起止时间
   */
  that.getCurrentWeek = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 返回date是一周中的某一天
    let week = currentDate.getDay();

    // 一天的毫秒数
    let millisecond = 1000 * 60 * 60 * 24;
    // 减去的天数
    let minusDay = week !== 0 ? week - 1 : 6;
    // alert(minusDay);
    // 本周 周一
    let monday = new Date(currentDate.getTime() - (minusDay * millisecond));
    // 本周 周日
    let sunday = new Date(monday.getTime() + (6 * millisecond));
    // 添加本周时间
    startStop.push(monday); // 本周起始时间
    // 添加本周最后一天时间
    startStop.push(sunday); // 本周终止时间
    // 返回
    return startStop;
  };

  /***
   * 获得本月的起止时间
   */
  that.getCurrentMonth = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 获得当前月份0-11
    let currentMonth = currentDate.getMonth();
    // 获得当前年份4位年
    let currentYear = currentDate.getFullYear();
    // 求出本月第一天
    let firstDay = new Date(currentYear, currentMonth, 1);
    // 当为12月的时候年份需要加1
    // 月份需要更新为0 也就是下一年的第一个月
    if (currentMonth === 11) {
      currentYear++;
      currentMonth = 0; // 就为
    } else {
      // 否则只是月份增加,以便求的下一月的第一天
      currentMonth++;
    }
    // 一天的毫秒数
    let millisecond = 1000 * 60 * 60 * 24;
    // 下月的第一天
    let nextMonthDayOne = new Date(currentYear, currentMonth, 1);
    // 求出上月的最后一天
    let lastDay = new Date(nextMonthDayOne.getTime() - millisecond);
    // 添加至数组中返回
    startStop.push(firstDay);
    startStop.push(lastDay);
    // 返回
    return startStop;
  };
  /**
   * 得到本季度开始的月份
   * @param month 需要计算的月份
   ***/
  that.getQuarterSeasonStartMonth = function (month) {
    let spring = 0; // 春
    let summer = 3; // 夏
    let fall = 6;   // 秋
    let winter = 9; // 冬
    // 月份从0-11
    if (month < 3) {
      return spring;
    }
    if (month < 6) {
      return summer;
    }
    if (month < 9) {
      return fall;
    }
    return winter;
  };
  /**
   * 获得该月的天数
   * @param year年份
   * @param month月份
   * */
  that.getMonthDays = function (year, month) {
    // 本月第一天 1-31
    let relativeDate = new Date(year, month, 1);
    // 获得当前月份0-11
    let relativeMonth = relativeDate.getMonth();
    // 获得当前年份4位年
    let relativeYear = relativeDate.getFullYear();
    // 当为12月的时候年份需要加1
    // 月份需要更新为0 也就是下一年的第一个月
    if (relativeMonth === 11) {
      relativeYear++;
      relativeMonth = 0;
    } else {
      // 否则只是月份增加,以便求的下一月的第一天
      relativeMonth++;
    }
    // 一天的毫秒数
    let millisecond = 1000 * 60 * 60 * 24;
    // 下月的第一天
    let nextMonthDayOne = new Date(relativeYear, relativeMonth, 1);
    // 返回得到上月的最后一天,也就是本月总天数
    return new Date(nextMonthDayOne.getTime() - millisecond).getDate();
  };
  /**
   * 获得本季度的起止日期
   */
  that.getCurrentSeason = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 获得当前月份0-11
    let currentMonth = currentDate.getMonth();
    // 获得当前年份4位年
    let currentYear = currentDate.getFullYear();
    // 获得本季度开始月份
    let quarterSeasonStartMonth = that.getQuarterSeasonStartMonth(currentMonth);
    // 获得本季度结束月份
    let quarterSeasonEndMonth = quarterSeasonStartMonth + 2;
    // 获得本季度开始的日期
    let quarterSeasonStartDate = new Date(currentYear, quarterSeasonStartMonth, 1);
    // 获得本季度结束的日期
    let quarterSeasonEndDate = new Date(currentYear, quarterSeasonEndMonth, that.getMonthDays(currentYear, quarterSeasonEndMonth));
    // 加入数组返回
    startStop.push(quarterSeasonStartDate);
    startStop.push(quarterSeasonEndDate);
    // 返回
    return startStop;
  };

  /***
   * 得到本年的起止日期
   *
   */
  that.getCurrentYear = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 获得当前年份4位年
    let currentYear = currentDate.getFullYear();

    // 本年第一天
    let currentYearFirstDate = new Date(currentYear, 0, 1);
    // 本年最后一天
    let currentYearLastDate = new Date(currentYear, 11, 31);
    // 添加至数组
    startStop.push(currentYearFirstDate);
    startStop.push(currentYearLastDate);
    // 返回
    return startStop;
  };
  /**
   * 返回上一个月的第一天Date类型
   * @param year 年
   * @param month 月
   **/
  that.getPriorMonthFirstDay = function (year, month) {
    // 年份为0代表,是本年的第一月,所以不能减
    if (month === 0) {
      month = 11; // 月份为上年的最后月份
      year--; // 年份减1
      return new Date(year, month, 1);
    }
    // 否则,只减去月份
    month--;
    return new Date(year, month, 1);
  };

  /**
   * 获得上一月的起止日期
   * ***/
  that.getPreviousMonth = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 获得当前月份0-11
    let currentMonth = currentDate.getMonth();
    // 获得当前年份4位年
    let currentYear = currentDate.getFullYear();
    // 获得上一个月的第一天
    let priorMonthFirstDay = that.getPriorMonthFirstDay(currentYear, currentMonth);
    // 获得上一月的最后一天
    let priorMonthLastDay = new Date(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth(), that.getMonthDays(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth()));
    // 添加至数组
    startStop.push(priorMonthFirstDay);
    startStop.push(priorMonthLastDay);
    // 返回
    return startStop;
  };
  /**
   * 获得上一周的起止日期
   * **/
  that.getPreviousWeek = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 返回date是一周中的某一天
    let week = currentDate.getDay();
    // 一天的毫秒数
    let millisecond = 1000 * 60 * 60 * 24;
    // 减去的天数
    let minusDay = week !== 0 ? week - 1 : 6;
    // 获得当前周的第一天
    let currentWeekDayOne = new Date(currentDate.getTime() - (millisecond * minusDay));
    // 上周最后一天即本周开始的前一天
    let priorWeekLastDay = new Date(currentWeekDayOne.getTime() - millisecond);
    // 上周的第一天
    let priorWeekFirstDay = new Date(priorWeekLastDay.getTime() - (millisecond * 6));
    // 添加至数组
    startStop.push(priorWeekFirstDay);
    startStop.push(priorWeekLastDay);
    return startStop;
  };

  /**
   * 得到上季度的起始日期
   * year 这个年应该是运算后得到的当前本季度的年份
   * month 这个应该是运算后得到的当前季度的开始月份
   * */
  that.getPriorSeasonFirstDay = function (year, month) {
    let spring = 0; // 春
    let summer = 3; // 夏
    let fall = 6;   // 秋
    let winter = 9; // 冬
    // 月份从0-11
    switch (month) { // 季度的其实月份
      case spring:
        // 如果是第一季度则应该到去年的冬季
        year--;
        month = winter;
        break;
      case summer:
        month = spring;
        break;
      case fall:
        month = summer;
        break;
      case winter:
        month = fall;
        break;
    };
    return new Date(year, month, 1);
  };

  /**
   * 得到上季度的起止日期
   * **/
  that.getPreviousSeason = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 获得当前月份0-11
    let currentMonth = currentDate.getMonth();
    // 获得当前年份4位年
    let currentYear = currentDate.getFullYear();
    // 上季度的第一天
    let priorSeasonFirstDay = that.getPriorSeasonFirstDay(currentYear, currentMonth);
    // 上季度的最后一天
    let priorSeasonLastDay = new Date(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2, that.getMonthDays(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2));
    // 添加至数组
    startStop.push(priorSeasonFirstDay);
    startStop.push(priorSeasonLastDay);
    return startStop;
  };

  /**
   * 得到去年的起止日期
   * **/
  that.getPreviousYear = function () {
    // 起止日期数组
    let startStop = [];
    // 获取当前时间
    let currentDate = that.getCurrentDate();
    // 获得当前年份4位年
    let currentYear = currentDate.getFullYear();
    currentYear--;
    let priorYearFirstDay = new Date(currentYear, 0, 1);
    let priorYearLastDay = new Date(currentYear, 11, 1);
    // 添加至数组
    startStop.push(priorYearFirstDay);
    startStop.push(priorYearLastDay);
    return startStop;
  };

  that.diffTimeStamp = function (beginTimeStamp, endTimeStamp) {
    let diff = parseInt((beginTimeStamp - endTimeStamp) / 1000, 10);
    if (diff < 0) {
      diff = -diff;
    }
    return diff;
  };
  return that;
})();

var DateFormat = function (date, fmt) { // author: meizz
  let o = {
    'M+': date.getMonth() + 1,                 //  月份
    'd+': date.getDate(),                    // 日
    'h+': date.getHours(),                   // 小时
    'm+': date.getMinutes(),                 // 分
    's+': date.getSeconds(),                 // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds()             // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : appendZero(o[k]));
    }
  }
  return fmt;
}
export default {
  dateFormat: function (date, fmt) {
    return DateFormat(date, fmt);
  },
  getWeekStartDate: function (date) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    dateRangeUtil.setCurrentDate(date);
    let week = dateRangeUtil.getCurrentWeek();
    return week[0];
  },
  getWeekEndDate: function (date) {
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    dateRangeUtil.setCurrentDate(date);
    let week = dateRangeUtil.getCurrentWeek();
    return week[1];
  },
  getTodayDateStr: function () {
    let d = new Date();
    return d.getFullYear() + '-' + appendZero(d.getMonth() + 1) + '-' + appendZero(d.getDate());
  },
  getDateStr: function (date) {
    return date.getFullYear() + '-' + appendZero(date.getMonth() + 1) + '-' + appendZero(date.getDate());
  },
  getDateStrs: function (date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate());
  },
  getDateTimeStr: function (date) {
    return DateFormat(date, 'yyyy-MM-dd hh:mm:ss');
  },
  addDays: function (date, days) {
    return addDate(date, days);
  },
  formatTimestamp: function (stamp) {
    let result = null;
    let str = stamp + '';
    if (str.length === 13) {
      if (str.substr(8, 13) === '00000') {
        result = this.getDateStrByTimestamp(stamp);
      } else {
        result = this.getDateTimeStrByTimestamp(stamp);
      }
    }
    return result;
  },
  getDateStrByTimestamp: function (stamp) {
    let date = new Date(stamp);
    return date.getFullYear() + '-' + appendZero(date.getMonth() + 1) + '-' + appendZero(date.getDate()) + ' ' + appendZero(date.getHours()) + ':' + appendZero(date.getMinutes()) + ':' + appendZero(date.getSeconds());// +','+appendZero(date.getMilliseconds(),3)
  },
  getDateTimeStrByTimestamp: function (stamp) {
    let date = new Date(stamp);
    return date.getFullYear() + '-' + appendZero(date.getMonth() + 1) + '-' + appendZero(date.getDate());
  },
  getDateTimeStrByTimestamps: function (stamp) {
    let date = new Date(stamp);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  },
  getHourByTimeStamp: function (date) {
    return appendZero(date.getHours()) + ':' + appendZero(date.getMinutes());
  },
  getDateByTimestamp: function (stamp) {
    let date = new Date(stamp);
    return date;
  },
  getTimeStr: function (stamp) {
    let date = new Date(stamp);
    return appendZero(date.getHours()) + ':' + appendZero(date.getMinutes());
  },
  parserDate: function (date) {
    let t = Date.parse(date);
    if (!isNaN(t)) {
      return new Date(Date.parse(date.replace(/-/g, '/')));
    } else {
      return new Date();
    }
  },
  formatDate: function (date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  },
  diffTimeStamp: function (beginTimeStamp, endTimeStamp) {
    let diff = parseInt((beginTimeStamp - endTimeStamp) / 1000, 10);
    if (diff < 0) {
      diff = -diff;
    }
    return diff;
  },
  dateTimeFormat: function (timeStamp) { // 时间转化为 多久以前
    let diff = parseInt((new Date().getTime() - timeStamp) / 1000, 10)
    if (diff < 60) { // 显示秒
      return '刚刚'
    } else if (diff < 60 * 60) { // 显示分钟
      return Math.floor(diff / 60) + '分前'
    } else if (diff < 60 * 60 * 24) { // 显示小时
      return Math.floor(diff / (60 * 60)) + '小时前'
    } else if (diff < 60 * 60 * 24 * 7) { // 显示天
      return Math.floor(diff / (60 * 60 * 24)) + '天前'
    } else if (diff < 60 * 60 * 24 * 28) { // 显示周
      return Math.floor(diff / (60 * 60 * 24 * 7)) + '周前'
    } else if (diff < 60 * 60 * 24 * 31 * 12 && diff >= 60 * 60 * 24 * 28) { // 显示月
      return parseInt(diff / (60 * 60 * 24 * 31), 10) > 1 ? Math.floor(diff / (60 * 60 * 24 * 31)) + '月前' : Math.ceil(diff / (60 * 60 * 24 * 31)) + '月前'
    } else { // 显示年
      return Math.floor(diff / (60 * 60 * 24 * 31 * 12)) + '年前'
    }
  },
  wxdateFormat: function (timeStamp, obj, preTimeStamp) {
    if (!preTimeStamp) {
      obj['SHOWTIME'] = true;
      obj['PRETIMESTAMP'] = timeStamp;
      obj['FORMATTIME'] = this.getDateStrByTimestamp(timeStamp);
    } else {
      var diff = this.diffTimeStamp(timeStamp, preTimeStamp);
      if (diff <= 60 * 5) {
        obj['SHOWTIME'] = false;
        obj['PRETIMESTAMP'] = preTimeStamp;
      } else {
        obj['SHOWTIME'] = true;
        obj['PRETIMESTAMP'] = timeStamp;
        obj['FORMATTIME'] = this.getDateStrByTimestamp(timeStamp);
      }
    }
  }
}
