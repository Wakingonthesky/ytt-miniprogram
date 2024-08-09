import gulpError from './utils/gulpError';
App({
  onShow() {
    if (gulpError !== 'gulpErrorPlaceHolder') {
      wx.redirectTo({
        url: `/pages/gulp-error/index?gulpError=${gulpError}`,
      });
    }
  },

  
  onLaunch() {
    wx.onAppRoute((res) => {
      // 这个if判断注释掉就能暂停跳转到登录页面
      var token = wx.getStorageSync('token')
      console.log(token)
      if (token === '' && res.path != 'pages/login/login' && res.path !='pages/index/privacy/privacy' && res.path !='pages/index/service/service' && res.path != 'pages/home/setpassword/setpassword' && res.path != 'pages/home/setpassword2/setpassword2.') {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    }, )
  },

  globalData:{
    //服务器地址
    serverUrl:'https://server.com'
  }
});