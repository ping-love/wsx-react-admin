/*
 * @Author: wangshengxian
 * @Date: 2020-08-06 16:23:55
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-07 14:33:58
 * @Desc: 测试使用
 */

import System from "../pages/System";
import BannerList from "../pages/System/BannerList/BannerList";

import User from "../pages/User";
import UserList from "../pages/User/UserList/UserList";
import Ceritification from "../pages/User/Ceritification/Ceritification";

const demoRouter = [
  {
    path: "/User",
    name: "User",
    component: User,
    redirect: "/User/UserList",
    role: ["role1", "role2"],
    key: "sub1",
    meta: {
      title: "用户管理",
      icon: "User",
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
          icon: "MenuUnfold",
          require: true,
        },
        children: [
          {
            path: "/User/UserList/Add",
            name: "Add",
            meta: {
              title: "添加",
            },
            // component:
          },
        ],
      },
      {
        path: "/User/Ceritification",
        name: "Ceritification",
        component: Ceritification,
        role: ["role2"],
        meta: {
          title: "实名认证",
          icon: "MenuUnfold",
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
    key: "sub2",
    meta: {
      title: "系统设置",
      icon: "Setting",
      require: true,
    },
    children: [
      {
        path: "/System/BannerList",
        name: "BannerList",
        component: BannerList,
        meta: {
          title: "轮播列表",
          icon: "MenuUnfold",
          require: true,
        },
      },
    ],
  },
];

export default demoRouter;
