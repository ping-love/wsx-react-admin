/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 14:15:38
 * @Desc: 封装axios请求
 */
import axios from "axios";

let baseURL = "http://tapi.tangseng.io/livecms";

// 创建axios
let service = axios.create({
  baseURL,
  timeout: 10000,
});

//  请求拦截
service.interceptors.request.use(
  (config) => {
    // 对config做进一步处理，例如请求方式、token、header、参数等
    config.methods = config.methods || "post"; // 默认为post请求
    console.log("-req-config-");
    return config;
  },
  (error) => {
    console.log("_REQ_ERROR:_", error);
    Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    console.log("____", response);
    const res = response.data;
    console.log("-res-", res);
    if (res.code === 200) {
      return res;
    }
    // 响应非成功码，需要根据实际需求自行处理，或弹框提示，或跳转界面
  },
  (error) => {
    console.log("_RES_ERROR_", error);
  }
);
