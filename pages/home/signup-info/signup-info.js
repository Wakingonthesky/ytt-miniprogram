// pages/signupInfo/signupInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      a: '1',
      value: 1,
      stickyProps: {
          zIndex: 2,
      },
      
      societylist: [
        
      ],
      actlist:[
        
      ]
  },
  getSociety(){
    var userID = wx.getStorageSync('user_id')
    var token = wx.getStorageSync('token')
    var that = this
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].soc.hook}${URL.config[URL.env].soc.inquiry}`
    console.log(conf)
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        user_id: userID,
        access_token: token
      },
      success(res){
        console.log(res.data)
        if(res.data.code==200){
          that.setData({
            societylist: res.data.result.SocietyList
          })
        }
      }
    })
  },
  getActivity(){
    var userID = wx.getStorageSync('user_id')
    var token = wx.getStorageSync('token')
    var that = this
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].act.hook}${URL.config[URL.env].act.get_signup_act}`
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        access_token: token,
        user_id: userID
      },
      success(res){
        
        console.log(res.data.result.ActivityList[0])
        if(res.data.code==200){
          that.setData({
            actlist: res.data.result.ActivityList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getSociety()
    this.getActivity()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
 
  
})