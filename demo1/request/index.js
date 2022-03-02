// 同时发送异步代码的次数
let ajaxTimes = 0;
export const request = (params) => {
  // 判断url中是否带有 /my/ 请求就带上header请求头 传入新的值并且结构header
  let header = { ...params.header };
  if (params.url.includes("/my/")) {
    // 拼接header 带上token
    header["Authorization"] = wx.getStorageSync("token");
  }
  ajaxTimes++;

  // 显示加载中 效果
  wx.showLoading({
    title: "加载中",
    mask: true
  });

  //定义公共的url
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      header: header,
      //链接拼接
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result.data.message);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        ajaxTimes--;//当是最后一次的异步请求时再调用hideLoading
        if (ajaxTimes === 0) {
          //关闭正在等待的图标
          wx.hideLoading();
        }
      }
    });
  })
}
