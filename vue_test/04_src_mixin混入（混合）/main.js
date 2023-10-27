// 引入Vue
import Vue from 'vue'
//引入APP
import App from './App.vue'

import {mixin,mixin2} from './mixin'

Vue.config.productionTip = false
Vue.mixin(mixin,mixin2)

//创建VM
new Vue({
    render: h => h(App)
}).$mount('#app')