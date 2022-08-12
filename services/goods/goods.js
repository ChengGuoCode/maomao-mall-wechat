import {post} from '../_utils/request'
import {toastSuccess, toastError} from '../_utils/toast'

export function fetchGoodsList(productName, pageIndex = 1, pageSize = 20) {
  return postFetchGoodsList(productName, pageIndex, pageSize);
}

export function addCart(param) {
  postAddCart(param)
}

function postFetchGoodsList(productName, pageIndex = 1, pageSize = 20) {
  return new Promise(function(resolve, reject) {
    post(
      '/service/app/home/getGoodsList',
      {
        'productName': productName,
        'pageNo': pageIndex,
        'pageSize': pageSize
      },
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

function postAddCart(param) {
  post(
    '/service/app/cart/addOrUpdateProduct',
    param,
    (res) => {
      var resObj = res.data;
      if (resObj.code === 0) {
        toastSuccess('添加购物车成功', (res) => {
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