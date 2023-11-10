// 引入Vue
import Vue from 'vue'
//引入APP
import App from './App.vue'

//引入VueRouter
import VueRouter from 'vue-router'

//引入vue-router对象
import router from './router'

Vue.config.productionTip = false


//应用插件
Vue.use(VueRouter)

//创建VM
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')