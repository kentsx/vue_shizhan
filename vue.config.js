const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,    // eslint 关闭
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {   // 路径中出现/api就走代理服务器
        target: 'http://gmall-h5-api.atguigu.cn',   // 目标服务器
        // pathRewrite: { '^/api': '' },   // 路径重写
      },
    },
  },
})
