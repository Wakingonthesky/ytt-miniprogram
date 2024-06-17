// pages/index.js
Page({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList: [
      '/images/1.jpg',
      '/images/1.jpg',
      '/images/1.jpg',
    ],
    list: [
      {
        title: "社团名",
        main:"调dsds度算法噶大大是dadasdadsadaadasdadasdadasddaddasdadsad",
        url: "../../images/风景1.jpg"
      }
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/风景2.jpg"
      // }, {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/风景3.jpg"
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/风景4.jpg"
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/1.jpg",
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/1.jpg"
      // },
      // {
      //   title: "社团名",
      //   main:"调dsds度算法噶大大是dadasdadsadaadasdadasdadasddaddasdadsad",
      //   url: "../../images/风景1.jpg"
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/风景2.jpg"
      // }, {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/风景3.jpg"
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/风景4.jpg"
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/1.jpg",
      // },
      // {
      //   title: "社团名",
      //   main:"调度算法噶放大法王噶撒大噶山豆根打赏v",
      //   url: "../../images/1.jpg"
      // }
    ]
  },
  GetHotActivity() {
    var that = this
    var URL = require('../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].act.hook}${URL.config[URL.env].act.hot_act}`
    console.log("url",conf)
    wx.request({
      url: conf,
      method: 'GET',
      data: {
        token: wx.getStorageSync('token')
      },
      success(res) {
        console.log(res.data.result)
        that.setData({
          list: res.data.result
        })
      }
    })
  },
  
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        value: 0
      })
    }
    var that = this
  },




  clickButton1() {
    wx.navigateTo({
      url: '/pages/society-signup/societyInfo/societyInfo',
    })
  },
  clickButton2() {
    var that = this
    wx.scanCode({
      success(res) {
        console.log(res)
        that.setData({
          path: res.path
        })
        if (res.path != null) {
          wx.navigateTo({
            url: '/' + res.path
          })
        }
      }
    })
  },
  clickButton3() {
    // wx.navigateTo({
    //   url: '/pages/index/zituan_Info/zituan_Info',
    // })
  },
  getuserInfo(){
    wx.request({
      url: 'https://mockapi.eolink.com/DLq9CrNaf266cac1adf95a3accc409d6b264a4da4ab19b8/v2/user/userInfo?responseId=1507846',
      method: 'POST',
      data:{
        access_token: wx.getStorageSync('token'),
        user_id: wx.getStorageSync('user_id')
      },
      success(res){
        wx.setStorageSync('userInfo', res.data.result)
      }
    })
  },
  gotoInfo(e) {
    // console.log(e.currentTarget.dataset)
    wx.setStorageSync('ActivityId', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/activities/actInfo/actInfo',
    })
  },
  onLoad(){
    this.getuserInfo()
    this.GetHotActivity()
  }
})