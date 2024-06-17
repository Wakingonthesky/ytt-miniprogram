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
    act_name:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(option) {
    console.log(option)
    var that = this
    this.setData({
      act_name:option.act_name
    })
  },

  onInputChange() {
    console.log(this.data)
    if (!this.data.studentID || !this.data.phone || !this.data.name) {
      console.log("至少有一个是空的")
      console.log(!this.data.name)
      console.log(!this.data.studentID)
      console.log(!this.data.phone)

      this.setData({
        disable: true
      })
    } else {
      if (this.data.nameError || this.data.studentIDError || this.data.phoneError) {
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

  onPhoneInput(e) {
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
  },
  gotoRegister() {
    var URL = require('../../../config')
    var conf = `${URL.config[URL.env].API_HOST}${URL.config[URL.env].act.hook}${URL.config[URL.env].act.sign_activity}`
    
    wx.request({
      url: conf,
      method: 'POST',
      data: {
        access_token: wx.getStorageSync('token'),
        user_Info: {
          act_id: wx.getStorageSync('ActivityId'),
          act_name: this.data.act_name,
          user_id: wx.getStorageSync('user_id'),
          student_id: this.data.studentID,
          real_name: this.data.name,
          phone: this.data.phone
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
              url: '/pages/activities/register/register',
            })
          },2000)
        }

      }
    })
  }
})