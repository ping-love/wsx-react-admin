/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 15:27:04
 * @Desc: 用户信息action
 */
import { ACTION_LOGIN } from "../config/actionType";

// 同步请求后的用户信息
export const syncUser = (data) => ({
  type: ACTION_LOGIN,
  user: data,
});

// 异步action请求用户信息
export const asyncUser = (params) => {
  return function (dispatch) {
    console.log("-async-action-user-params-", params);
    setTimeout(() => {
      let user = {
        username: "我是谁？",
        premission: ["superAdmin"],
        isAdmin: true,
      };
      dispatch(syncUser(user));
    }, 2000);
  };
};
