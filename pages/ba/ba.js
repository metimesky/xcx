//ba.js

//获取应用实例

var app = getApp()

Page({
  abcM: function (e){
    var src = e.currentTarget.dataset.src;
    var x = 0
    var y = 0
    console.log(e)
    var width = this.imgIdList[e.currentTarget.id].width; //图片原宽
    var height = this.imgIdList[e.currentTarget.id].height; //图片原高
    //小程序默认固定宽320px,获取top和left值,使图片居中显示
    height = height * (320 / width);
    width = 320;

    x = (app.windowWidth - width) / 2
    y = (app.windowHeight - height) / 2
    console.log(app.windowHeight)
    var img = {
      x: x,
      y: y
    };
    console.log(img)
    this.setData({ img: img, isCheckDtl: true });
  },



})