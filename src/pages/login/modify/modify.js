var wepy = require('wepy');
var Api = require('../../../utils/api');

Page({
    formSubmit: function (e) {
        var username = e.detail.value.username;
        var oldpwd = e.detail.value.oldpwd;
        var newpwd = e.detail.value.newpwd;
        var pattern = /^[a-zA-Z0-9_-]{4,16}$/;

        console.log(oldpwd, newpwd);
        if (username.lenth === 0 || oldpwd.length === 0 || newpwd.length === 0) {
            wx.showToast({
                title: '请输入完整',
                image: '../../../images/icon/error.png'
            })
        }
        else if(!newpwd.match(pattern)) {
            wx.showToast({
                title: '格式不正确',
                image: '../../../images/icon/error.png'
            })
        }
        else if (oldpwd === newpwd) {
            wx.showToast({
                title: '新旧密码相同',
                image: '../../../images/icon/error.png'
            })
        }
        else {
            wx.request({
                url: Api.Modify(),
                method: 'POST',
                data: {
                    username: username,
                    oldpwd: oldpwd,
                    newpwd: newpwd
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
                    console.log(msg, code);
                    if (code == '200') {
                        setTimeout(function () {
                            wx.showToast({
                                title: msg,
                                icon: 'success',
                            })
                            setTimeout(function () {
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
    }
})