// pages/home/my-information/my-information.js
Page({
  data: {
    name: "",
    new_name: "",
    phone: null,
    new_phone:null,
    password: null,
    userInfo: "",
    dialogKey: '',
    showWithInput: false,
    showTextAndTitleWithInput: false,
    title: "",
    inputvalue: "",
    id:0
  },
  getuserInfo(){
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.userInfo}`
    console.log("url",conf)
    wx.request({
      url: conf,
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
  getInput(e) {
    console.log(e.detail)
  },
  input(e) {
    console.log(e.detail.value)
  },
  closeDialogConfirm(e) {
    const {
      dialogKey
    } = this.data;
    this.setData({
      [dialogKey]: false,
      
    });
    console.log(e.currentTarget.dataset.id)
    if(e.currentTarget.dataset.id==1){
      // 修改昵称
      this.setData({
        new_name: this.data.inputvalue
      })
      var URL = require('../../../config')
      var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.update_username}`
      console.log("url",conf)
      wx.request({
        url: conf,
        method:'POST',
        data:
        {
          access_token: wx.getStorageSync('token'),
          user_id: wx.getStorageSync('userInfo').user_id,
          new_username: this.data.new_name
        },
        success(res){
          console.log("用户名修改成功")
        }
      })
    }
    if(e.currentTarget.dataset.id==2){
      //修改手机号
      this.setData({
        new_phone: this.data.inputvalue
      })
      var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.update_phone}`
      wx.request({
        url: conf,
        method:'POST',
        data:
        {
          access_token: wx.getStorageSync('token'),
          user_id: wx.getStorageSync('userInfo').user_id,
          new_phone: this.data.new_phone
        },
        success(res){
          console.log("手机号修改成功")
        }
      })
    }
    this.setData({
      inputvalue: null
    })
    wx.reLaunch({
      url: '../my-information/my-information',
    })
  },

  closeDialogCancel(e) {
    const {
      dialogKey
    } = this.data;
    this.setData({
      [dialogKey]: false,
    });
  },

  clicklogout() {
    wx.clearStorage()
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },

  setname(e) {

    console.log(e.currentTarget.dataset)
    const {
      key
    } = e.currentTarget.dataset;
    this.setData({
      id: e.currentTarget.dataset.id,
      [key]: true,
      dialogKey: key,
      title: "编辑昵称",
      placeholder: "请输入名字",
      name:wx.getStorageSync('userInfo').Internet_name,
    });
  },
  setphone(e) {
    console.log(e.currentTarget.dataset)
    const {
      key
    } = e.currentTarget.dataset;
    this.setData({
      id: e.currentTarget.dataset.id,
      [key]: true,
      dialogKey: key,
      title: "更换手机号",
      placeholder: "请输入手机号",
      phone: wx.getStorageSync('userInfo').phone,
    });
  },
  setpassword(e) {
    wx.navigateTo({
      url: '../setpassword/setpassword',
    })
  },
  onLoad(options) {
    console.log(this.data.phone)
    const userInfo1 = wx.getStorageSync('userProfile')
    this.getuserInfo()
    this.setData({
      userInfo: userInfo1,
      name:wx.getStorageSync('userInfo').username,
      phone: wx.getStorageSync('userInfo').phone,
      password: wx.getStorageSync('userInfo').password
    })
  },
})