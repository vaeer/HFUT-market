var HOST_URL = "http://127.0.0.1:8000";


//通过函数获取url

//登录
function _Login() {
    return HOST_URL + "/userLogin";
}

//注册
function _Register() {
    return HOST_URL + "/userRegister";
}

module.exports = {
    Login: _Login,
    Register: _Register
}