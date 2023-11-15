<template>
    <h1>我是APP组件</h1>
    <h2 v-show="person.name">姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
    <h2>工作种类：{{ person.job.type }}</h2>
    <h2>工作薪水：{{ person.job.salary }}</h2>
    <h2>爱好：{{ person.hobby }}</h2>
    <h2>测试数据：{{ person.job.a.b.c }}</h2>
    <button @click="update">修改人的信息</button>
    <button @click="addSex">添加一个Sex</button>
    <button @click="deleteName">移除Name</button>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "App",
    setup() {
        //数据
        let person = reactive({
            name: "张三",
            age: 18,
            job: {
                type: "前端工程师",
                salary: "30k",
                a: {
                    b: {
                        c: 999,
                    },
                },
            },
            hobby: ["抽烟", "喝酒", "烫头"],
        });

        //方法
        function update() {
            person.name = "李四";
            person.age = 38;
            person.job.type = "后端工程师";
            person.job.salary = "100k";
            person.job.a.b.c = 100;
            person.hobby[0] = "哈哈哈哈大笑";
        }

        function addSex(){
          person.sex = '男'
        }

        function deleteName(){
          delete person.name
        }

        //返回一个对象（常用）
        return {
            person,
            update,
            addSex,
            deleteName,
        };
    },
};
</script>
