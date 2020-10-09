'use strict';

//30分钟间隔时间列表
export const timeRangeData = () => {
    let hours = 0,
        timeArr = [];
    for (let i = 0; i < 24; i++) {
        hours = i < 10 ? '0' + i : i;
        timeArr.push(hours + ':00')
        timeArr.push(hours + ':30')
    }
    return timeArr
}

export const add0 =(m)=>{return m<10?'0'+m:m }

/*
 * 时间戳转日期格式
 * value  时间戳
 * type   时间格式  hh:mm/hh:mm:ss
 */
export const formatDate= (value,type)=>
{
let time = new Date(value);
let y = time.getFullYear();
let m = time.getMonth()+1;
let d = time.getDate();
let h = time.getHours();
let mm = time.getMinutes();
let s = time.getSeconds();
if(type===1){
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)
}
if(type===2){
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}

if(type===3){
    return y+'-'+add0(m)+'-'+add0(d)
}
}

/*
 * 数字前面自动补0
 * num传入的数字
 * len需要的字符长度
 */

export const prefixInteger = (num, len) =>{
    return (Array(len).join(0) + num).slice(-len);
}

/*
 * 时间戳转英文日期格式
 * time  时间戳
 * fmt   时间格式  hh:mm/hh:mm:ss
 * type  日期格式种类 1：10-Jan-2018 02:00:00； 2：Jan 10,2018
 */
export const timestampTransDate = (time, type, fmt) => {
    let timeFormat = '';
    if (time) {
        let dateStr = new Date(time).toString().split(' '),
            t = dateStr[4].toString().split(':'),
            timeStr = fmt == 'hh:mm' ? (t[0] + ':' + t[1]) : (fmt == 'hh:mm:ss' ? (t[0] + ':' + t[1] + ':' + t[2]) : ' ');
        if (type === 1) {
            timeFormat = dateStr[2] + '-' + dateStr[1] + '-' + dateStr[3] + ' ' + timeStr;
        }
        if (type === 2) {
            timeFormat = dateStr[1] + ' ' + dateStr[2] + ', ' + dateStr[3];
        }
    }
    return timeFormat;
}

/**
 * 标准做法
 * PHP时间转 UTC时间
 * @param {*} stramp php时间戳
 */
export const UTCTimeFormat = (stramp) => {
    const dateTime = new Date();
    return new Date(Date.UTC(dateTime.getFullYear(), dateTime.getUTCMonth(), dateTime.getUTCDate(), parseInt(stramp / 3600) - 8, (stramp % 3600) / 60));
}

/**
 * 计算多少个单词
 */
export const calcMemoCounts =(content)=> {
    if (content === "") {
      return 0;
    } else {
      return content
        .trim()
        .replace(/[^a-zA-Z]+/g, "@")
        .split("@").length;
    }
}

export const getCookie = (name) =>{
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}
