"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        gnyj: {
            date: '',
            result: []
        }
    },
    queryGnyj: function () {
        return new Promise(function (resolve, reject) {
            var today = util_1.formatTime(new Date()).split(' ')[0];
            if (wx.getStorageSync('gnyj') && wx.getStorageSync('gnyj').date === today) {
                resolve(wx.getStorageSync('gnyj'));
            }
            else {
                wx.request({
                    method: 'POST',
                    url: 'https://apis.juhe.cn/gnyj/query?key=7f4439b60c5ce9da399df82485caafa5',
                    success: function (res) {
                        console.log(res.data);
                        resolve(res.data);
                    },
                    fail: function (err) {
                        console.log(err);
                        reject(new Error());
                    }
                });
            }
        });
    },
    getLocation: function () {
        return new Promise(function (resolve, reject) {
            wx.getLocation({
                type: 'wgs84',
                success: function (res) {
                    var latitude = res.latitude;
                    var longitude = res.longitude;
                    wx.request({
                        method: 'GET',
                        url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=ZRGBZ-MGAKQ-G7Z5L-GNIX5-64OCQ-XCFUK',
                        success: function (res) {
                            console.log(res.data);
                            resolve(res.data);
                        },
                        fail: function (err) {
                            console.log(err);
                            reject(new Error());
                        }
                    });
                },
                fail: function (res) {
                    reject(res);
                }
            });
        });
    },
    onLoad: function () {
        var self = this;
        self.queryGnyj().then(function (res) {
            var _a;
            console.log('查询油价成功');
            console.log(res);
            self.setData((_a = {},
                _a["gnyj"] = {
                    date: util_1.formatTime(new Date()).split(' ')[0],
                    result: res.result
                },
                _a));
            wx.setStorageSync('gnyj', self.data.gnyj);
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUE2QztBQUU3QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1NBQ1g7S0FDRjtJQUNELFNBQVM7UUFDUCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBWSxFQUFFLE1BQVc7WUFDM0MsSUFBSSxLQUFLLEdBQUcsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2hELElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQ3pFLE9BQU8sQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDbkM7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxHQUFHLEVBQUUsc0VBQXNFO29CQUMzRSxPQUFPLFlBQUUsR0FBRzt3QkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFDbkIsQ0FBQztvQkFDRCxJQUFJLFlBQUUsR0FBRzt3QkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNoQixNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBO29CQUNyQixDQUFDO2lCQUNGLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsV0FBVztRQUVULE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUVqQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sWUFBRSxHQUFHO29CQUNWLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQzdCLElBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUE7b0JBRS9CLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0JBQ1QsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsR0FBRyxFQUFFLG1EQUFtRCxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLDBDQUEwQzt3QkFDbEksT0FBTyxZQUFFLEdBQUc7NEJBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ25CLENBQUM7d0JBQ0QsSUFBSSxZQUFFLEdBQUc7NEJBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTs0QkFDaEIsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQTt3QkFDckIsQ0FBQztxQkFDRixDQUFDLENBQUE7Z0JBVUosQ0FBQztnQkFDRCxJQUFJLFlBQUUsR0FBRztvQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2IsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixJQUFNLElBQUksR0FBRyxJQUFJLENBQUE7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7O1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLE1BQU0sSUFBRztvQkFDUixJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2lCQUNuQjtvQkFDRCxDQUFBO1lBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQWdCM0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcHJpY2UudHNcclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnXHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBnbnlqOiB7IC8vIOWbveWGheayueS7t1xyXG4gICAgICBkYXRlOiAnJyxcclxuICAgICAgcmVzdWx0OiBbXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcXVlcnlHbnlqICgpIHsgLy8g5p+l6K+i5rK55Lu3XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcclxuICAgICAgbGV0IHRvZGF5ID0gZm9ybWF0VGltZShuZXcgRGF0ZSgpKS5zcGxpdCgnICcpWzBdXHJcbiAgICAgIGlmICh3eC5nZXRTdG9yYWdlU3luYygnZ255aicpICYmIHd4LmdldFN0b3JhZ2VTeW5jKCdnbnlqJykuZGF0ZSA9PT0gdG9kYXkpIHsgLy8g5LuK5aSp5piv5ZCm5p+l6K+i6L+H5rK55Lu3XHJcbiAgICAgICAgcmVzb2x2ZSh3eC5nZXRTdG9yYWdlU3luYygnZ255aicpKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2FwaXMuanVoZS5jbi9nbnlqL3F1ZXJ5P2tleT03ZjQ0MzliNjBjNWNlOWRhMzk5ZGY4MjQ4NWNhYWZhNScsXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRMb2NhdGlvbiAoKSB7IC8vIOafpeivouaJgOWcqOecgeS7vVxyXG4gICAgLy8gY29uc3Qgc2VsZiA9IHRoaXNcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIC8vIOiOt+WPluWdkOagh1xyXG4gICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gcmVzLmxhdGl0dWRlXHJcbiAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAvKiDmoLnmja7lnZDmoIfojrflj5blnLDlnYDkv6Hmga8gKi9cclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaXMubWFwLnFxLmNvbS93cy9nZW9jb2Rlci92MS8/bG9jYXRpb249JyArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlICsgJyZrZXk9WlJHQlotTUdBS1EtRzdaNUwtR05JWDUtNjRPQ1EtWENGVUsnLFxyXG4gICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gdm0uJGh0dHBXWC5nZXQoe1xyXG4gICAgICAgICAgLy8gICB1cmw6ICdodHRwczovL2FwaXMubWFwLnFxLmNvbS93cy9nZW9jb2Rlci92MS8/bG9jYXRpb249JyArIGxhdGl0dWRlICsgJywnICsgbG9uZ2l0dWRlICsgJyZrZXk9WlJHQlotTUdBS1EtRzdaNUwtR05JWDUtNjRPQ1EtWENGVUsnXHJcbiAgICAgICAgICAvLyB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAvLyAgIHZtLmN1cnJlbnRQcm92aW5jZSA9IHJlc3VsdC5yZXN1bHQuYWRfaW5mby5wcm92aW5jZVxyXG4gICAgICAgICAgLy8gICByZXNvbHZlKHZtLmN1cnJlbnRQcm92aW5jZSlcclxuICAgICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIC8vICAgcmVqZWN0KG5ldyBFcnJvcignZXJyJykpXHJcbiAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCAocmVzKSB7XHJcbiAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpc1xyXG4gICAgc2VsZi5xdWVyeUdueWooKS50aGVuKChyZXM6IGFueSkgPT4geyAvLyDmn6Xor6Lmsrnku7dcclxuICAgICAgY29uc29sZS5sb2coJ+afpeivouayueS7t+aIkOWKnycpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgc2VsZi5zZXREYXRhKHtcclxuICAgICAgICBbYGdueWpgXToge1xyXG4gICAgICAgICAgZGF0ZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKS5zcGxpdCgnICcpWzBdLFxyXG4gICAgICAgICAgcmVzdWx0OiByZXMucmVzdWx0XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygnZ255aicsIHNlbGYuZGF0YS5nbnlqKVxyXG4gICAgICAvLyDojrflj5blrprkvY1cclxuICAgICAgLy8gc2VsZi5nZXRMb2NhdGlvbigpLnRoZW4oKHJlczogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzLnJlc3VsdC5hZF9pbmZvLnByb3ZpbmNlKVxyXG4gICAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIC8vICAgICBpZiAocHJvdmluY2UuaW5kZXhPZihyZXNbaV0uY2l0eSkgPiAtMSkgeyAvLyDljLnphY3lvZPliY3ln47luIJcclxuICAgICAgLy8gICAgICAgbGV0IGN1cnJlbnREYXRhID0gcmVzW2ldXHJcbiAgICAgIC8vICAgICAgIHRoaXMuZGF0YS5nbnlqLnJlc3VsdC5zcGxpY2UoaSwgMSlcclxuICAgICAgLy8gICAgICAgdGhpcy5kYXRhLmdueWoucmVzdWx0LnVuc2hpZnQoY3VycmVudERhdGEpIC8vIOWwhuW9k+WJjeWfjuW4guaOkuWIsOesrOS4gOS9jVxyXG4gICAgICAvLyAgICAgICBicmVha1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmdueWopXHJcbiAgICAgIC8vIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIC8vIH0pXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pXHJcbiJdfQ==