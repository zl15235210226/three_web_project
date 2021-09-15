import request from "../utils/request";

/**
 * 用户列表
 */
export function userList(params) {
  return request({
    url: `/users`,
    params
  })
}

/**
 * 修改用户状态
 */
export function updateUserStatus(data) {
  return request({
    url: `/userupdate`,
    method: "post",
    data
  })
}

/**
 * 删除用户
 */
export function deleteUserStatus(id) {
  return request({
    url: `/userdelete/`+id,
    method: "delete"
  })
}
