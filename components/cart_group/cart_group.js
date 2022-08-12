// components/cart_group/cart_group.js
import {toastError} from '../../services/_utils/toast'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    storeGoods: {
      type: Object
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
    goodsNumMinus(e) {
      const skuCode = e.target.dataset.skucode
      var storeGoods = this.properties.storeGoods
      var goodsList = storeGoods.goodsList
      var total = 0
      for (let index = 0; index < goodsList.length; index++) {
        const element = goodsList[index];
        if (element.skuCode === skuCode) {
          if (element.num > 0) {
            element.num = element.num - 1
          }
        }
        total = total + (element.num * (element.price / 100))
      }
      this.setData({
        storeGoods: storeGoods
      })
      this.triggerEvent("amountChange", {
        storeGoods: storeGoods,
        total: total
      })
    },
    goodsNumPlus(e) {
      const skuCode = e.target.dataset.skucode
      var storeGoods = this.properties.storeGoods
      var goodsList = storeGoods.goodsList
      var total = 0
      for (let index = 0; index < goodsList.length; index++) {
        const element = goodsList[index];
        if (element.skuCode === skuCode) {
          if (element.num + 1 > element.stock) {
            toastError('库存不足')
          } else {
            element.num = element.num + 1
          }
        }
        total = total + (element.num * (element.price / 100))
      }
      this.setData({
        storeGoods: storeGoods
      })
      this.triggerEvent("amountChange", {
        storeGoods: storeGoods,
        total: total
      })
    },
    bindManual(e) {
      const skuCode = e.target.dataset.skucode
      var val = parseInt(e.detail.value)
      if (val < 0) {
        val = 0
      }
      var storeGoods = this.properties.storeGoods
      var goodsList = storeGoods.goodsList
      var total = 0
      for (let index = 0; index < goodsList.length; index++) {
        const element = goodsList[index];
        if (element.skuCode === skuCode) {
          if (val > element.stock) {
            toastError('库存不足')
          } else {
            element.num = val
          }
        }
        total = total + (element.num * (element.price / 100))
      }
      this.setData({
        storeGoods: storeGoods
      })
      this.triggerEvent("amountChange", {
        storeGoods: storeGoods,
        total: total
      })
    }
  }
})
