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
export function updateUserStatus(params) {
    return request({

    })
}
