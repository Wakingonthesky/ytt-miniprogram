// pages/home/setpassword/setpassword.js
import Message from '../../../miniprogram_npm/tdesign-miniprogram/message/index';

Page({
    data: {
        phoneError: false,
        disable: true,
        phone: "",
        verify: "",
        sendTime: '获取验证码',
        snsMsgWait: 60,
        smsFlag: false,
        sendTime: '发送验证码',
        sendColor: '#c9efff'
    },
    

    clickLogin() {
        
      this.verifyCode()
    },
    verifyCode(){
      var that =this
      var URL = require('../../../config')
      var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.verify_code}`  
      wx.request({
        url: conf,
        method:'POST',
        data:{
          phone:this.data.phone,
          code:this.data.verify
        },
        success(res){
          console.log(res.data)
          if(res.data.code==200){
            wx.showToast({
              title: '验证成功',
              icon: 'success',
              duration: 1000
            })
            setTimeout(()=>{
              wx.navigateTo({
                url: '../setpassword2/setpassword2',
              })
            },1000)
          }else{
            console.log("验证码错误")
            wx.showToast({
              title: '验证码错误',
              icon: 'error',
              duration: 2000
            })
          }
        }
      })
    },
    sendVerify() {
      var inter = setInterval(function() {
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
        var URL = require('../../../config')
        var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].sso.hook}${URL.config[URL.env].sso.code}`
        wx.request({
            url : conf,
            method: 'GET',
            data: {
                phone: that.data.phone
            },
            success(res) {
              console.log(res.data),
                Message.info({
                    context: that,
                    offset: [20, 32],
                    duration: 2000,
                    content: '验证码已发送',
                })
            }
        })
    },

    

    onChange() {
            console.log(this.data.phone)
            if (!this.data.phone || this.data.phoneError || !this.data.verify ) {
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

    

    
})