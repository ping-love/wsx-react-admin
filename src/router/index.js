/*
 * @Author: wangshengxian
 * @Date: 2020-08-10 16:12:27
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 16:19:19
 * @Desc:
 */
import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Login } from "../pages";

function RouterConfig() {
  return (
    <Router>
      <Route path="/" component={App}>
        <Route path="Login" Component={Login}></Route>
        <Route path="Home" Component={Home}></Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
