/*
 * @Author: wangshengxian
 * @Date: 2020-08-10 16:12:27
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 16:43:20
 * @Desc:
 */
import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function RouterConfig() {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="Login" Component={Login}></Route>
        <Route path="Home" Component={Home}></Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
