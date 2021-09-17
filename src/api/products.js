import request from "../utils/request";

/**
 * 课程列表
 */
export function products(params) {
  return request({
    url: `/QueryAllProduct`,
    method: "GET",
    params

  })
}

/**
 * 保存课程
 */
export function saveProduct(data) {
  return request({
    url: `/SaveProduct`,
    method:"POST",
    data
  })
}
/**
 * 修改用户状态
 */
export function updateProduct(params) {
  return request({
    url: `/UpdateProduct`,
    method: "POST",
    params
  })
}
/**
 * 删除类别
 */
export function deleteProduct(id){
  return request({
    url: `/DeleteProduct/`+id,
    method: "delete"
  })
}
