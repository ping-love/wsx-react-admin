/*
 * @Author: wangshengxian
 * @Date: 2020-08-06 14:31:07
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-06 15:19:53
 * @Desc: 用户管理路由
 */

import User from "../../pages/User";
import UserList from "../../pages/User/UserList/UserList";
import Ceritification from "../../pages/User/Ceritification/Ceritification";

const userRoutes = {
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
};

export default userRoutes;
