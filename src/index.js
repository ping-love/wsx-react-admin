/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 16:42:21
 * @Desc: 项目入口模块
 */
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store/index";
import { Provider } from "react-redux";

import MainRoute from "./components/MainRoute/MainRoute";

// import Layout from "./pages/Layout/Layout";

import RouterConfig from "./router";

import "./index.css";

// (<React.StrictMode></React.StrictMode>) 开启严格模式
ReactDOM.render(
  <Provider store={store}>
    {/* <MainRoute></MainRoute> */}
    {/* <Layout /> */}
    <RouterConfig />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
