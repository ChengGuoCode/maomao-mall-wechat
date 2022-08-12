import {post} from '../../services/_utils/request'
import {toastError, toastSuccess} from '../_utils/toast'
import {jumpToHome} from '../_utils/redirect'

export function login(params) {
  wx.setStorageSync('userInfo', undefined)
  wx.login({
    success: function(res) {
      if (res.code) {
        var request = {
          "username": params.username,
          "password": params.password,
          "code": res.code
        }
        post(
          "/service/app/user/wxlogin",
          request,
          (res) => {
            var resData = res.data;
            if (resData.code !== 0) {
              toastError(resData.msg)
            } else {
              wx.setStorageSync('userInfo', resData.data)
              toastSuccess('登录成功', (res) => {
                setTimeout(function() {
                  jumpToHome()
                }, 1500)
              })
            }
          },
          (err) => {
            toastError('服务繁忙，请稍后重试');
          }
        )
      } else {
        toastError('获取用户登录态失败！' + res.errMsg)
      }
    }
  })
}