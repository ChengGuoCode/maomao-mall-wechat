export function fetchHome() {
  return mockFetchHome();
}

function mockFetchHome() {
  const { delay } = require('../_utils/delay');
  const { genCarouselImageList } = require('../../model/carousel');
  return delay().then(() => {
    return {
      carousel: genCarouselImageList(),
      tabList: [
        {
          text: '精选推荐',
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