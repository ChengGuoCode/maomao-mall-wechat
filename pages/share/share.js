// pages/share/share.js
import {fetchShareCategory, fetchShareData} from "../../services/share/share";

Page({
  data: {
    tabList: [],
    goodsImgTextData: []
  },
  onLoad() {
    this.init();
  },
  init() {
    this.loadSharePage();
  },
  loadSharePage() {
    fetchShareCategory().then(( {category} ) => {
      this.setData({
        tabList: category
      });
    });
    fetchShareData().then(( {shareData} ) => {
      this.setData({
        goodsImgTextData: shareData
      });
    });
  }
})
