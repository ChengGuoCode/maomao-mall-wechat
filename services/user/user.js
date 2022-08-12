import {post} from '../_utils/request'

export function fetchUserInfo() {
  return mockFetchUserInfo();
}

export function fetchUserItems() {
  return postUserItems();
}

function mockFetchUserInfo() {
  const { delay } = require('../_utils/delay');
  return delay().then(() => genUserInfo());
}

function postUserItems() {
  return new Promise(function(resolve, reject) {
    post(
      '/service/app/user/getUserItems',
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

function mockFetchUserItems() {
  const { delay } = require('../_utils/delay');
  return delay().then(() => {
    return {
      userItems: [
        {
          "id": 0,
          "name": "收货地址"
        },
        {
          "id": 1,
          "name": "优惠券",
          "num": 10
        },
        {
          "id": 2,
          "name": "积分",
          "num": 200
        },
        {
          "id": 3,
          "name": "任务",
          "num": 3
        }
      ]
    }
  });
}

const genUserInfo = () => ({
  userInfo
});

const userInfo = {
  "portraitUrl":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F25%2F20181125133756_aC5Gx.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662883215&t=362ce300d1492b733314c1de23c00629",
  "username":"二毛"
}