/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-06 14:05:06
 * @Desc: 工具模块
 */
/**
 * 日期时间格式化
 * @param {date} time js的date类型或时间戳
 * @param {string} format 自定义时间格式，选填，默认为'{y}-{m}-{d} {h}:{i}:{s}'
 * @return {string} 默认格式 2018-09-01 10:55:00
 */
function formatDate(time, format) {
  time = time || new Date();
  format = format || "{y}-{m}-{d} {h}:{i}:{s}";
  let date = time;
  if (typeof time !== "object") {
    if (("" + time).length === 10) time = +time * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return timeStr;
}

/**
 * 获取数据类型
 * @param {any} data 数据
 * @return {string} 'array'
 */
function getDataType(data) {
  const str = Object.prototype.toString.call(data);
  return str.match(/\s(\w*)\]/)[1].toLowerCase();
}

/**
 * 深克隆
 * @param {array|object} source 源数据
 * @return {array|object}
 */
function deepClone(source) {
  return JSON.parse(JSON.stringify(source));
}

/**
 * 函数防抖
 * @param {function} fn 函数
 * @param {number} t 等待时间（毫秒）
 * @return {function}
 */
function debounce(fn, t) {
  let timeId;
  let delay = t || 500;
  return function () {
    let args = arguments;
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      timeId = null;
      fn.apply(this, args);
    }, delay);
  };
}

/**
 * 函数节流
 * @param {function} fn 函数
 * @param {number} t 间隔时间（毫秒）
 * @return {function}
 */
function throttle(fn, t) {
  let timeId;
  let firstTime = true;
  let interval = t || 500;
  return function () {
    let args = arguments;
    if (firstTime) {
      fn.apply(this, args);
      firstTime = false;
      return;
    }
    if (timeId) {
      return;
    }
    timeId = setTimeout(() => {
      clearTimeout(timeId);
      timeId = null;
      fn.apply(this, args);
    }, interval);
  };
}

export default {
  // 日期时间格式化
  formatDate,
  // 获取数据类型
  getDataType,
  // 深克隆
  deepClone,
  // 函数防抖
  debounce,
  // 函数节流
  throttle,
};
