/*
 * @Author: wangshengxian
 * @Date: 2020-08-07 15:07:14
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-07 15:22:51
 * @Desc: 标签组件
 */

import React, { Component } from "react";
import { connect } from "react-redux";

class TagsViewUI extends Component {
  render() {
    return <div className="TagsView">标签组件</div>;
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

const TagsView = connect(mapStateToProps, mapDispatchToProps)(TagsViewUI);

export default TagsView;
