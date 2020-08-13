/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 14:56:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 16:34:24
 * @Desc: 页面级应用组件的入口,主要内容组件 ==》除登录和404界面外的所有界面的父级
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Layout.css";

import SlideMenu from "./SlideMenu/SlideMenu";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import Setting from "./Setting/Setting";
import TagsView from "./TagsView/TagsView";

import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import routerList from "../../routers";

import demoRoutes from "../../routers/demoRouter";

import Home from "../Home/Home";

class LayoutUI extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     current: 1,
  //   };
  // }
  render() {
    console.log(this.props.children);
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/Home">首页</NavLink>
              </li>
              <li>
                <NavLink to="/Login">登录页</NavLink>
              </li>
            </ul>
          </nav>
          <div>{this.props.children}</div>
        </div>
      </Router>
    );
  }
  renders() {
    const menuList = demoRoutes;
    // console.log(menuList);
    const { current } = this.state;

    let breadcrumbList = [
      { path: "/Login", title: "登录页" },
      { path: "User", title: "用户管理" },
      { path: "/User/UserList", title: "用户列表" },
    ];
    return (
      <div className="app-wrapper">
        <aside className="sidebar-container">
          <SlideMenu menuList={menuList} current={current}></SlideMenu>
        </aside>
        <article className="main-container">
          <div className="header fixed-header">
            <div className="header-top">
              <Breadcrumb breadcrumbList={breadcrumbList} />
              <Setting />
            </div>
            <div className="tags-container">
              <TagsView />
            </div>
          </div>
          <div className="app-main">
            {/* {this.props.children} */}
            {/* <Router>
              <Route path="/Home" component={Home}></Route>
            </Router> */}
            {/* <PrivateRoute routerList={routerList}>
              {this.props.children}
            </PrivateRoute> */}
          </div>
        </article>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      // dispatch(actionCreator)
    },
  };
};

const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutUI);

export default Layout;
