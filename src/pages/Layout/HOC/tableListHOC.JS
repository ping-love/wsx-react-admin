/*
 * @Author: wangshengxian
 * @Date: 2020-08-07 17:20:25
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-07 17:28:57
 * @Desc: list高阶组件
 */

//  const EnhancedComponent = higherOrderComponent(WrapperComponent)

import React, { Component } from "react";

function tableListHOC(WrapperComponent) {
  class TableList extends Component {
    render() {
      return <WrapperComponent />;
    }
  }
  return TableList;
}

export default tableListHOC;
