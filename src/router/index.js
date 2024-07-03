import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// 重写push/relace方法前先备份一份，因为重复点击会因为Promise问题导致NavigationDuplicate问题
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

//重写push方法
// 参数要给三个，第一个是push的地址；第二个：成功回调；第三个：失败回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { show: true }
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/search',  //如果用params，要在path中占位，比如/:id
            component: Search,
            meta: { show: true },
            name: 'search'  // 如果用对象写法传参，必须要给路由取名
        },
    ]
})