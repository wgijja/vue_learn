<template>
    <h1>我是APP组件</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">触发父组件的hello事件</button>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "Demo",
    /* beforeCreate() {
        console.log("------beforecreate---");
    }, */

    props: ["msg", "school"],
    emits: ["hello"],
    setup(props, context) {
        // console.log("---setup---", props);
        // console.log("---setup---", context);
        // console.log("---setup---", context.attrs); //相当于vue2中的￥attrs
        // console.log("---setup---", context.emit); //触发自定义事件
        console.log("---setup---", context.slots); //插槽
        let person = reactive({
            name: "张三",
            age: 18,
        });

        function test() {
            context.emit("hello", 666);
        }

        //返回一个对象（常用）
        return {
            person,
            test,
        };
    },
};
</script>
