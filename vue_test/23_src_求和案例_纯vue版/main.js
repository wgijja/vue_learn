// 引入Vue
import Vue from 'vue'
//引入APP
import App from './App.vue'
//引入插件
import VueResource from 'vue-resource'

Vue.config.productionTip = false

//使用插件
Vue.use(VueResource)

//创建VM
new Vue({
    render: h => h(App),
    beforeCreate() {
        //安装全局事件总线
        Vue.prototype.$bus = this
    },
}).$mount('#app')