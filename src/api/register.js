import request from "../utils/request";


/*
*手机号格式验证
*/
export function judgePhone(params){
  return request({
    url:`/user/judgePhone`,
    method:"get",
    params
  })
}

/*
*验证码获取
*/
export function captcha(code){
  return request({
    url:`/user/captcha/`+code,
    method:"post",
  })
}

/*
*注册
*/
export function adduser(data){
  return request({
    url:`/user/addUser`,
    method:"post",
    data
  })
}

/*
判断手机号是否已经注册
*/
export function queryUserPhone(phone){
  return request({
    url:`/user/queryUsrByPhone/`+phone,
    method:"get",
  })
}
