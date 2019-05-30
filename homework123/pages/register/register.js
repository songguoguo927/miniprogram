// pages/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    hobbies:['sing','dance','rap'],
    userinfo:null
  },
  formSubmit(e){
    // console.log(e.detail.value)
    if (e.detail.value.username!=''){
      this.setData({
        userinfo: e.detail.value
      })
      // console.log(this.data.userinfo)
      app.userInfoapp = this.data.userinfo
      console.log(app.userInfoapp)
      // wx.request({
      //   url: '后台服务器地址',
      //   data:{
      //     value:event.detail.value
      //   }
      // })
      if (app.userInfoapp != null) {
        wx.redirectTo({
          url: '../login/login',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    }else{
      console.log('请将用户信息填满')
    }
   
  },
  formReset() {
    //重置填入的信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})