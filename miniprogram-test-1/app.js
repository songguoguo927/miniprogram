//app.js

var appConfig = {
  //自定义一个网络请求数据的方法
  /**
   * 第一个参数：快递单号
   * 二：回调方法--将结果传回给express.js
   */
  getExpressMsg: function (num, method){
    wx.request({
      url: 'http://wuliu.market.alicloudapi.com/kdi?no='+num, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json', // 默认值
        "Authorization": "APPCODE 4ec8a073a4f440e8abc15d55c30e294d"
      },
      success(res) {
        // console.log(res.data.result.list)
        method(res)
      }
    })
  },

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
};
App(appConfig)