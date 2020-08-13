/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 17:33:11
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 15:59:58
 * @Desc: 路由组件
 */
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import { render } from "react-dom";
import demoRouter from "../../routers/demoRouter";

// 1、是否需要登录
// 2、是否需要重定向
// 3、不必登录，也没有重定向

// 重定向页面路由
const redirectRouteFunc = (route) => {
  console.log("-redirect-", route);
  const { path, name, redirect } = route;
  return (
    <Route
      path={path}
      key={name}
      exact
      render={() => <Redirect to={redirect}></Redirect>}
    ></Route>
  );
};
// 不需要登录，也不用重定向页面路由
const noNeedLoginRouteFunc = (route) => {
  console.log("-no-need-login-");
  const { path, name, component } = route;
  console.log("-component-noneed-", component);
  return <Route path={path} exact key={name} component={component}></Route>;
};

// 需要登录的页面路由
const needLoginRouteFunc = (route, vm) => {
  console.log("-need-login-", route, vm);
  const { path, name, component, children, redirect } = route;
  console.log("-component-", component);
  if (children) {
    console.log("-children-router-", children);
    // return <div key={name}></div>;
    return (
      <Route path={path} key={name} component={component}></Route>
      // <Route
      //   path={path}
      //   key={name}
      //   render={() => (
      //     <route.component key={name}>
      //       {vm.routerFunc(children)}
      //       <Route
      //         path={path}
      //         exact
      //         key={name}
      //         render={() => <Redirect to={redirect}></Redirect>}
      //       ></Route>
      //     </route.component>
      //   )}
      // ></Route>
    );
  } else {
    return <Route path={path} exact key={name} component={component}></Route>;
  }
};

class PrivateRoute extends Component {
  //
  routerFunc = (routerList) => {
    return routerList.map((route) => {
      // 遍历获取单条路由配置信息，方便明确当前页面路由的访问权限
      console.log("-route-", route, route.component, route.path);
      // 1、验证是否组要登录
      if (route.meta && route.meta.require) {
        return needLoginRouteFunc(route, this);
      } else if (route.redirect) {
        return redirectRouteFunc(route);
      } else {
        return noNeedLoginRouteFunc(route);
      }
    });
  };
  render() {
    // exact
    let { routerList } = this.props;
    // console.log("-async-router-list-", this.routerFunc(routerList));

    // console.log(demoRouter);
    return <Router>{this.routerFunc(routerList)}</Router>;
  }
}

export default withRouter(PrivateRoute);
