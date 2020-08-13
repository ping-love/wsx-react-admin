/*
 * @Author: wangshengxian
 * @Date: 2020-08-10 14:06:58
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 14:49:40
 * @Desc: 侧边菜单栏
 */
import React, { Component } from "react";

import { Menu } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const SubMenu = Menu.SubMenu;

/**
 * 设置菜单标题图标
 */
function setMenuIcon(type) {
  let el = null;
  switch (type) {
    case "Setting":
      el = <SettingOutlined />;
      break;
    case "User":
      el = <UserOutlined />;
      break;
    case "MenuUnfold":
      el = <MenuUnfoldOutlined />;
      break;
    default:
      break;
  }
  return el;
}

/**
 * 设置一级菜单
 */
function setSingleMenu(obj, index) {
  const { children } = obj;
  return (
    <SubMenu
      key={obj.name}
      title={
        <span>
          {setMenuIcon(obj.meta.icon)}
          <span>{obj.meta.title}</span>
        </span>
      }
    >
      {setNextMenu(children)}
    </SubMenu>
  );
}

/**
 * 设置下一级菜单
 */
function setNextMenu(children) {
  // console.log("-next-menu-", children);
  const nextMenu = children.map((item, idx) => {
    let midItem = null;
    if (item.children) {
      midItem = setSingleMenu(item);
    } else {
      midItem = (
        <Menu.Item key={item.name}>
          <span>
            {setMenuIcon(item.meta.icon)}
            <span>{item.meta.title}</span>
          </span>
        </Menu.Item>
      );
    }
    return midItem;
  });
  return nextMenu;
}

/**
 * 创建一级菜单
 */
function createSingleMenu(list) {
  // console.log(list);
  const menuItem = list.map((item, index) => {
    // console.log(item, item.children);
    return setSingleMenu(item, index);
  });
  return menuItem;
}

class SlideMenu extends Component {
  render() {
    const { menuList, current } = this.props;
    // console.log(menuList);

    return (
      <nav className="slideMenuWrap">
        <Menu
          onClick={this.handleClick}
          style={{ width: 200 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
        >
          {createSingleMenu(menuList)}
        </Menu>
      </nav>
    );
  }
}

export default SlideMenu;
