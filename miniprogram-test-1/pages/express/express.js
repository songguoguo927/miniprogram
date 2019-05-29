// pages/express/express.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    expressNum:null,//快递单号
    expressList:null //快递投送进度
  },
  // 自定义事件
  inputClick:function(e){
    // console.log(e.detail.value)
    this.setData({
      expressNum: e.detail.value
    })
  },
  //点击按钮发送那个网络请求(去调用全局的getExpressMsg方法)
  btnClick: function () {
    var that = this;
    app.getExpressMsg(this.data.expressNum,
    function(res){//匿名代码块
      console.log(res)
      that.setData({
        flag:res.data.status,
        expressList: res.data.result.list
      })
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