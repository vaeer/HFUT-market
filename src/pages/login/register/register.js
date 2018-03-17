Page({
    // 获取输入账号 
    usernameInput: function (e) {
        this.setData({
          phone: e.detail.value
        })
      },
    
      // 获取输入密码 
      passwordInput: function (e) {
        this.setData({
          password: e.detail.value
        })
      },
})