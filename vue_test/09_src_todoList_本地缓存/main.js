// 引入Vue
import Vue from 'vue'
//引入APP
import App from './App.vue'

Vue.config.productionTip = false

//创建VM
new Vue({
    render: h => h(App)
}).$mount('#app')