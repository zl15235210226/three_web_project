import request from "../utils/request";

/*
*获取验证码
*/
export function captchas(phone){
    return request({
      url:`/user/captcha/`+phone,
      method:"post",
    })
}

/*
* 修改密码
*/
export function updateUserByPwd(data){
  return request({
    url:`/user/updateUser`,
    method:"put",
    data
  })
}
