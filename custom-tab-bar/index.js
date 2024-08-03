// custom-tab-bar/index.js
Component({
  properties: {

  },

  data: {
    value: null,
    list: [{
        id: 1,
        label: '首页',
        url: '/pages/index/index',
        icon: '/images/首页.png'
      },
      {
        id: 2,
        url: "/pages/activities/activities",
        label: "活动",
        icon: '/images/活动.png'
      },
      {
        id: 3,
        label: '我的',
        url: '/pages/home/home',
        icon: '/images/我的.png'
      },
    ],
  },

  methods: {
    
    onChange(e) {
      // console.log(this.data.list)
      // console.log(e)
      wx.switchTab({
        url: this.data.list[e.detail.value].url
      })
      // console.log("value="+e.detail.value)
      // if (e.detail.value == 0) {
      //   console.log("执行")
      //   this.setData({
      //     list: [{
      //         id: 1,
      //         label: '首页',
      //         url: '/pages/index/index',
      //         icon: '/images/首页2.png'
      //       },
      //       {
      //         id: 2,
      //         url: "/pages/activities/activities",
      //         label: "活动",
      //         icon: '/images/活动.png'
      //       },
      //       {
      //         id: 3,
      //         label: '我的',
      //         url: '/pages/home/home',
      //         icon: '/images/我的.png'
      //       },
      //     ]
      //   })
      // }
      // if (e.detail.value == 1) {
      //   this.setData({
      //     list: [{
      //         id: 1,
      //         label: '首页',
      //         url: '/pages/index/index',
      //         icon: '/images/首页.png'
      //       },
      //       {
      //         id: 2,
      //         url: "/pages/activities/activities",
      //         label: "活动",
      //         icon: '/images/活动2.png'
      //       },
      //       {
      //         id: 3,
      //         label: '我的',
      //         url: '/pages/home/home',
      //         icon: '/images/我的.png'
      //       },
      //     ]
      //   })
      // }
      // if (e.detail.value == 2) {
      //   this.setData({
      //     list: [{
      //         id: 1,
      //         label: '首页',
      //         url: '/pages/index/index',
      //         icon: '/images/首页.png'
      //       },
      //       {
      //         id: 2,
      //         url: "/pages/activities/activities",
      //         label: "活动",
      //         icon: '/images/活动.png'
      //       },
      //       {
      //         id: 3,
      //         label: '我的',
      //         url: '/pages/home/home',
      //         icon: '/images/我的2.png'
      //       },
      //     ]
      //   })
      // }
    }
  },


})
// 后面写代码的记住：再添加页面别忘了在那个页面的onShow加这个函数。不然TabBar不刷新
// if (typeof this.getTabBar === 'function' && this.getTabBar()) {this.getTabBar().setData({value: 1//这个不改会导致乱跳}) }