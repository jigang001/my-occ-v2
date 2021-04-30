"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    data: {
        recordData: [],
    },
    onLoad: function () {
        this.getLogs();
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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtLQUNmO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBQ0QsT0FBTzs7UUFDTCxJQUFJO1lBQ0YsSUFBSSxDQUFDLE9BQU87Z0JBQ1YsR0FBQyxZQUFZLElBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO29CQUNyRCxDQUFBO1NBQ0g7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ3MudHNcbi8vIGNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsLmpzJylcbmltcG9ydCB7IGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHJlY29yZERhdGE6IFtdLFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRMb2dzKClcbiAgfSxcbiAgZ2V0TG9ncyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIFtgcmVjb3JkRGF0YWBdOiB3eC5nZXRTdG9yYWdlU3luYygncmVjb3JkRGF0YScpIHx8IFtdXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aGVuIGNhdGNoIGVycm9yXG4gICAgfVxuICB9XG59KVxuIl19