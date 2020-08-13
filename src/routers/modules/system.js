/*
 * @Author: wangshengxian
 * @Date: 2020-08-06 14:32:49
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-06 15:18:24
 * @Desc: 系统管理路由
 */

import System from "../../pages/System";
import BannerList from "../../pages/System/BannerList/BannerList";

const systemRouter = {
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
};

export default systemRouter;
