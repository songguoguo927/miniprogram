//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username:null
  },
  
  onLoad: function () {
    console.log('index load')
   this.setData({
     username:app.userInfoapp.username
   })
  },
 
})
