// 当前模块用于api的统一管理

import requests from './request';

// 三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => {
    // 发请求, 返回Promise对象
    return requests({
        url: '/product/getBaseCategoryList',  // baseUrl已经加了/api了
        method: 'get'
    })
}