// price.ts
import { formatTime } from '../../utils/util'

Page({
  data: {
    gnyj: { // 国内油价
      date: '',
      result: []
    }
  },
  queryGnyj () { // 查询油价
    return new Promise((resolve: any, reject: any) => {
      let today = formatTime(new Date()).split(' ')[0]
      if (wx.getStorageSync('gnyj') && wx.getStorageSync('gnyj').date === today) { // 今天是否查询过油价
        resolve(wx.getStorageSync('gnyj'))
      } else {
        wx.request({
          method: 'POST',
          url: 'https://apis.juhe.cn/gnyj/query?key=7f4439b60c5ce9da399df82485caafa5',
          success (res) {
            console.log(res.data)
            resolve(res.data)
          },
          fail (err) {
            console.log(err)
            reject(new Error())
          }
        })
      }
    })
  },
  getLocation () { // 查询所在省份
    // const self = this
    return new Promise((resolve, reject) => {
      // 获取坐标
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          /* 根据坐标获取地址信息 */
          wx.request({
            method: 'GET',
            url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=ZRGBZ-MGAKQ-G7Z5L-GNIX5-64OCQ-XCFUK',
            success (res) {
              console.log(res.data)
              resolve(res.data)
            },
            fail (err) {
              console.log(err)
              reject(new Error())
            }
          })
          // vm.$httpWX.get({
          //   url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=ZRGBZ-MGAKQ-G7Z5L-GNIX5-64OCQ-XCFUK'
          // }).then(result => {
          //   vm.currentProvince = result.result.ad_info.province
          //   resolve(vm.currentProvince)
          // }).catch(err => {
          //   console.log(err)
          //   reject(new Error('err'))
          // })
        },
        fail (res) {
          reject(res)
        }
      })
    })
  },
  onLoad() {
    const self = this
    self.queryGnyj().then((res: any) => { // 查询油价
      console.log('查询油价成功')
      console.log(res)
      self.setData({
        [`gnyj`]: {
          date: formatTime(new Date()).split(' ')[0],
          result: res.result
        }
      })
      wx.setStorageSync('gnyj', self.data.gnyj)
      // 获取定位
      // self.getLocation().then((res: any) => {
      //   console.log(res.result.ad_info.province)
      //   for (let i = 0; i < res.length; i++) {
      //     if (province.indexOf(res[i].city) > -1) { // 匹配当前城市
      //       let currentData = res[i]
      //       this.data.gnyj.result.splice(i, 1)
      //       this.data.gnyj.result.unshift(currentData) // 将当前城市排到第一位
      //       break
      //     }
      //   }
      //   console.log(this.gnyj)
      // }).catch((err) => {
      //   console.log(err)
      // })
    })
  },
})
