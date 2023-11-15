<template>
    <h1>我是APP组件</h1>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别：{{ sex }}</h2>
    <h2>a:{{ a }}</h2>
    <button @click="sayHello">说3话</button>
    <button @click="welcome">说2话</button>
    <button @click="testRead3">在vue2的配置中去读取3的配置</button>
    <button @click="testRead2">在vue3的setup配置中去读取2的配置</button>
</template>

<script>
import { h } from "vue";

export default {
    name: "App",

    data() {
        return {
            sex: "男",
            a: 100,
        };
    },
    methods: {
        welcome() {
            alert("欢迎学习VUe");
        },
        testRead3() {
            console.log(this.sex);
            console.log(this.name);
            console.log(this.age);
            console.log(this.sayHello);
        },
    },

    //此处暂时不考虑响应式
    setup() {
        //数据
        let name = "张三";
        let age = 18;
        let a = 200;

        //方法
        function sayHello() {
            alert(`你好啊，我叫${name},我今年${age}岁了`);
        }

        function testRead2() {
            console.log(name);
            console.log(age);
            console.log(this.sex);
            console.log(this.welcome);
        }

        //返回一个对象（常用）
        return {
            name,
            age,
            sayHello,
            testRead2,
        };
        //返回一个渲染函数
        /* return () => {
            return h("h1", "尚硅谷");
        }; */
    },
};
</script>
