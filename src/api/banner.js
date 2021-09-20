import request from "../utils/request";

/*
*查询所有轮播图图片
*/
export function queryBanner(){
  return request({
    url:"/banner/queryBanner",
    method:"get",
  })
}
