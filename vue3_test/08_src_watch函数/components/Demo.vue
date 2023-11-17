<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <hr />
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg += '！'">修改信息</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}k</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age += 1">增加年龄</button>
    <button @click="person.job.j1.salary += 1">涨薪</button>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
    name: "Demo",
    setup(props, context) {
        let sum = ref(0);
        let msg = ref("你好哇");
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        //情况一：监视ref所定义的一个响应式数据
        /* watch(
            sum,
            (newVal, oldVal) => {
                console.log("sum变了", newVal, oldVal);
            },
            { immediate: true }
        ); */

        //情况二：监视ref所定义的多个响应式数据
        /*  watch([sum, msg], (newVal, oldVal) => {
            console.log("sum或者msg变了", newVal, oldVal);
        },{ immediate: true}); */

        /*
        情况三：监视reactive所定义的一个响应式数据的全部属性,注意：
            1、此处无法正确的获取oldValue
            2、强制开启了尝试监视（deep配置无效）
         */
        /*  watch(
            person,
            (newVal, oldVal) => {
                console.log("person变了", newVal, oldVal);
            },
            { deep: true }
        ); */

        //情况四：监视reactive所定义的一个响应式数据的某个属性,需要把监视的值定义成函数
        /* watch(
            () => person.age,
            (newVal, oldVal) => {
                console.log("person的age变了", newVal, oldVal);
            }
        ); */

        //情况五：监视reactive所定义的一个响应式数据的某些属性
        /* watch([() => person.age, () => person.name], (newVal, oldVal) => {
            console.log("person的age或name变了", newVal, oldVal);
        }); */

        //特殊情况
        watch(
            () => person.job,
            (newVal, oldVal) => {
                console.log("person的job变了", newVal, oldVal);
            },
            { deep: true }
        );

        return {
            sum,
            msg,
            person,
        };
    },
};
</script>
