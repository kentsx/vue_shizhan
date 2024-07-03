// 对于axios二次封装
import axios from 'axios';
// 引入进度条
import nprogress from 'nprogress';
// start方法，进度条开始；done方法，进度条结束
// 引入进度条样式
import 'nprogress/nprogress.css'

// 1 利用axios方法create创建axios实例
const requests = axios.create({
    baseURL: '/api',   //路径当中都带有/api，就不用再写了
    timeout: 5000,
})

// 请求拦截器：在请求发出前可以检测到，做一些业务
requests.interceptors.request.use((config) => {
    // 对象中有一个属性很重要，Headers请求头
    nprogress.start()
    return config
})

// 响应拦截器
requests.interceptors.response.use(
    (res) => {
        // 成功的回调函数
        nprogress.done()
        return res.data
    },
    (error) => {
        // 失败的相应
        return Promise.reject(new Error('Failed'))
    }
)

export default requests