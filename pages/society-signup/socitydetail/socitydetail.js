// pages/society-signup/socitydetail/socitydetail.js
import Message from '../../../miniprogram_npm/tdesign-miniprogram/message/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    socityID: null,
    isSignUp: false
  },
  isSignUp() {
    var that = this
    var userID = wx.getStorageSync('user_id')
    var token = wx.getStorageSync('token')
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].soc.hook}${URL.config[URL.env].soc.issign}`
    console.log("url",conf)
    wx.request({
      url: conf,
      method: 'GET',
      data: {
        societyID: this.data.socityID,
        user_id: userID,
        access_token: token
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == 200) {
          that.setData({
            isSignUp: true
          })
          Message.info({
            context: that,
            offset: [20, 32],
            duration: 5000,
            icon: false,
            content: '您已报名',
          });
        } else {
          that.setData({
            isSign: false
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  gotoRegister() {
    if (this.data.isSignUp == false) {
      wx.navigateTo({
        url: '/pages/society-signup/signup/signup?socityID=' + this.data.socityID+"&society_name="+this.data.title,
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
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var id = options.id
    var name = options.key
    this.setData({
      title: name,
      socityID: id
    })
    this.isSignUp()
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