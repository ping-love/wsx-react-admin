/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-06 15:37:00
 * @Desc: 登录界面ui组件
 */
import React, { Component } from "react";

import { Route } from "react-router-dom";

import "./Login.css";

import UserList from "../User/UserList/UserList";

class LoginUI extends Component {
  render() {
    return (
      <div className="login">
        登录/注册
        <button onClick={this.props.handleLoginReq}>登录</button>
      </div>
    );
  }
}

export default LoginUI;
