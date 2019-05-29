Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "this is the first test page!!!",
    btn1msg:"default",
    flag:true,
    news: ['新闻1', '新闻2', '新闻3','新闻4']
  },
  // 自定义事件
  btn1:function(){
    var news2 = this.data.news;
    news2.shift() /*删除数组中的最后一个元素==动态操作数组 */
    this.setData({
      msg:"I was changed",
      btn1msg:"yoo",
      flag:!this.data.flag,
      news:news2
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