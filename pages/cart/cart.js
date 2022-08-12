// pages/cart/cart.js
import { fetchCartGroupData, createOrder, pay } from '../../services/cart/cart'
import {jumpTo} from '../../services/_utils/redirect'

Page({
  data: {
    cartGroupData: {
      type: Array
    },
    cartGroupSize: 0,
    amount: 0,
    goodsNum: 0
  },
  onLoad() {
    this.refreshData();
  },
  onShow() {
    this.refreshData();
  },
  refreshData() {
    this.getCartGroupData().then((res) => {
      const groupSize = res.length;
      var total = 0
      var num = 0
      if (groupSize > 0) {
        var goodsList = res[0].goodsList
        num = goodsList.length
        for (let index = 0; index < goodsList.length; index++) {
          const element = goodsList[index];
          total = total + (element.num * (element.price / 100))
        }
      }
      this.setData({
        cartGroupData: res,
        cartGroupSize: groupSize,
        amount: total,
        goodsNum: num
      });
    })
  },
  getCartGroupData() {
    return fetchCartGroupData();
  },
  amountChange(e) {
    var total = e.detail.total
    var storeGoods = e.detail.storeGoods
    var groupStoreGoods = []
    groupStoreGoods[0] = storeGoods
    this.setData({
      amount: total,
      cartGroupData: groupStoreGoods
    })
  },
  settle() {
    var goodsData = this.data.cartGroupData[0]
    const businessId = goodsData.businessId
    const storeId = goodsData.storeId
    var goodsList = goodsData.goodsList
    var orderItems = []
    for (let index = 0; index < goodsList.length; index++) {
      const element = goodsList[index];
      orderItems[index] = {
        businessId: businessId,
        storeId: storeId,
        cartId: element.cartId,
        productId: element.productId,
        productName: element.productName,
        skuCode: element.skuCode,
        productType: 0,
        price: element.price,
        goodsNum: element.num
      }
    }
    createOrder({
      orderSource: 0,
      orderItemList: orderItems
    }).then(res => {
      var orderNo = res.orderNo
      if (orderNo !== undefined && orderNo !== null) {
        var payment = 0
        var payItemList = []
        for (let index = 0; index < orderItems.length; index++) {
          const element = orderItems[index];
          payment = payment + (element.goodsNum * element.price)
          payItemList[index] = {
            businessId: element.businessId,
            storeId: element.storeId,
            productId: element.productId,
            skuCode: element.skuCode,
            price: element.price,
            goodsNum: element.goodsNum
          }
        }
        var payReqParam = {
          orderNo: orderNo,
          payment: payment,
          payWay: 0,
          pass: '123',
          orderPayItemList: payItemList
        }
        pay(payReqParam)
        jumpTo('/pages/cart/cart')
      }
    })
  }
})
