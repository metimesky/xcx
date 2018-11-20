//logs.js

varutil = require('../../utils/util.js')

Page({

  data: {

    logs: []

  },

  onLoad: function () {

    this.setData({

      logs: (wx.getStorageSync('logs') || []).map(function (log) {

        returnutil.formatTime(newDate(log))

      })

    })

  }

})