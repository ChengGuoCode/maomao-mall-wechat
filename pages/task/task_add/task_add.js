import {saveTask} from '../../../services/task/task'

Page({
  data: {
    rewardStrategy: {
      type: String
    },
    limitType: 0,
    taskTimeType: 0,
    limitTimes: '',
    startTime: '',
    endTime: ''
  },
  onLoad: function(options) {
    this.setData({
      rewardStrategy: options.rewardStrategy
    })
  },
  formSubmit(e) {
    var param = e.detail.value;
    if (param.taskTimeType === '1') {
      param.startTime = param.startTime + ' 00:00:00'
      param.endTime = param.endTime + ' 23:59:59'
    } else {
      var curDate = new Date()
      param.startTime = curDate.getFullYear() + '-' + (curDate.getMonth() + 1 < 10 ? '0' + (curDate.getMonth() + 1) : curDate.getMonth() + 1) + '-' + (curDate.getDate() < 10 ? '0' + curDate.getDate() : curDate.getDate()) + ' 00:00:00'
      param.endTime = '2100-01-01 23:59:59'
    }
    param.strategyList = [{
      conditionVal: param.conditionVal,
      conditionDesc: param.conditionDesc,
      rewardType: 0,
      rewardPoint: param.rewardPoint * 100
    }]
    saveTask(param)
  },
  changeRewardStrategy: function(e) {
    this.setData({
      rewardStrategy: e.detail.value
    })
  },
  changeLimitType: function(e) {
    if (e.detail.value === '0') {
      this.setData({
        limitTimes: ''
      })
    }
  },
  changeTaskTimeType: function(e) {
    if (e.detail.value === '0') {
      this.setData({
        startTime: '',
        endTime: ''
      })
    }
  },
  changeStartTime: function(e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  changeEndTime: function(e) {
    this.setData({
      endTime: e.detail.value
    })
  }
})