//app.js
var plugin = requirePlugin("myPlugin"); 
App({
  data() {
    return {
      backgroundHeight: '',
      statusBarHeight: ''
    }
  },
  onLaunch: function () {
    wx.getSystemInfo({
      success: (res) => {
        let isIOS = res.system.indexOf('iOS') > -1
        let navHeight = 0
        if (!isIOS) {
          navHeight = 48
        } else {
          navHeight = 44
        }
        this.data.backgroundHeight = res.windowHeight
        this.data.statusBarHeight = res.statusBarHeight + navHeight
      }
    })
    let address = (this.data.backgroundHeight - 120) + "px" 
    let url = "url('http://res.wx.qq.com/mmspraiweb_node/dist/static/xieshi/xiaoweiBackground.png')" + " " +"no-repeat" +  " " + "scroll" + " "  + "0px" + " " + "0px" + "/" + "100%"+ " "+ address
    plugin.init({
      appid: "VEgbxLa9kYqzGOzstdeSF3xDbkS9zK",
      // textToSpeech: true,
      guideList: [
        "小微写诗",
        "一江春水连海平",
        "朋友",
        "故乡",
        "谢谢"
      ],
      // welcome: '请问需要什么帮助',
      background: url,
      guideCardHeight: 50,
      operateCardHeight: 120,
      // history: true,
      // historySize: 60,
      navHeight: this.data.statusBarHeight,
      success: () => {
      },
      fail: error => {}
    });
  },
  globalData: {
    userInfo: null
  }
})