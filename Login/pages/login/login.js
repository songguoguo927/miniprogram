var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
   loginName:null,
    loginPwd:null
  },
//将用户输入的用户名和密码保存起来
  usernameInput(e){
    // console.log(e.detail.value)
    this.setData({
      loginName:e.detail.value
    })
  },
  passwdInput(e) {
    // console.log(e.detail.value)
    this.setData({
      loginPwd: e.detail.value
    })
  },
  //当点击登陆按钮时，将值赋给app.js中myLogin.userInfo,同时跳转至user
  loginBtn(){
    app.myLogin.userInfo={
      name:this.data.loginName,
      pwd:this.data.loginPwd
    }
    console.log(app.myLogin.userInfo)
    wx.switchTab({
      url: '../user/user',
    })
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