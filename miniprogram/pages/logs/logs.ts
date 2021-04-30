// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util'

Page({
  data: {
    recordData: [],
  },
  onLoad() {
    this.getLogs()
  },
  getLogs () {
    try {
      this.setData({
        [`recordData`]: wx.getStorageSync('recordData') || []
      })
    } catch (e) {
      // Do something when catch error
    }
  }
})
