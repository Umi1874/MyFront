//app.js
const defaultTime = {
  defaultWorkTime: 25,
  defaultRestTime: 5
}

App({
  onLaunch: function() {
    // 展示本地存储能力
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')
    if(!workTime) {
      wx.setStorage({
        key: 'workTime',
        data: defaultTime.defaultWorkTime,
      })
    }
    if(!restTime){
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime,
      })
    }
  }
})