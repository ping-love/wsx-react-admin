/*
 * @Author: wangshengxian
 * @Date: 2020-08-07 15:07:14
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-10 10:19:22
 * @Desc: 面包屑组件
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Breadcrumb } from "antd";

class BreadcrumbUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbList: [],
    };
  }
  render() {
    let bcList = this.props.breadcrumbList;
    return (
      <div className="Breadcrumb">
        <Breadcrumb>
          {bcList.map((item, index) => (
            <Breadcrumb.Item key={index}>
              <Link to={item.path}>{item.title}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    breadcrumbList: ownProps.breadcrumbList,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      // dispatch(actionCreator);
    },
  };
};

const Bc = connect(mapStateToProps, mapDispatchToProps)(BreadcrumbUI);

export default Bc;
