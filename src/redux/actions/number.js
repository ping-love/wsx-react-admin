import * as constant from "../config/actionType";
import axios from "axios";

// 创建action - one 同步
export const oneFuncSyncAction = (val) => ({
  type: constant.ACTION_TYPE_ONE,
  val,
});

// 创建action - two 异步
export const twoFuncAsyncAction = (val) => ({
  type: constant.ACTION_TYPE_TWO,
  val,
});

// 请求数据
export const twoFuncReq = (params) => {};

export const getHttpData = (params) => {
  return (dispatch) => {
    console.log("-async-action-", params);
    axios
      .get("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
