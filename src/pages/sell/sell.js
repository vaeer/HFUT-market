'use strict';

Page({

  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {},

  Togoods: function Togoods() {
    wx.switchTab({
      url: './goods/goods'
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGwuanMiXSwibmFtZXMiOlsiUGFnZSIsImRhdGEiLCJvbkxvYWQiLCJvcHRpb25zIiwib25SZWFkeSIsIm9uU2hvdyIsIm9uSGlkZSIsIm9uVW5sb2FkIiwib25QdWxsRG93blJlZnJlc2giLCJvblJlYWNoQm90dG9tIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJUb2dvb2RzIiwid3giLCJzd2l0Y2hUYWIiLCJ1cmwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEtBQUs7O0FBRUg7OztBQUdBQyxRQUFNLEVBTEg7O0FBU0g7OztBQUdBQyxVQUFRLGdCQUFVQyxPQUFWLEVBQW1CLENBRTFCLENBZEU7O0FBZ0JIOzs7QUFHQUMsV0FBUyxtQkFBWSxDQUVwQixDQXJCRTs7QUF1Qkg7OztBQUdBQyxVQUFRLGtCQUFZLENBRW5CLENBNUJFOztBQThCSDs7O0FBR0FDLFVBQVEsa0JBQVksQ0FFbkIsQ0FuQ0U7O0FBcUNIOzs7QUFHQUMsWUFBVSxvQkFBWSxDQUVyQixDQTFDRTs7QUE0Q0g7OztBQUdBQyxxQkFBbUIsNkJBQVksQ0FFOUIsQ0FqREU7O0FBbURIOzs7QUFHQUMsaUJBQWUseUJBQVksQ0FFMUIsQ0F4REU7O0FBMERIOzs7QUFHQUMscUJBQW1CLDZCQUFZLENBRTlCLENBL0RFOztBQWlFSEMsV0FBUSxtQkFBVTtBQUNoQkMsT0FBR0MsU0FBSCxDQUFhO0FBQ1hDLFdBQUs7QUFETSxLQUFiO0FBR0Q7QUFyRUUsQ0FBTCIsImZpbGUiOiJzZWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgKi9cclxuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICBUb2dvb2RzOmZ1bmN0aW9uKCl7XHJcbiAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICB1cmw6ICcuL2dvb2RzL2dvb2RzJ1xyXG4gICAgfSlcclxuICB9XHJcbn0pIl19