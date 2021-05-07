// index.ts
import { formatTime } from './../../utils/util'
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    formData: {
      km: null, // 公里数
      fill: null, // 加油量
      amount: null, // 支付金额
      date: formatTime(new Date()).split(' ')[0] // 默认获取当前日期
    },
    rules: [
      {
        name: 'km',
        rules: {required: true, message: '公里数必填'},
      },
      {
        name: 'fill',
        rules: [{required: true, message: '加油量必填'}],
      },
      {
        name: 'amount',
        rules: {required: true, message: '支付金额必填'},
      },
      {
        name: 'date',
        rules: {required: true, message: '加油日期必选'},
      }
    ],
    recordData: [] // 加油记录
  },
  // 选择日期
  bindDateChange (e: any) {
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    })
  },
  // 表单输入
  formInputChange (e: any) {
      const {field} = e.currentTarget.dataset
      this.setData({
          [`formData.${field}`]: e.detail.value
      })
  },
  // 查询加油记录
  getLogs () {
    try {
      this.setData({
        [`recordData`]: wx.getStorageSync('recordData') || []
      })
    } catch (e) {
      // Do something when catch error
    }
  },
  // 保存
  submitForm() {
    let self: any = this
    self.selectComponent('#form').validate((valid: any, errors: any) => {
      console.log('valid', valid, errors)
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          wx.showToast({
            title: errors[firstError[0]].message,
            icon: 'none'
          })
        }
      } else {
        self.data.recordData.push(self.data.formData) // 新增一条记录
        try {
          wx.setStorageSync('recordData', self.data.recordData) // 保存记录
        } catch (e) { }
        self.setData({
          [`formData`]: { // 重置表单
            km: null, // 公里数
            fill: null, // 加油量
            amount: null, // 支付金额
            date: formatTime(new Date()).split(' ')[0] // 默认获取当前日期
          }
        })
        // 跳转到记录页
        wx.switchTab({
          url: '../logs/logs'
        })
      }
    })
  },
  onShow() {
    console.log(app)
    this.getLogs()
  }
})
