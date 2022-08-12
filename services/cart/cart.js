import {post} from '../_utils/request'
import {toastError, toastSuccess} from '../_utils/toast'

export function fetchCartGroupData() {
  return postCartGroupData()
}

export function createOrder(param) {
  return postCreateOrder(param)
}

export function pay(param) {
  return postPay(param)
}

function postCartGroupData() {
  return new Promise(function(resolve, reject) {
    post(
      '/service/app/cart/getCartList',
      {},
      (res) => {
        var resObj = res.data;
        if (resObj.code === 0) {
          resolve(resObj.data)
        } else {
          toastError(resObj.msg)
        }
      },
      (err) => {
        toastError('服务繁忙，请稍后重试');
      }
    )
  })
}

function postCreateOrder(param) {
  return new Promise(function(resolve, reject) {
    post(
      '/service/app/order/create',
      param,
      (res) => {
        var resObj = res.data;
        if (resObj.code === 0) {
          resolve(resObj.data)
        } else {
          toastError(resObj.msg)
        }
      },
      (err) => {
        toastError('服务繁忙，请稍后重试');
      }
    )
  })
}

function postPay(param) {
  post(
    '/service/app/payment/pay',
    param,
    (res) => {
      var resObj = res.data;
      if (resObj.code === 0) {
        toastSuccess('支付成功', (res) => {
          setTimeout(function() {
          }, 1500)
        })
      } else {
        toastError(resObj.msg)
      }
    },
    (err) => {
      toastError('服务繁忙，请稍后重试');
    }
  )
}