/*
 * @Author: wangshengxian
 * @Date: 2020-08-07 17:46:44
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-08-07 17:56:23
 * @Desc:
 */
let dialog;
class Dialog {
  // 显示
  show(children) {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);

    ReactDOM.render(children || <div>默认的dialog弹框</div>, this.div);
  }
  // 销毁
  destroy() {
    ReactDOM.unmountComponentAtNode(this.div);
    this.div.parentNode(this.div);
  }
}

export default {
  show(children) {
    dialog = new Dialog();
    dialog.show(children);
  },
  hide() {
    dialog.destroy();
  },
};
