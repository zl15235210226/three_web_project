import request from "../utils/request";


/*
*查询导航栏
*/
export function queryNav(){
  return request({
    url:`/nav/queryNav`,
    method:"get",
  })
}

/*
*登录状态检查
*/
export function verify(params){
  return request({
    url:"/user/verify",
    method:"get",
    params
  })
}

/*
*退出系统
*/
export function deleteToken(token){
  return request({
    url:"/user/deleteToken/"+token,
    method:"delete",
  })
}
