// pages/activities/activities.js

methods: {}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: '1',
    value: 0,
    stickyProps: {
      zIndex: 2,
    },
    info:'热门',
    list: [
      
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
        access_token: wx.getStorageSync('token')
      },
      success(res) {
        console.log(res)
        that.setData({
          list: res.data.result
        })
      }
    })
  },
  GetOldActivity() {
    var that = this
    var URL = require('../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].act.hook}${URL.config[URL.env].act.over_act}`
    wx.request({
      url: conf,
      method: 'GET',
      data: {
        access_token: wx.getStorageSync('token')
      },
      success(res) {
        that.setData({
          list: res.data.result
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.GetHotActivity()

  },

  
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        value: 1
      })
    }
  },

 

  onTabsChange(event) {
    this.setData({
      value: event.detail.value
    })
    // console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    console.log(this.data.value)
    if (this.data.value == 0) {
      this.GetHotActivity()
    } else {
      this.GetOldActivity()
    }
  },

  onTabsClick(event) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },

  onStickyScroll(event) {
    console.log(event.detail);
  },
  gotoInfo(e) {
    // console.log(e.currentTarget.dataset)
    wx.setStorageSync('ActivityId', e.currentTarget.dataset.id)
    wx.setStorageSync('value', this.data.value)
    wx.navigateTo({
      url: '/pages/activities/actInfo/actInfo',
    })
  },
})