/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 15:54:22
 * @Desc:
 */
// ui组件,只展示结构
import React, { Component } from "react";

class HomeUI extends Component {
  render() {
    return (
      <div>
        <p>首页</p>
        <p>{this.props.count}</p>
        <button onClick={this.props.handleLogin}>去登录</button>
        {/* <input
          type="text"
          value={this.props.inputVal}
          onChange={this.props.changeInputVal}
        />
        <button>提交</button> */}
      </div>
      // <ul>
      //   <li>dell</li>
      // </ul>
    );
  }
}

export default HomeUI;
