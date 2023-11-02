const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  //配置代理服务器方式一，缺点是只能配置一个代理且资源优先本地
  /* devServer:{
    proxy:'http://localhost:5000'
  } */
  //配置代理服务器方式2
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws: true,//用于支持websocket
        changeOrigin: true //用于控制请求中的host值
      },
      '/2api': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/2api':''},
        ws: true,//用于支持websocket
        changeOrigin: true //用于控制请求中的host值
      },
    }
  }
})
