// pages/activities/actInfo/actInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: {},
    disable: false,
    isSetUp: false
  },
  GetActivity() {
    var that = this
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].act.hook}${URL.config[URL.env].act.detailed_ps}`
    console.log("url",conf)
    wx.request({
      url: conf,
      method: 'GET',
      data: {
        act_id: wx.getStorageSync('ActivityId'),
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
  isSetUp() {
    var that = this
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].act.hook}${URL.config[URL.env].act.is_sign}`
    console.log("url",conf)
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        access_token: wx.getStorageSync('token'),
        act_id: wx.getStorageSync('ActivityId'),
        user_id: wx.getStorageSync('user_id')
      },
      success(res) {
        console.log(res.data)
        if (res.data.message = 'success') {
          that.setData({
            isSetUp: true
          })
        }
        else{
          that.setData({
            isSetUp: false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.GetActivity()
    this.isSetUp()
    const value = wx.getStorageSync('value')
    if (value == 1) 
    {
      this.setData({
        disable: true
      })
    }
  },
  gotoRegister() {
    console.log(this.data.activityId)
    if (this.data.isSetUp == false) {
      wx.navigateTo({
        url: '/pages/activities/register/register?act_name=' + this.data.list.act_name,
      })
    } else {
      console.log("已报名")
      wx.showToast({
        title: '您已报名',
        icon: 'success',
        duration: 2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})