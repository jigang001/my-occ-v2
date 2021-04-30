"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./../../utils/util");
var app = getApp();
Page({
    data: {
        formData: {
            km: null,
            fill: null,
            amount: null,
            date: null
        },
        rules: [
            {
                name: 'km',
                rules: { required: true, message: '公里数必填' },
            },
            {
                name: 'fill',
                rules: [{ required: true, message: '加油量必填' }],
            },
            {
                name: 'amount',
                rules: { required: true, message: '支付金额必填' },
            },
            {
                name: 'date',
                rules: { required: true, message: '加油日期必选' },
            }
        ],
        recordData: []
    },
    bindDateChange: function (e) {
        var _a;
        this.setData((_a = {
                date: e.detail.value
            },
            _a["formData.date"] = e.detail.value,
            _a));
    },
    formInputChange: function (e) {
        var _a;
        var field = e.currentTarget.dataset.field;
        this.setData((_a = {},
            _a["formData." + field] = e.detail.value,
            _a));
    },
    getLogs: function () {
        var _a;
        try {
            this.setData((_a = {},
                _a["recordData"] = wx.getStorageSync('recordData') || [],
                _a));
        }
        catch (e) {
        }
    },
    submitForm: function () {
        var self = this;
        this.selectComponent('#form').validate(function (valid, errors) {
            console.log('valid', valid, errors);
            if (!valid) {
                var firstError = Object.keys(errors);
                if (firstError.length) {
                    wx.showToast({
                        title: errors[firstError[0]].message,
                        icon: 'none'
                    });
                }
            }
            else {
                self.data.recordData.push(self.data.formData);
                try {
                    wx.setStorageSync('recordData', self.data.recordData);
                }
                catch (e) { }
                wx.switchTab({
                    url: '../logs/logs'
                });
            }
        });
    },
    onLoad: function (options) {
        var _a;
        console.log(options);
        this.setData((_a = {},
            _a["formData.date"] = util_1.formatTime(new Date()).split(' ')[0],
            _a));
        console.log(this.data.formData.date);
        this.getLogs();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUErQztBQUUvQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYO1FBQ0QsS0FBSyxFQUFFO1lBQ0w7Z0JBQ0UsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDO2FBQzFDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUM1QztZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQzthQUMzQztZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQzthQUMzQztTQUNGO1FBQ0QsVUFBVSxFQUFFLEVBQUU7S0FDZjtJQUVELGNBQWMsWUFBRSxDQUFNOztRQUNwQixJQUFJLENBQUMsT0FBTztnQkFDVixJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztZQUNwQixHQUFDLGVBQWUsSUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7Z0JBQ2pDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZSxZQUFFLENBQU07O1FBQ1osSUFBQSxxQ0FBSyxDQUEyQjtRQUN2QyxJQUFJLENBQUMsT0FBTztZQUNSLEdBQUMsY0FBWSxLQUFPLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUN2QyxDQUFBO0lBQ04sQ0FBQztJQUVELE9BQU87O1FBQ0wsSUFBSTtZQUNGLElBQUksQ0FBQyxPQUFPO2dCQUNWLEdBQUMsWUFBWSxJQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtvQkFDckQsQ0FBQTtTQUNIO1FBQUMsT0FBTyxDQUFDLEVBQUU7U0FFWDtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQUMsS0FBVSxFQUFFLE1BQVc7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdEMsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO29CQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTzt3QkFDcEMsSUFBSSxFQUFFLE1BQU07cUJBQ2IsQ0FBQyxDQUFBO2lCQUNIO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQzdDLElBQUk7b0JBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtpQkFDdEQ7Z0JBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRztnQkFDZixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEdBQUcsRUFBRSxjQUFjO2lCQUNwQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU0sWUFBQyxPQUFPOztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLE9BQU87WUFDVixHQUFDLGVBQWUsSUFBRyxpQkFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDaEIsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi8uLi8uLi91dGlscy91dGlsJ1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGZvcm1EYXRhOiB7XG4gICAgICBrbTogbnVsbCwgLy8g5YWs6YeM5pWwXG4gICAgICBmaWxsOiBudWxsLCAvLyDliqDmsrnph49cbiAgICAgIGFtb3VudDogbnVsbCwgLy8g5pSv5LuY6YeR6aKdXG4gICAgICBkYXRlOiBudWxsIC8vIOm7mOiupOiOt+WPluW9k+WJjeaXpeacn1xuICAgIH0sXG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ttJyxcbiAgICAgICAgcnVsZXM6IHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+WFrOmHjOaVsOW/heWhqyd9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgICBydWxlczogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+WKoOayuemHj+W/heWhqyd9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhbW91bnQnLFxuICAgICAgICBydWxlczoge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5pSv5LuY6YeR6aKd5b+F5aGrJ30sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgIHJ1bGVzOiB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfliqDmsrnml6XmnJ/lv4XpgIknfSxcbiAgICAgIH1cbiAgICBdLFxuICAgIHJlY29yZERhdGE6IFtdIC8vIOWKoOayueiusOW9lVxuICB9LFxuICAvLyDpgInmi6nml6XmnJ9cbiAgYmluZERhdGVDaGFuZ2UgKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkYXRlOiBlLmRldGFpbC52YWx1ZSxcbiAgICAgIFtgZm9ybURhdGEuZGF0ZWBdOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gIC8vIOihqOWNlei+k+WFpVxuICBmb3JtSW5wdXRDaGFuZ2UgKGU6IGFueSkge1xuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gIH0sXG4gIC8vIOafpeivouWKoOayueiusOW9lVxuICBnZXRMb2dzICgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2ByZWNvcmREYXRhYF06IHd4LmdldFN0b3JhZ2VTeW5jKCdyZWNvcmREYXRhJykgfHwgW11cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gY2F0Y2ggZXJyb3JcbiAgICB9XG4gIH0sXG4gIC8vIOS/neWtmFxuICBzdWJtaXRGb3JtKCkge1xuICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzXG4gICAgdGhpcy5zZWxlY3RDb21wb25lbnQoJyNmb3JtJykudmFsaWRhdGUoKHZhbGlkOiBhbnksIGVycm9yczogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndmFsaWQnLCB2YWxpZCwgZXJyb3JzKVxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaXJzdEVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVxuICAgICAgICBpZiAoZmlyc3RFcnJvci5sZW5ndGgpIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IGVycm9yc1tmaXJzdEVycm9yWzBdXS5tZXNzYWdlLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5kYXRhLnJlY29yZERhdGEucHVzaChzZWxmLmRhdGEuZm9ybURhdGEpIC8vIOaWsOWinuS4gOadoeiusOW9lVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdyZWNvcmREYXRhJywgc2VsZi5kYXRhLnJlY29yZERhdGEpIC8vIOS/neWtmOiusOW9lVxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgICAgd3guc3dpdGNoVGFiKHsgLy8g6Lez6L2s5Yiw6K6w5b2V6aG1XG4gICAgICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucylcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgW2Bmb3JtRGF0YS5kYXRlYF06IGZvcm1hdFRpbWUobmV3IERhdGUoKSkuc3BsaXQoJyAnKVswXSAvLyDpu5jorqTojrflj5blvZPliY3ml6XmnJ9cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5mb3JtRGF0YS5kYXRlKVxuICAgIHRoaXMuZ2V0TG9ncygpXG4gIH1cbn0pXG4iXX0=