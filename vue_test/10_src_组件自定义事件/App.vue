<template>
    <div class="app">
        <h1>{{ msg }}：{{ studentName }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>

        <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <!-- <Student v-on:atguigu="getStudentlName" @demo="m1"></Student> -->

        <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据（第二种写法，使用ref，更灵活） -->
        <Student ref="student" @click.native="showInfo"/>
    </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
    name: "App",
    components: { Student, School },
    data() {
        return {
            msg: "你好啊",
            studentName:''
        };
    },
    methods: {
        getSchoolName(val) {
            console.log("接收到了消息", val);
        },
        getStudentlName(val, ...params) {
            console.log("getStudentlName被调用了！", val, params);
            this.studentName = val
        },
        m1(){
            console.log('demo事件被触发了！')
        },
        showInfo(){
            alert('1,2,3')
        }
    },
    mounted() {
        // 绑定自定义事件
        this.$refs.student.$on("atguigu", this.getStudentlName);
        // 绑定自定义事件（一次性）
        // this.$refs.student.$once("atguigu", this.getStudentlName);
    },
};
</script>

<style>
.app {
    background-color: gray;
}
</style>