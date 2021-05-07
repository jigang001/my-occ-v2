// logs.ts
import { formatToFixed, compare } from './../../utils/util'
interface Record {
  km: string;
  fill: string;
  amount: string;
  date: string;
}
Page({
  data: {
    recordData: [], // 我的记录
    mpg: 0, // 百公里油耗
    costPK: 0, // 每公里耗费
    deleteIndex: -1, // 删除时临时保存索引值
    confirmShow: false // 显示确认弹框
  },
  getLogs () {
    try {
      const arr = wx.getStorageSync('recordData') || []
      this.setData({
        [`recordData`]: arr.sort(compare('km'))
      })
      this.calculateTotal() // 计算总值
    } catch (e) {
      // Do something when catch error
    }
  },
  calculateTotal () { // 计算总值
    const recordData: Record[] = this.data.recordData
    let totalKm = 0 // 总公里数
    let totalFill = 0 // 总加油量
    let totalCost = 0 // 总耗费
    if (this.data.recordData.length > 0) {
      let firstKM = Number(recordData[recordData.length - 1].km)
      let lastKM = Number(recordData[0].km)
      totalKm = lastKM - firstKM
      for (let index = 0; index < recordData.length; index++) {
        const item = recordData[index];
        if (index > 0) {
          totalFill += Number(item.fill)
          totalCost += Number(item.amount)
        }
      }
    }
    const mpg = Number(formatToFixed(totalFill / totalKm * 100, 2))
    const costPK = Number(formatToFixed(totalCost / totalKm, 2))
    this.setData({
      [`mpg`]: (isNaN(mpg) ? 0 : mpg),  // 计算百公里油耗
      [`costPK`]: (isNaN(costPK) ? 0 : costPK)  // 计算每公里耗费
    })
  },
  submit () { // 保存
    try {
      wx.setStorageSync('recordData', this.data.recordData)
      this.getLogs()
    } catch (e) { }
  },
  deleteItem (e: any) { // 删除本条
    this.data.deleteIndex = e.currentTarget.dataset.index
    this.setData({
      [`confirmShow`]: true  // 显示确认框
    })
  },
  tapDialogButton (e: any) { // 点击确认框按钮
    console.log(e)
    this.setData({
      confirmShow: false
    })
    if (e.detail.index === 1) { // buttons索引值（0取消  1确定）
      this.confirmDelete() // 确认删除
    } else {
      this.cancelDelete() // 取消删除
    }
  },
  confirmDelete () { // 确认删除
    this.data.recordData.splice(this.data.deleteIndex, 1)
    this.submit()
  },
  cancelDelete () { // 取消删除
    this.data.deleteIndex = -1
  },
  navigateTo (url: string) {
    wx.navigateTo({ url: url })
  },
  onShow() {
    this.getLogs()
  }
})
