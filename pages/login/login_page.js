import {login} from '../../services/login/login'

Page({
  data: {
    username: '',
    password: ''
  },
  inputuser(e) {
    this.setData({
      username: e.detail.value
    })
  },
  inputpass(e) {
    this.setData({
      password: e.detail.value
    })
  },
  login() {
    login(
      {
        "username": this.data.username,
        "password": this.data.password
      }
    );
  }
})