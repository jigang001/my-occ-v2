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
            date: util_1.formatTime(new Date()).split(' ')[0]
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
        self.selectComponent('#form').validate(function (valid, errors) {
            var _a;
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
                self.setData((_a = {},
                    _a["formData"] = {
                        km: null,
                        fill: null,
                        amount: null,
                        date: util_1.formatTime(new Date()).split(' ')[0]
                    },
                    _a));
                wx.switchTab({
                    url: '../logs/logs'
                });
            }
        });
    },
    onShow: function () {
        console.log(app);
        this.getLogs();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUErQztBQUUvQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUNELEtBQUssRUFBRTtZQUNMO2dCQUNFLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQzthQUMxQztZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDNUM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7YUFDM0M7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7YUFDM0M7U0FDRjtRQUNELFVBQVUsRUFBRSxFQUFFO0tBQ2Y7SUFFRCxjQUFjLFlBQUUsQ0FBTTs7UUFDcEIsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7WUFDcEIsR0FBQyxlQUFlLElBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dCQUNqQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWUsWUFBRSxDQUFNOztRQUNaLElBQUEscUNBQUssQ0FBMkI7UUFDdkMsSUFBSSxDQUFDLE9BQU87WUFDUixHQUFDLGNBQVksS0FBTyxJQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSztnQkFDdkMsQ0FBQTtJQUNOLENBQUM7SUFFRCxPQUFPOztRQUNMLElBQUk7WUFDRixJQUFJLENBQUMsT0FBTztnQkFDVixHQUFDLFlBQVksSUFBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7b0JBQ3JELENBQUE7U0FDSDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1NBRVg7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQTtRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFDLEtBQVUsRUFBRSxNQUFXOztZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDbkMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN0QyxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1gsS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO3dCQUNwQyxJQUFJLEVBQUUsTUFBTTtxQkFDYixDQUFDLENBQUE7aUJBQ0g7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDN0MsSUFBSTtvQkFDRixFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUN0RDtnQkFBQyxPQUFPLENBQUMsRUFBRSxHQUFHO2dCQUNmLElBQUksQ0FBQyxPQUFPO29CQUNWLEdBQUMsVUFBVSxJQUFHO3dCQUNaLEVBQUUsRUFBRSxJQUFJO3dCQUNSLElBQUksRUFBRSxJQUFJO3dCQUNWLE1BQU0sRUFBRSxJQUFJO3dCQUNaLElBQUksRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUMzQzt3QkFDRCxDQUFBO2dCQUVGLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsR0FBRyxFQUFFLGNBQWM7aUJBQ3BCLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ2hCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4vLi4vLi4vdXRpbHMvdXRpbCdcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBmb3JtRGF0YToge1xuICAgICAga206IG51bGwsIC8vIOWFrOmHjOaVsFxuICAgICAgZmlsbDogbnVsbCwgLy8g5Yqg5rK56YePXG4gICAgICBhbW91bnQ6IG51bGwsIC8vIOaUr+S7mOmHkeminVxuICAgICAgZGF0ZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKS5zcGxpdCgnICcpWzBdIC8vIOm7mOiupOiOt+WPluW9k+WJjeaXpeacn1xuICAgIH0sXG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ttJyxcbiAgICAgICAgcnVsZXM6IHtyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+WFrOmHjOaVsOW/heWhqyd9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgICBydWxlczogW3tyZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+WKoOayuemHj+W/heWhqyd9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhbW91bnQnLFxuICAgICAgICBydWxlczoge3JlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn5pSv5LuY6YeR6aKd5b+F5aGrJ30sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZGF0ZScsXG4gICAgICAgIHJ1bGVzOiB7cmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfliqDmsrnml6XmnJ/lv4XpgIknfSxcbiAgICAgIH1cbiAgICBdLFxuICAgIHJlY29yZERhdGE6IFtdIC8vIOWKoOayueiusOW9lVxuICB9LFxuICAvLyDpgInmi6nml6XmnJ9cbiAgYmluZERhdGVDaGFuZ2UgKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBkYXRlOiBlLmRldGFpbC52YWx1ZSxcbiAgICAgIFtgZm9ybURhdGEuZGF0ZWBdOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gIC8vIOihqOWNlei+k+WFpVxuICBmb3JtSW5wdXRDaGFuZ2UgKGU6IGFueSkge1xuICAgICAgY29uc3Qge2ZpZWxkfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIFtgZm9ybURhdGEuJHtmaWVsZH1gXTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gIH0sXG4gIC8vIOafpeivouWKoOayueiusOW9lVxuICBnZXRMb2dzICgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgW2ByZWNvcmREYXRhYF06IHd4LmdldFN0b3JhZ2VTeW5jKCdyZWNvcmREYXRhJykgfHwgW11cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gRG8gc29tZXRoaW5nIHdoZW4gY2F0Y2ggZXJyb3JcbiAgICB9XG4gIH0sXG4gIC8vIOS/neWtmFxuICBzdWJtaXRGb3JtKCkge1xuICAgIGxldCBzZWxmOiBhbnkgPSB0aGlzXG4gICAgc2VsZi5zZWxlY3RDb21wb25lbnQoJyNmb3JtJykudmFsaWRhdGUoKHZhbGlkOiBhbnksIGVycm9yczogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygndmFsaWQnLCB2YWxpZCwgZXJyb3JzKVxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBjb25zdCBmaXJzdEVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVxuICAgICAgICBpZiAoZmlyc3RFcnJvci5sZW5ndGgpIHtcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IGVycm9yc1tmaXJzdEVycm9yWzBdXS5tZXNzYWdlLFxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5kYXRhLnJlY29yZERhdGEucHVzaChzZWxmLmRhdGEuZm9ybURhdGEpIC8vIOaWsOWinuS4gOadoeiusOW9lVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdyZWNvcmREYXRhJywgc2VsZi5kYXRhLnJlY29yZERhdGEpIC8vIOS/neWtmOiusOW9lVxuICAgICAgICB9IGNhdGNoIChlKSB7IH1cbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBbYGZvcm1EYXRhYF06IHsgLy8g6YeN572u6KGo5Y2VXG4gICAgICAgICAgICBrbTogbnVsbCwgLy8g5YWs6YeM5pWwXG4gICAgICAgICAgICBmaWxsOiBudWxsLCAvLyDliqDmsrnph49cbiAgICAgICAgICAgIGFtb3VudDogbnVsbCwgLy8g5pSv5LuY6YeR6aKdXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCkpLnNwbGl0KCcgJylbMF0gLy8g6buY6K6k6I635Y+W5b2T5YmN5pel5pyfXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyDot7PovazliLDorrDlvZXpobVcbiAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgb25TaG93KCkge1xuICAgIGNvbnNvbGUubG9nKGFwcClcbiAgICB0aGlzLmdldExvZ3MoKVxuICB9XG59KVxuIl19