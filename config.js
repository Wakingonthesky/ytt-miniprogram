// 此配置中的值为假数据
const { miniProgram: { envVersion } } = wx.getAccountInfoSync();
const config = {
  develop: {
    API_HOST: 'https://mockapi.eolink.com',
    act:{
      hook:'/n9mRtwS310b30124bda6fc8deb9ab31527ce92fc1fafa68',
      get_signup_act:'/v2/get_signup_act?responseId=1510458',
      is_sign:'/v2/is_sign?responseId=1500687',
      sign_activity:'/v2/sign_activity?responseId=1484187',
      hot_act:'/v2/hot_act?responseId=1484185',
      over_act:'/v2/over_act?responseId=1484183',
      detailed_ps:'/v2/detailed_ps?responseId=1484181'
    },
    soc:{
      hook:'/rgmBUz1c63b3a305b2c2af664b2e8693fc0790cee416d3a',
      signup:'/v2/signup?responseId=1306622',
      issign:'/v2/issign?responseId=1310242',
      inquiry:'/v2/inquiry?responseId=1306621'
    },
    sso:{
      hook:'/DLq9CrNaf266cac1adf95a3accc409d6b264a4da4ab19b8',
      userInfo:'/v2/user/userInfo?responseId=1507846',
      update_password:'/v2/update/password?responseId=1484203',
      update_username:'/v2/update/username?responseId=1484198',
      update_email:'/v2/update/email?responseId=1494296',
      update_phone:'/v2/update/phone?responseId=1484200',
      find_back_password:'/v2/update/find_back_password?responseId=1494298',
      logout:'/v2/lr/logout?responseId=1303962',
      accesstoken:'/v2/ac/accesstoken?responseId=1303963',
      code:'/v2/ac/code?responseId=1484356',
      verify_code:'/v2/ac/verify_code?responseId=1510085',
      register_phone:'/v2/lr/register_phone?responseId=1484213',
      login_phone:'/v2/lr/login_phone?responseId=1484209',
      login:'/v2/lr/login?responseId=1484354',
      wx_login:'/wx_login?responseId=1484211',
      phone_one:'/v2/lr/phone_one?responseId=1495991'
    }
  },
  test: {
    API_HOST: 'https://api.guanxingtuan.top/api',
    act:{
      hook:'/ytt/act',
      get_signup_act:'/v2/get_signup_act',
      is_sign:'/v2/is_sign',
      sign_activity:'/v2/sign_activity',
      hot_act:'/v2/hot_act',
      over_act:'/v2/over_act',
      detailed_ps:'/v2/detailed_ps'
    },
    soc:{
      hook:'/ytt/soc',
      signup:'/v2/signup',
      issign:'/v2/issign',
      inquiry:'/v2/inquiry'
    },
    sso:{
      hook:'/sso/sso',
      userInfo:'/v2/userInfor/getUserInfor',
      update_password:'/v2/update/password',
      update_username:'/v2/update/username',
      update_email:'/v2/update/email',
      update_phone:'/v2/update/phone',
      find_back_password:'/v2/update/find_back_password',
      logout:'/v2/lr/logout',
      accesstoken:'/v2/ac/accesstoken',
      code:'/v2/ac/code',
      verify_code:'/v2/ac/verify_code',
      register_phone:'/v2/lr/register_phone',
      login_phone:'/v2/lr/login_phone',
      login:'/v2/lr/login',
      wx_login:'/wx_login',
      phone_one:'/v2/lr/phone_one'
    }
  }
}
module.exports = {
  config:config,
  env: "test"
};

