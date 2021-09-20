import request from "../utils/request";

/*
*登陆
*/
export function login(params){
  return request({
    url:"/user/login",
    method:"get",
    params
  })
}

/*
*获取手机登录验证码
*/
export function captcha(phone){
  return request({
    url:`/user/captcha/`+phone,
    method:"post",
  })
}

/*
*手机号、验证码登录
*/
export function LoginByPhone(params){
  return request({
    url:`/user/loginByPhone`,
    method:"get",
    params
  })
}
