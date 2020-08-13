/*
 * @Author: wangshengxian
 * @Date: 2020-08-05 11:17:24
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-05 13:51:50
 * @Desc:
 */
import * as constant from "../config/actionType";

const initStatus = {
  num: 1,
};

export default (state = initStatus, action) => {
  switch (action.type) {
    case constant.ACTION_TYPE_ONE:
      return {
        ...state,
        num: state.initStatus + 1,
      };
    case constant.ACTION_TYPE_TWO:
      return {
        ...state,
        num: state.initStatus - 1,
      };
    case constant.ACTION_TYPE_THREE:
      return {
        ...state,
        num: 1,
      };
    default:
      return state;
  }
};
