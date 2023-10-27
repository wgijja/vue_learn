<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方的Dom元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
//引入School组件
import School from "./components/School.vue";

export default {
    name: "App",
    components: { School },
    data() {
        return {
            msg: "欢迎学习Vue",
        };
    },
    methods: {
        showDom() {
            console.log(this.$refs.title) //获取真实dom对象
            console.log(this.$refs.btn) //获取真实dom对象
            console.log(this.$refs.sch) //获取组件实例对象 vc
        },
    },
};
</script>
