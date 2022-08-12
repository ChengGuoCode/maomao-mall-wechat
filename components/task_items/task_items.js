// components/task_items/task_items.js
import {completeTask} from '../../services/task/task'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    taskList: {
      type: Array
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
    completeTask: function(e) {
      var dataset = e.target.dataset;
      var data = dataset.id;
      var times = data.conditionVal
      var taskId = data.taskId
      var param = {
        "taskId": taskId,
        "times": times
      }
      completeTask(param)
    }
  }
})
