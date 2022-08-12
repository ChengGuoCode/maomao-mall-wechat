// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isScrollX: {
      type: Boolean
    },
    tabs: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    chooseIndex(item) {
      var index = item.target.dataset.tab;
      if (index !== this.data.currentIndex) {
        this.setData({
          currentIndex: index
        })
      }
    }
  }
})
