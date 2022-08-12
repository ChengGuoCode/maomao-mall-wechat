export function jumpToLogin() {
  wx.redirectTo({
    url: '/pages/login/login_page',
  })
}

export function jumpToHome() {
  wx.redirectTo({
    url: '/pages/task/task',
  })
}

export function jumpTo(targetUrl) {
  wx.redirectTo({
    url: targetUrl
  })
}