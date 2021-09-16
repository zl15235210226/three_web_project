import request from "../utils/request";

/**
 * 课程列表
 */
export  function  products(){
  return request({
    url:`/project`
  })
}
/**
 * 保存课程
 */
export function saveProduct(data) {
  return request({
    url: `/product`,
    method:"POST",
    data
  })
}

