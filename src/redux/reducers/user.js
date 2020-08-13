/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 14:44:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 14:54:58
 * @Desc: 用户信息reducer模块
 */
import { ACTION_LOGIN } from "../config/actionType";

// 测试使用，获取session中的用户信息

function getSesstionUserInfo(key) {
  return {
    username: "admin",
    permission: ["admin"],
    isAdmin: true,
  };
}

// 先从sessionStroge/localStroge获取用户信息，若没有再通过action获取
const userInfo = getSesstionUserInfo("user") || {
  username: "",
  permission: [],
  isAdmin: false,
};

const user = (state = userInfo, action) => {
  switch (action.type) {
    case ACTION_LOGIN:
      return {
        ...action.user,
      };
    default:
      return state;
  }
};

export default user;
