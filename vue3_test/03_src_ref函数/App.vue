<template>
    <h1>我是APP组件</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>工作种类：{{ job.type }}</h2>
    <h2>工作薪水：{{ job.salary }}</h2>
    <button @click="update">修改人的信息</button>
</template>

<script>
import { ref } from "vue";

export default {
    name: "App",
    setup() {
        //数据
        let name = ref("张三");
        let age = ref(18);
        let job = ref({
            type: "前端工程师",
            salary: "30k",
        });

        //方法
        function update() {
            name.value = "李四";
            age.value = 38;
            job.value.type = '后端工程师'
            job.value.salary = '100k'
        }

        //返回一个对象（常用）
        return {
            name,
            age,
            update,
            job,
        };
    },
};
</script>
