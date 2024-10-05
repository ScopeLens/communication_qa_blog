import http from "../http.js";

const noAuthPath = "/out/api"
    //登录
export const noAuthLogin=(params)=>{
    return http.post(noAuthPath+"/login", params);
}
//退出
export const noAuthRegister=(params) =>{
    return http.post(noAuthPath+"/register", params);
}

export const IsUsernameExist=(params) =>{
    return http.get("/verify-username",params);
}

export const VerifyCode=(params) =>{
    return http.post(noAuthPath+"/verify-code",params);
}
//获取用户数据

//其实，也不一定就是params，也可以是 query 还有 data 的呀！
//params是添加到url的请求字符串中的，用于get请求。会将参数加到 url后面。所以，传递的都是字符串。无法传递参数中含有json格式的数据
//而data是添加到请求体（body）中的， 用于post请求。添加到请求体（body）中，json 格式也是可以的。