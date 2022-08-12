// components/cart_bar/cart_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsNum: {
      type: Number
    },
    amount: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    settle() {
      this.triggerEvent("settle", undefined)
    }
  }
})
