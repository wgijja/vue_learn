<template>
    <h1>我是APP组件</h1>
    姓：<input type="text" v-model="person.firstName" /><br />
    名：<input type="text" v-model="person.lastName" /><br />
    全名：{{ person.fullName }} <br />
    全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";

export default {
    name: "Demo",
    setup(props, context) {
        //数据
        let person = reactive({
            firstName: "张",
            lastName: "三",
        });
        //计算属性（简写，不考虑修改情况）
        /* person.fullName = computed(() => {
            return person.firstName + "-" + person.lastName;
        }); */

        //计算属性，完整写法
        person.fullName = computed({
            get() {
                return person.firstName + "-" + person.lastName;
            },
            set(val) {
                const nameArr = val.split("-");
                person.firstName = nameArr[0];
                person.lastName = nameArr[1];
            },
        });

        //返回一个对象（常用）
        return {
            person,
        };
    },
};
</script>
