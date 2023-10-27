<template>
    <div class="student">
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ myAge + 1 }}</h2>
        <button @click="changeAge">尝试修改年龄</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "你好哇",
            myAge:this.age
        };
    },
    // props: ["name", "sex", "age"], 简单接收

    //接收的同时对数据类型进行限制
    /* props:{
        name:String,
        age:Number,
        sex:String
    } */

    //限制类型+默认值+必要性限制
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        }
    },
    methods:{
        changeAge(){
            this.myAge++
        }
    }
};
</script>

<style>
.student {
    background-color: orange;
}
</style>