// pages/signup/signup.js
Page({

  data: {
    nameError: false,
    studentIDError: false,
    phoneError: false,
    name: "",
    studentID: "",
    phone: "",
    disable: true,
    socityID: 1,
    society_name: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    console.log(option)
    this.setData({
      socityID: option.socityID,
      society_name: option.society_name
    })
  },

  onInputChange() {
    console.log(this.data)
    if (!this.data.studentID || !this.data.name) {
      console.log("至少有一个是空的")
      console.log(!this.data.name)
      console.log(!this.data.studentID)
      // console.log(!this.data.phone)

      this.setData({
        disable: true
      })
    } else {
      if (this.data.nameError || this.data.studentIDError) {
        console.log("至少有一个是错的")
        this.setData({
          disable: true
        })
      } else {
        console.log("全对")
        this.setData({
          disable: false
        })
      }
    }
  },

  onNameInput(e) {
    // console.log(e.detail.value)
    const isName = /^[\u4e00-\u9fa5]{0,}$/.test(e.detail.value);
    if (this.data.name == null) {
      this.setData({
        nameError: false,
      });
    }
    if (this.data.nameError === isName) {
      this.setData({
        nameError: !isName,
      });
    }
    this.onInputChange()
  },

  onStudentIDInput(e) {
    console.log(typeof (this.data.studentID))
    const isStudentID = /^202[0,1,2,3][0-9]{6}$/.test(e.detail.value);
    if (this.data.studentID == null) {
      this.setData({
        studentIDError: false,
      });
    }
    if (this.data.studentIDError === isStudentID) {
      this.setData({
        studentIDError: !isStudentID,
      });
    }
    this.onInputChange()
  },

  /*onPhoneInput(e) {
    const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.detail.value);
    if (this.data.phone == null) {
      this.setData({
        phoneError: false,
      });
    }
    if (this.data.phoneError === isPhoneNumber) {
      this.setData({
        phoneError: !isPhoneNumber,
      });
    }
    this.onInputChange()
  },*/

  gotoRegister() {
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].soc.hook}${URL.config[URL.env].soc.signup}`
    console.log("url",conf)
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        access_token: wx.getStorageSync('token'),
        user_Info: {
          user_id: wx.getStorageSync('user_id'),
          phone: this.data.phone,
          real_name: this.data.name,
          student_id: this.data.studentID,
          society_id: this.data.socityID,
          society_name: this.data.society_name
        }
      },
      success(res) {
        console.log(res)
        if (res.data.code == 200) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(()=>{
            wx.reLaunch({
              url: '/pages/society-signup/socitydetail/socitydetail',
            })
          },2000)
        }

      }
    })
  }
})