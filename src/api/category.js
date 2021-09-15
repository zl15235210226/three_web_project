import request from "../utils/request";

/**
 * 类别列表
 */
export function categorys() {
    return request({
        url: `/categorys`,
    })
}

/**
 * 新增类别
 */
export function addCategory(data) {
    return request({
        url: `/categorys`,
        method: "post",
        data
    })
}

/**
 * 删除类别
 */
export function deleteCategory(id){
    return request({
        url: `/delete/`+id,
        method: "delete"
    })
}

/**
 * 修改类别
 */
