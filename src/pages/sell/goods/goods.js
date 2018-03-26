"use strict";

Page({
  data: {
    files: [],
    campus: ["屯溪路校区", "翡翠湖校区", "宣城校区"],
    campusIndex: 3
  },

  chooseImage: function chooseImage(e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    });
  },
  previewImage: function previewImage(e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    });
  }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJkYXRhIiwiZmlsZXMiLCJjYW1wdXMiLCJjYW1wdXNJbmRleCIsImNob29zZUltYWdlIiwiZSIsInRoYXQiLCJ3eCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsInByZXZpZXdJbWFnZSIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ1cmxzIl0sIm1hcHBpbmdzIjoiOztBQUNBQSxLQUFLO0FBQ0hDLFFBQU07QUFDSkMsV0FBTyxFQURIO0FBRUpDLFlBQVEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixNQUFuQixDQUZKO0FBR0pDLGlCQUFhO0FBSFQsR0FESDs7QUFPSEMsZUFBYSxxQkFBVUMsQ0FBVixFQUFhO0FBQ3hCLFFBQUlDLE9BQU8sSUFBWDtBQUNBQyxPQUFHSCxXQUFILENBQWU7QUFDYkksZ0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQURHLEVBQ3lCO0FBQ3RDQyxrQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBRkMsRUFFb0I7QUFDakNDLGVBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QjtBQUNBTCxhQUFLTSxPQUFMLENBQWE7QUFDWFgsaUJBQU9LLEtBQUtOLElBQUwsQ0FBVUMsS0FBVixDQUFnQlksTUFBaEIsQ0FBdUJGLElBQUlHLGFBQTNCO0FBREksU0FBYjtBQUdEO0FBUlksS0FBZjtBQVVELEdBbkJFO0FBb0JIQyxnQkFBYyxzQkFBVVYsQ0FBVixFQUFhO0FBQ3pCRSxPQUFHUSxZQUFILENBQWdCO0FBQ2RDLGVBQVNYLEVBQUVZLGFBQUYsQ0FBZ0JDLEVBRFgsRUFDZTtBQUM3QkMsWUFBTSxLQUFLbkIsSUFBTCxDQUFVQyxLQUZGLENBRVE7QUFGUixLQUFoQjtBQUlEOztBQXpCRSxDQUFMIiwiZmlsZSI6Imdvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGZpbGVzOiBbXSxcclxuICAgIGNhbXB1czogW1wi5bGv5rqq6Lev5qCh5Yy6XCIsIFwi57+h57+g5rmW5qCh5Yy6XCIsIFwi5a6j5Z+O5qCh5Yy6XCJdLFxyXG4gICAgY2FtcHVzSW5kZXg6IDMsXHJcbiAgfSxcclxuXHJcbiAgY2hvb3NlSW1hZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcbiAgICAgICAgdGhhdC5zZXREYXRhKHtcclxuICAgICAgICAgIGZpbGVzOiB0aGF0LmRhdGEuZmlsZXMuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgcHJldmlld0ltYWdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgd3gucHJldmlld0ltYWdlKHtcclxuICAgICAgY3VycmVudDogZS5jdXJyZW50VGFyZ2V0LmlkLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcbiAgICAgIHVybHM6IHRoaXMuZGF0YS5maWxlcyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICB9KVxyXG4gIH1cclxuIFxyXG4gIFxyXG59KSJdfQ==