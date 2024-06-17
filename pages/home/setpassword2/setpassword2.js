// pages/home/setpassword2/setpassword2.js
import Message from '../../../miniprogram_npm/tdesign-miniprogram/message/index';

Page({
  data: {
    disable: true,
    password: "",
    passwordAgain: "",
    password_same: false,
  },
  clickLogin() {
    console.log("修改密码")
    this.changePassword()

  },
  changePassword(){
    var userID = wx.getStorageSync('user_id')
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.update_password}`
    wx.request({
      url: conf,
      method: 'POST',
      data:{
        access_token: wx.getStorageSync('token'),
        user_id: userID,
        password: this.data.password
      },
      success(res){
        console.log(res.data)
        if(res.data.code==200){
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1000
          })
          setTimeout(()=>{
            wx.reLaunch({
              url: '/pages/home/my-information/my-information',
            })
          },1000)
        }else{
          wx.showToast({
            title: '未知错误',
            icon: 'error',
            duration: 2000
          })
        }
      }
    })
  },
  onChange() {
    if (!this.data.password|| !this.data.password_same) {
      this.setData({
        disable: true
      })
    } else {
      this.setData({
        disable: false
      })
    }
  },

  loginMethod(e) {
    this.setData({
      password_login: !this.data.password_login
    })
  },

  same(e) {
    if (this.data.password === this.data.passwordAgain) {
      this.setData({
        password_same: true,
      })
    } else
      this.setData({
        password_same: false,
      })
    this.onChange()
  },

  
 
})