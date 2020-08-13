/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 15:54:05
 * @Desc:
 */
// 容器组件,只处理逻辑
import { connect } from "react-redux";
import HomeUI from "./HomeUI";
import { getHttpData } from "../../redux/actions/number";

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

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);

export default Home;
