// pages/home/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      feedback: "",
      wordNum: 0
  },
  inputs: function(e) {
    var value = e.detail.value;
    var len = parseInt(value.length);
    this.setData({
      feedback:e.detail.value
    }) ;
    console.log(len)
    this.setData({
      wordNum: len 
    });
    console.log(this.data)
  },    
  formSubmit: function(e) {
    console.log(that.data.feedback)
  },
  // nullFun: function () {
  //     var a = "这个函数防止警告，不知道为什么可以"
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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