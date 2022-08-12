export function toastSuccess(msg, success) {
  wx.showToast({
    title: msg,
    icon: 'success',
    duration: 1500,
    mask: true,
    success
  })
}

export function toastLoading(msg) {
  wx.showToast({
    title: msg,
    icon: 'loading',
    duration: 1500,
    mask: true
  })
}

export function toastError(msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    duration: 1500,
    mask: true
  })
}