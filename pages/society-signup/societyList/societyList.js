// pages/society-signup/society_detailed/society_detailed.js
import Message from '../../../miniprogram_npm/tdesign-miniprogram/message/index';

let data_list = require("@utils/societies.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classes: 0,
    detail_list: ["测试文字，看到说明出现错误"]
  },
  clickSociety(e) {

    // var myInfo = wx.getStorageSync('myInfo')
    var token = wx.getStorageSync('token')
    var userID = wx.getStorageSync('user_id')
    console.log(Object.values(data_list.societies)[this.data.classes])
    let society_id = this.data.classes.toString() + Object.values(data_list.societies)[this.data.classes].indexOf(e.currentTarget.dataset.text).toString().padStart(2, '0')
    console.log(e.currentTarget.dataset.text)
    console.log(society_id)
    wx.navigateTo({
      url: '/pages/society-signup/societydetail/societydetail?key=' + e.currentTarget.dataset.text + "&id=" + society_id
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      detail_list: data_list.societies[options["id"]]
    })
    this.setData({
      classes: options["id"]
    })
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