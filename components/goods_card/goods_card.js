// components/goods_card/goods_card.js
import { addCart } from '../../services/goods/goods';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
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
    addCart: function(e) {
      var skuList = e.target.dataset.sku;
      var selectedSku = skuList.filter(function(sku, index, arrs){
        return sku.selected
      })
      var sku = selectedSku[0]
      addCart({
        'businessId': sku.businessId,
        'storeId': sku.storeId,
        'productId': sku.productId,
        'skuCode': sku.skuCode,
        'num': 1
      })
    }
  }
})
