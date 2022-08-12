export function fetchShareCategory() {
  return mockFetchShareCategory();
}

export function fetchShareData() {
  return mockFetchShareData();
}

function mockFetchShareCategory() {
  const { delay } = require('../_utils/delay');
  return delay().then(() => {
    return {
      category: [
        {
          text: '全部',
          key: 0,
        },
        {
          text: '夏日防晒',
          key: 1,
        },
        {
          text: '二胎大作战',
          key: 2,
        },
        {
          text: '人气榜',
          key: 3,
        },
        {
          text: '好评榜',
          key: 4,
        },
        {
          text: 'RTX 30',
          key: 5,
        },
        {
          text: '手机也疯狂',
          key: 6,
        },
      ]
    };
  });
}

function mockFetchShareData() {
  const { delay } = require('../_utils/delay');
  return delay().then(() => {
    return {
      shareData: [
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 0,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png",
          "title":"好吃不贵",
          "username":"我是个zs",
          "likeNum": 0,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        },
        {
          "id": 1,
          "picture":"https://cdn-we-retail.ym.tencent.com/tsr/goods/dz-2a.png",
          "title":"使用流畅，值得入手",
          "username":"撒打飞机拉伸",
          "likeNum": 100,
          "portraitUrl": "https://we-retail-static-1300977798.cos.ap-guangzhou.myqcloud.com/retail-ui/components-exp/avatar/avatar-1.jpg"
        }
      ]
    };
  });
}