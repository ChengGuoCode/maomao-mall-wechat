// pages/task/task.js
import {fetchDailyTask, fetchPointTask} from '../../services/task/task'
import {jumpTo} from '../../services/_utils/redirect'

Page({
  data: {
    dailyTask: {
      type: Array
    },
    pointTask: {
      type: Array
    },
    selectTab: "0"
  },
  onLoad() {
    this.init();
  },
  onShow() {
    this.loadTaskPage()
  },
  init() {
    this.loadTaskPage()
  },
  loadTaskPage() {
    fetchDailyTask().then(res => {
      this.setData({
        dailyTask: res.records
      })
    });
    fetchPointTask().then(res => {
      this.setData({
        pointTask: res.records
      })
    })
  },
  switchTab(item) {
    const currentTab = item.target.dataset.selecttab;
    const selectTab = this.data.selectTab;
    if (currentTab !== selectTab && (currentTab === "0" || currentTab === "1")) {
      this.setData({
        selectTab: currentTab
      });
    }
  },
  addTask() {
    jumpTo('/pages/task/task_add/task_add?rewardStrategy=' + this.data.selectTab)
  }
})