import { reqCategoryList } from '@/api';
// state: 存储数据的地方
const state = {
    categoryList: []
}
// mutations: 修改数据的方法
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
// actions：处理动作，可书写业务逻辑，以及异步
const actions = {
    async categoryList({ commit }) {
        let resp = await reqCategoryList()
        if (resp.code === 200) {
            commit('CATEGORYLIST', resp.data)
        }
    },
}
// getters：理解为计算属性，用于简化仓库，让组件获取数据更方便
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}