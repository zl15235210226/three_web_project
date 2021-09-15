import  request from "../utils/request";
import {methods} from "babel-plugin-transform-runtime/lib/definitions";

/**
 * 用户登录
 */
export function  login(data){
  return request({
    url:`/login`,
    method:'post',
    data
  })
}

/**
 * 获取验证码
 */
export  function  captcha(){
  return request({
    url:`/captcha`,

  })
}
/**
 * 获取用户登录状态
 */

export function VerificationUser(){
  return  request({
    url:`/VerificationUser`,
    method:`post`,
  })


}
/**
 * 退出登录
 */
export function exit(token){
  return request({
    url:`/exit/{token}`,
    method:'post',
    token
  })
}
