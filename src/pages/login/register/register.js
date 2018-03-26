var wepy = require('wepy');
var Api = require('../../../utils/api');

Page({
    formSubmit: function (e) {
        var name = e.detail.value.name;
        var username = e.detail.value.username;
        var password = e.detail.value.password;
        var pattern = /^[a-zA-Z0-9_-]{4,16}$/;
        
        console.log(username, password);
        if (username.lenth === 0 || password.length === 0 || name.length === 0) {
            wx.showToast({
                title: '请输入完整',
                image: '../../../images/icon/error.png'
            })
        }
        else if(!(username.match(pattern) && password.match(pattern))) {
            wx.showToast({
                title: '格式不正确',
                image: '../../../images/icon/error.png'
            })
        }
        else {
            wx.request({
                url: Api.Register(),
                method: 'POST',
                data: {
                    name: name,
                    username: username,
                    password: password
                },
                dataType: 'json',
                fail: function (res) {
                    console.log(res);

                },
                success: function (res) {
                    console.log('success');
                    console.log(res);
                    var msg = res.data.msg;
                    var code = res.data.code;
                    if (code == '200') {
                        setTimeout(function () {
                            wx.showToast({
                                title: msg,
                                icon: 'success',
                            })
                            setTimeout(function(){
                                wx.navigateBack({
                                    delta: 1
                                  })
                            }, 800);
                        })

                    }
                    else {
                        wx.showToast({
                            title: msg,
                            image: '../../../images/icon/error.png',
                        })
                    }
                }
            })
        }
    },
})