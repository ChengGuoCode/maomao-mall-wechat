import { fetchHome } from '../../services/home/home';
import { fetchGoodsList } from '../../services/goods/goods';

Page({
  data: {
    imgSrcs: [],
    tabList: [],
    goodsList: [],
    autopaly: true,
    circular: true,
    interval: 5000,
    productName: ''
  },
  goodsListPagination: {
    pageIndex: 0,
    pageSize: 20,
  },
  onLoad() {
    this.init();
  },
  init() {
    this.loadHomePage();
  },
  onShow() {
    this.loadHomePage();
  },
  loadHomePage() {
    fetchHome().then(({ carousel, tabList }) => {
      this.setData({
        // tabList,
        imgSrcs: carousel
      });
      this.loadGoodsList(true);
    });
  },
  freshGoodsList: function(e) {
    var inputSearch = e.detail
    this.setData({
      productName: inputSearch
    })
    this.loadGoodsList(true);
  },
  async loadGoodsList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
    const pageSize = this.goodsListPagination.pageSize;
    let pageIndex = this.goodsListPagination.pageIndex + 1;
    if (fresh) {
      pageIndex = 0;
    }
    try {
      fetchGoodsList(this.data.productName, pageIndex, pageSize).then(res => {
        this.setData({
          goodsList: fresh ? res.records : this.data.goodsList.concat(res.records),
        });
      })
      this.goodsListPagination.pageIndex = pageIndex;
      this.goodsListPagination.pageSize = pageSize;
    } catch (err) {
      
    }
  }
})