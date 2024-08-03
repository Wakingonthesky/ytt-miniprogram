// pages/societyInfo/societyInfo.js
Page({
  data: {
    info: [{
        text: "学术科技类",
        id: 0,
        img: "../../../images/学术科技类.png"
      },
      {
        text: "公益志愿类",
        id: 1,
        img: "../../../images/公益志愿类.png"
      }, {
        text: "体育竞技类",
        id: 2,
        img: "../../../images/体育竞技类.png"
      }, {
        text: "实践技能类",
        id: 3,
        img: "../../../images/实践技能类.png"
      }, {
        text: "文化艺术类",
        id: 4,
        img: "../../../images/文化艺术类.png"
      }, {
        text: "政治理论类",
        id: 5,
        img: "../../../images/政治理论类.png"
      }, {
        text: "创新创业类",
        id: 6,
        img: "../../../images/创新科技类.png"
      }
    ]
  },
  clickSociety(e) {
    wx.navigateTo({
      url: '/pages/society-signup/societyList/societyList?' + 'id=' + e.target.dataset.id
    })
  }
})