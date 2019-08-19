const api = {}
// wx.request 处理；
const request = ({url, data, type, cb}) => {
  wx.showLoading({
    title: '请求中'
  });
  wx.request({
    url,
    data,
    method: type,
    success (res) {
      wx.showLoading();
      cb(res.data)
    },
    fail (err) {
      wx.showLoading();
      reject(err)
    }
  })
}