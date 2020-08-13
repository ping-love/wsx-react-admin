/*
 * @Author: wangshengxian
 * @Date: 2020-08-10 10:36:13
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 15:49:34
 * @Desc:
 */
import React, { Component } from "react";
// import * as Rtest from "react-router-dom";
// console.log(Rtest);
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../../App";
import Login from "../../pages/Login/Login";

class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}></Route>
        <Route path="Login" component={Login}></Route>
      </Router>
    );
  }
}

export default MainRoute;
