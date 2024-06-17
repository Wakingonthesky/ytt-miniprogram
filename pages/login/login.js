// pages/login/login.js
import Message from '../../miniprogram_npm/tdesign-miniprogram/message/index';

Page({
  data: {
    imageSrcWx: "../../images/微信一键登录.png",
    imageSrcPhone: "../../images/手机验证码登录.png",
    phoneError: false,
    disable: true,
    isPrivacy: true,
    signUp: false,
    password: "",
    passwordAgain: "",
    password_same: false,
    phone: "",
    verify: "",
    sendTime: '获取验证码',
    snsMsgWait: 60,
    smsFlag: false,
    sendTime: '发送验证码',
    sendColor: '#c9efff'
  },

  register() {
    var that = this
    var URL = require('../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.register_phone}`
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        phone: this.data.phone,
        password: this.data.password,
        code: this.data.verify
      },
      success(res) {
        that.setData({
          status: res.data.code
        })
        console.log(res)
        if (res.data.code == '200') {
          console.log(res.data)
          wx.setStorageSync('token', res.data.result.access_token)
          wx.setStorageSync('user_id', res.data.result.user_id)
          Message.info({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '登陆成功',
          })
          that.switchLogin()
        } else if (res.data.code == '300') {
          that.setData({
            signUp: false,
          })
          Message.error({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '用户名已被注册',
          })
        } else if (res.data.code == '400') {
          Message.error({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '用户名或密码错误',
          })
        } else {
          Message.error({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '未知错误',
          })
        }
      }
    })
  },

  login() {
    var that = this
    var URL = require('../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.login_phone}`
    console.log("login",conf)
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        phone: this.data.phone,
        password: this.data.password,
      },
      success(res) {
        console.log(res.data.result)
        that.setData({
          status: res.data.code
        })
        if (res.data.code == '200') {
          wx.setStorageSync('token', res.data.result.access_token)
          wx.setStorageSync('user_id', res.data.result.user_id)
          Message.info({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '登陆成功',
          })
          that.switchLogin()
        } else if (res.data.code == '300') {
          that.setData({
            signUp: true,
            disable: true
          })
          Message.info({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '请注册',
          })
        } else if (res.data.code == '400') {
          Message.info({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '用户名或密码错误',
          })
        } else {
          Message.error({
            context: that,
            offset: [20, 32],
            duration: 2000,
            content: '未知错误',
          })
        }
      }

    })
  },

  clickLogin() {
    console.log(this.data.signUp)
    if (this.data.signUp) {
      this.register()
    } else {
      this.login()
    }

  },

  sendVerify() {
    var inter = setInterval(function () {
      this.setData({
        smsFlag: true,
        sendColor: '#cccccc',
        sendTime: this.data.snsMsgWait + 's后重发',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendColor: '#c9efff',
          sendTime: '获取验证码',
          snsMsgWait: 60,
          smsFlag: false
        });
      }
    }.bind(this), 1000);
    var that = this
    var URL = require('../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.code}`
    wx.request({
      url: conf,
      method: 'GET',
      data: {
        phone: that.data.phone
      },
      success(res) {
        console.log(res.data),
          Message.info({
            context: this,
            offset: [20, 32],
            duration: 5000,
            content: '验证码已发送',
          })
      }
    })
  },

  onPrivacyChange(e) {
    const {
      checked
    } = e.detail
    this.setData({
      isPrivacy: checked
    })
    this.onChange()
  },

  onChange() {
    if (this.data.signUp) {
      if (!this.data.phone || !this.data.password || this.data.phoneError || !this.data.isPrivacy || !this.data.verify || !this.data.password_same) {
        this.setData({
          disable: true
        })
      } else {
        this.setData({
          disable: false
        })
      }
    } else {
      if (!this.data.phone || !this.data.password || this.data.phoneError || !this.data.isPrivacy) {
        this.setData({
          disable: true
        })
      } else {
        this.setData({
          disable: false
        })
      }
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

  onPhoneInput(e) {
    const {
      phoneError
    } = this.data;
    const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.detail.value);

    if (this.data.phone == "") {
      this.setData({
        phoneError: false
      })
    }

    if (phoneError === isPhoneNumber) {
      this.setData({
        phoneError: !isPhoneNumber,
      });
    }

    this.onChange()

  },

  clickChangeSignup() {
    this.setData({
      signUp: !this.data.signUp
    })
  },

  switchLogin() {
    let pages = getCurrentPages()
    console.log(pages.length)
    if (pages.length == 1) {
      wx.switchTab({
        url: '/pages/index/index',
      })
    } else {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})