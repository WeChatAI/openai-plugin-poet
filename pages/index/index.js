//index.js
//获取应用实例
const app = getApp()
var plugin = requirePlugin("myPlugin");
Page({
  data: {
  },
  onLoad: function () {
    wx.getSystemInfo({
      success: (res) => {
        let isIOS = res.system.indexOf('iOS') > -1
        let navHeight = 0
        if (!isIOS) {
          navHeight = 48
        } else {
          navHeight = 44
        }
        this.setData({
          status: res.statusBarHeight,
          navHeight: navHeight,
          statusBarHeight: res.statusBarHeight + navHeight
        })
      }
    })
    const chat = plugin.getChatComponent()
    chat.send('小微写诗')
  },
  getQueryCallback: function (e) {
  
  },
  goBackHome: function () {
    // wx.navigateBack({
    //   delta: 1
    // })
  },
  back:function(e) {
    this.goBackHome()
  },
  onShareAppMessage:function(e) {
    console.log(e)
  }
})
