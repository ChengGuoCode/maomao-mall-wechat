// components/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchText: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputVal: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clearInput: function () {
      this.setData({
        inputVal: "",
      });
      this.triggerEvent('transferSearch', this.data.inputVal)
    },
    inputTyping: function (e) {
      this.setData({
        inputVal: e.detail.value
      });
      this.triggerEvent('transferSearch', this.data.inputVal)
    }
  }
})
