<template>
    <hr />
    数值是:{{ sum }}
    <button @click="sum++">点击加1</button>
    <hr />
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age += 1">增加年龄</button>
    <button @click="job.j1.salary += 1">涨薪</button>
</template>

<script>
import {
    reactive,
    readonly,
    ref,
    shallowReactive,
    shallowReadonly,
    shallowRef,
    toRefs,
} from "vue";

export default {
    name: "Demo",
    setup() {
        let sum = ref(0);
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                j1: {
                    salary: 20,
                },
            },
        });

        // person = readonly(person)
        person = shallowReadonly(person);

        // sum = readonly(sum)
        sum = shallowReadonly(sum);

        return {
            sum,
            ...toRefs(person),
        };
    },
};
</script>
