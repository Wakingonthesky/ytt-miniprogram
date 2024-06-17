// pages/home/home.js
Page({

  data: {
    imageSrc: 'https://tdesign.gtimg.com/miniprogram/images/image1.jpeg',
    userName: "",
    userProfile: '',
    getUser: false,
  },
  clickSignupInfo() {
    wx.navigateTo({
      url: '/pages/home/signup-info/signup-info',
    })
  },
  clickLogout() {
    wx.navigateTo({
      url: '/pages/home/my-account/my-account',
    })
  },
  clickAboutUs() {
    wx.navigateTo({
      url: '/pages/home/about-us/about-us',
    })
  },
  clickQuestion() {
    wx.navigateTo({
      url: '/pages/home/question/question',
    })
  },
  clickMyInformation() {
    wx.navigateTo({
      url: '/pages/home/my-information/my-information',
    })
  },
  clickSignUpInfo() {
    wx.navigateTo({
      url: '/pages/home/signup-info/signup-info',
    })
  },
  clickProfile() {
    if (this.data.getUser == false) {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
              userProfile: res.userInfo.avatarUrl,
              hasUserInfo: true,
              getUser: true
            }),
            wx.setStorageSync('userProfile', this.data.userProfile)
        }
      })
    }
  },
  getuserInfo() {
    var URL = require('../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.userInfo}`
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        access_token: wx.getStorageSync('token'),
        user_id: wx.getStorageSync('user_id')
      },
      success(res) {
        wx.setStorageSync('userInfo', res.data.result)
      }
    })
  },
  onTabItemTap() {
    this.getuserInfo()
    this.setData({
      
      userName: wx.getStorageSync('userInfo').username
    })
  },

  onLoad() {
    
  },
  onShow() {

    this.clickProfile()
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        value: 2
      })
    }
  }
})