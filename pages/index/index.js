//index.js
//获取应用实例
import { Base64 } from 'js-base64';
const app = getApp();

Page({
  data: {
    motto: '去刷脸认证',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  toAuth () {
    wx.navigateToMiniProgram({
      appId: 'wx9a481b395c2d3314',
      path: 'pages/entry/entry?name=123',
      envVersion: 'develop',
      extraData: {
        transactionNo: 'wx9a481b395c2d3314'
      }
    })
  },
  toFdd () {
    // wx.chooseVideo({
    //   sourceType: ['camera'],
    //   maxDuration: 10,
    //   camera: 'front',
    //   success(res) {
    //     console.log(res.tempFilePath)
    //   }
    // })
    wx.navigateToMiniProgram({
      appId: 'wx9a481b395c2d3314',
      path: 'pages/faceCert/faceCert',
      envVersion: 'develop'
    })
  },
  onLoad: function () {
    console.log(Base64.encode('123456'))
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
