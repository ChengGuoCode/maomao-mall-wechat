import {post} from '../_utils/request'
import {toastError, toastSuccess} from '../_utils/toast'
import {jumpToHome} from '../_utils/redirect'

export function fetchDailyTask() {
  return postDailyTask()
}

export function fetchPointTask() {
  return postPointTask()
}

export function saveTask(param) {
  postSaveTask(param)
}

export function completeTask(param) {
  postCompleteTask(param)
}

function postDailyTask() {
  return new Promise(function(resolve, reject) {
    post(
      '/service/app/task/getTaskList',
      {'taskType':0},
      (res) => {
        var resObj = res.data;
        if (resObj.code === 0) {
          resolve(resObj.data)
        } else {
          toastError(resObj.msg)
        }
      },
      (err) => {
        toastError('服务繁忙，请稍后重试');
      }
    )
  })
}

function postPointTask() {
  return new Promise(function(resolve, reject) {
    post(
      '/service/app/task/getTaskList',
      {'taskType':1},
      (res) => {
        var resObj = res.data;
        if (resObj.code === 0) {
          resolve(resObj.data)
        } else {
          toastError(resObj.msg)
        }
      },
      (err) => {
        toastError('服务繁忙，请稍后重试');
      }
    )
  })
}

function postSaveTask(param) {
  post(
    '/service/app/task/addOrUpdate',
    param,
    (res) => {
      var resObj = res.data;
      if (resObj.code === 0) {
        toastSuccess('保存成功', (res) => {
          setTimeout(function() {
            jumpToHome()
          }, 1500)
        })
      } else {
        toastError(resObj.msg)
      }
    },
    (err) => {
      toastError('服务繁忙，请稍后重试');
    }
  )
}

function postCompleteTask(param) {
  post(
    '/service/app/task/execute',
    param,
    (res) => {
      var resObj = res.data;
      if (resObj.code === 0) {
        toastSuccess('任务完成', (res) => {
          setTimeout(function() {
            jumpToHome()
          }, 1500)
        })
      } else {
        toastError(resObj.msg)
      }
    },
    (err) => {
      toastError('服务繁忙，请稍后重试');
    }
  )
}