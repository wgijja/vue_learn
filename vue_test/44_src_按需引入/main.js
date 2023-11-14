// 引入Vue
import Vue from 'vue'
//引入APP
import App from './App.vue'

//完事整入
//引入elementui组件库
// import ElementUI from 'element-ui';
//引入elementui的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button, Row, DataPicker } from 'element-ui'

Vue.config.productionTip = false

//应用
// Vue.use(ElementUI)

Vue.component('el-button', Button)
Vue.component('el-row', Row)
Vue.component('el-date-picker', DataPicker)

//创建VM
new Vue({
    render: h => h(App),
}).$mount('#app')