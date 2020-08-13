/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 14:35:56
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 15:54:14
 * @Desc: 路由配置模块
 */

import userRouter from "./modules/user";
import systemRouter from "./modules/system";

import Layout from "../pages/Layout/Layout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import System from "../pages/System";
import BannerList from "../pages/System/BannerList/BannerList";

import User from "../pages/User";
import UserList from "../pages/User/UserList/UserList";
import Ceritification from "../pages/User/Ceritification/Ceritification";

// {
//   path: "/", 路由路径
//   name: "Login", key值
//   redirect: "/Login", 重定向路径，不需要重定向的路由可以不用配置
//   meta: {
//     require: false  是否需要验证登录才能访问，必填
//   }
// }

// 超级管理员、管理员、普通用户
const roles = ["super_admin", "admin", "user"];

const contantRoutes = [
  {
    path: "/",
    name: "Redirect",
    redirect: "/Layout",
    meta: {
      require: false,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      require: false,
    },
  },
  {
    path: "/Layout",
    name: "Layout",
    redirect: "/Layout/Home",
    component: Layout,
    meta: { require: true },
    role: roles,
    children: [
      {
        path: "/Layout/Home",
        name: "首页",
        component: Home,
        meta: { require: true },
        role: roles,
      },
      {
        path: "/User",
        name: "User",
        component: User,
        redirect: "/User/UserList",
        role: ["role1", "role2"],
        meta: {
          title: "用户管理",
          icon: "peoples",
          require: true,
        },
        children: [
          {
            path: "/User/UserList",
            name: "UserList",
            component: UserList,
            role: ["role1"],
            meta: {
              title: "用户列表",
              icon: "menu",
              require: true,
            },
          },
          {
            path: "/User/Ceritification",
            name: "Ceritification",
            component: Ceritification,
            role: ["role2"],
            meta: {
              title: "使命认证",
              icon: "menu",
              require: true,
            },
          },
        ],
      },
      {
        path: "/System",
        name: "System",
        component: System,
        redirect: "/System/BannerList",
        meta: {
          title: "系统设置",
          icon: "peples",
          require: true,
        },
        children: [
          {
            path: "/System/BannerList",
            name: "BannerList",
            component: BannerList,
            meta: {
              title: "轮播列表",
              icon: "menu",
              require: true,
            },
          },
        ],
      },
    ],
  },
];

const asyncRoutes = [userRouter, systemRouter];

// const page404Router = [
//   {
//     path: "/404",
//     name: "404",
//     component: Page404,
//     meta: { required: false },
//   },
// ];

export default contantRoutes;
