// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //自定义的事件
  //or 写法二v1Click(){}
  v1Click:function(){
    // console.log('1111111111')
    wx.navigateTo({
      url: '../news/news?msg=page111',
      success(){
        console.log('v1 go to success')
      },
      fail(){

      }
    })
  },
  v2Click: function () {
    // console.log('2222222')
    wx.redirectTo({
      url: '../news/news?id=2&msg=page222',
      success() {
        console.log('v2 go to success')
      }
    })
   },
  v3Click: function () {
    // console.log('3333333')
    // 专门针对 跳转tabBar上配置的页面
//不支持传值

    wx.switchTab({
      url: '../logs/logs',
      success() {
        console.log('v3 go to success')
      }
    })
   },
  v4Click: function () {
  //  console.log('4444444')
  //
  wx.reLaunch({
    url: '../logs/logs',
  })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('life onload')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('life onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('life onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('life onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('life onUnload')
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