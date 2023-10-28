export default {
    install(Vue,x,y,z){

        console.log(x,y,z)
        
        //全局过滤器
        Vue.filter('mySlice2',function(value){
            return value.slice(0,4)
        })

        //全局指令定义
        Vue.directive('fbind', {
            //当指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })
        Vue.directive('big', function (element, binding) {
            //注意，此处的this是window
            console.log('@', this)
            element.innerText = binding.value * 10
        })

        Vue.mixin({
            data() {
                return {
                    x:1000,
                    y:200
                }
            }
        })
    }
}

