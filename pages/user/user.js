// pages/user/user.js
import {fetchUserInfo, fetchUserItems} from '../../services/user/user'

Page({
  data: {
    userInfo: {
      type: Object
    },
    userOrderInfo: {
      type: Object
    },
    userItems: {
      type: Array
    }
  },
  onLoad() {
    this.init();
  },
  onShow() {
    this.loadUserPage()
  },
  init() {
    this.loadUserPage();
  },
  loadUserPage() {
    fetchUserInfo().then(({userInfo}) => {
      this.setData({
        userInfo
      });
    });
    fetchUserItems().then((res) => {
      this.setData({
        userItems: res
      });
    });
  }
})
