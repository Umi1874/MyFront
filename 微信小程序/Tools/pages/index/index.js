//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    nmi: "",
    checkSum: ""
  },
  //事件处理函数
  inputedit: function (e) {
    this.setData({
      nmi:e.detail.value
    })
  },
  CalculateCheckSum: function (event) {
    console.log(this.data.nmi);
    // jisuan check sum
    let result = 2
    this.setData({
      checkSum:result
    })
  },
  onLoad: function () {
    console.log("Test");
  },
});
