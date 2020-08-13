/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 11:33:53
 * @Desc: reducers配置文件
 */
import { combineReducers } from "redux";
import login from "./login";
import number from "./number";

const reducers = combineReducers({
  login,
  number,
});

export default reducers;
