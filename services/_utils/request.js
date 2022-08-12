import {jumpToLogin} from './redirect'
import {login} from '../login/login'

const unLogin = ['/service/app/user/wxlogin']

export function post(url, data, success, fail) {
  const serverpath = 'http://127.0.0.1:9101'
  var verificationInfo = ''
  if (unLogin.indexOf(url) <= -1) {
    wx.checkSession({
      fail: (err) => {
        console.log(err)
        login({})
      }
    })
    var userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      const uid = userInfo.id
      const token = userInfo.token
      const app = getApp()
      const ver = app.globalData.ver
      const sessionKey = app.globalData.sessionKey
      const uuid = app.globalData.uuid
      var requestUri = [];
      requestUri[0] = decodeURIComponent(sessionKey)
      requestUri[1] = '-'
      requestUri[2] = 'sessionKey'
      requestUri[3] = decodeURIComponent('-9527')
      requestUri[4] = '-'
      requestUri[5] = 'timestamp'
      requestUri[6] = decodeURIComponent(token)
      requestUri[7] = '-'
      requestUri[8] = 'token'
      requestUri[9] = decodeURIComponent(uid)
      requestUri[10] = '-'
      requestUri[11] = 'uid'
      requestUri[12] = decodeURIComponent(ver)
      requestUri[13] = '-'
      requestUri[14] = 'ver'
      requestUri[15] = uuid
      const requestUriStr = requestUri.join('')
      const md5 = require('./md5')
      const sign = md5.hexMD5(requestUriStr).toUpperCase()

      verificationInfo = '?token=' + token + '&ver=' + ver + '&timestamp=-9527&sign=' + sign + '&sessionKey=' + sessionKey + '&uid=' + uid
    }
  }
  wx.request({
    url: serverpath + url + verificationInfo,
    data: data,
    header: 'application/json',
    method: 'POST',
    timeout: 500,
    success: success,
    fail: fail,
    complete: (res) => {
      var resObj = res.data
      if (resObj.code === 1001 || resObj.code === 1005 || resObj.code === 1006) {
        jumpToLogin()
      }
    }
  })
}