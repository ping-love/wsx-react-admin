/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:28:01
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 18:10:18
 * @Desc: 登录注册reducers
 */
// (login/register) reducers
import { ACTION_LOGIN } from "../config/actionType";

const initStatus = {
  userInfo: {},
};

const login = (state = initStatus, action) => {
  // console.log(state, action);
  const { type } = action;
  // console.log(type);
  switch (type) {
    case ACTION_LOGIN:
      return {
        ...state,
        userInfo: { userId: "10089" },
      };
    default:
      return state;
  }
};

export default login;
