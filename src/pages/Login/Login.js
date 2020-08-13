/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 17:12:07
 * @Desc: 登录界面容器组件
 */
import { connect } from "react-redux";
import LoginUI from "./LoginUI";
import { asyncUser } from "../../redux/actions/user";

// state映射
const mapStateToProps = (state) => {
  return {
    userInfo: {},
  };
};

// dispatch事件、发送actions
const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginReq: (params) => {
      dispatch(asyncUser(params));
    },
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);

export default Login;
