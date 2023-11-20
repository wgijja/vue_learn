<template>
    <hr />
    数值是:{{ x.y }}
    <button @click="x.y++">点击加1</button>
    <hr />
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age += 1">增加年龄</button>
    <button @click="job.j1.salary += 1">涨薪</button>
</template>

<script>
import { reactive, ref, shallowReactive, shallowRef, toRefs } from "vue";

export default {
    name: "Demo",
    setup() {
        // let person = shallowReactive({ 只考虑第一层的响应式
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        // let x = shallowRef({ y: 0 }); 不进行对象的响应式处理
        let x = ref({ y: 0 });

        return {
            x,
            ...toRefs(person),
        };
    },
};
</script>
