/*
 * @Author: wangshengxian
 * @Date: 2020-08-07 15:07:14
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-07 15:16:44
 * @Desc: 设置组件
 */

import React, { Component } from "react";
import { connect } from "react-redux";

class SettingUI extends Component {
  render() {
    return <div className="Setting">设置组件</div>;
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
      // dispatch(actionCreator);
    },
  };
};

const Setting = connect(mapStateToProps, mapDispatchToProps)(SettingUI);

export default Setting;
