/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 17:08:19
 * @Desc:
 */
// 容器组件,只处理逻辑
import { connect } from "react-redux";
import { getHttpData } from "../../redux/actions/number";

/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 15:54:22
 * @Desc:
 */
// ui组件,只展示结构
import React, { Component } from "react";

class DetailsUI extends Component {
  render() {
    return (
      <div>
        <p>首页</p>
        <p>{this.props.count}</p>
        <button onClick={this.props.handleLogin}>去登录</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: 10,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLogin: (params) => {
      console.log("-login-", params);
      // let params = { name: "小李", age: 18 };
      dispatch(getHttpData(params));
    },
  };
};

const Details = connect(mapStateToProps, mapDispatchToProps)(DetailsUI);

export default Details;
